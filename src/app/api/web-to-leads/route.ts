import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, setSecurityHeaders, isIPBlocked } from '../../../lib/security-middleware';
import { EdgeInputValidator } from '../../../lib/edge-validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CRM_URL = process.env.CRM_WEB_TO_LEADS_URL || 'https://navigatorcrm.online/api/web-to-leads';
const DEFAULT_BRANCH = process.env.CRM_DEFAULT_BRANCH || 'Dubai';

const clean = (value: unknown, max = 200) =>
  typeof value === 'string' ? EdgeInputValidator.sanitizeString(value, max) : '';

export async function POST(request: NextRequest) {
  if (isIPBlocked(request)) {
    return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
  }

  const rateLimitResult = rateLimit(request);
  if (!rateLimitResult.success) {
    return setSecurityHeaders(
      NextResponse.json({ success: false, message: 'Too many requests.' }, { status: 429 })
    );
  }

  try {
    const body = await request.json();
    const lastName = clean(body.lastName);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 30);

    if (!lastName || (!email && !phone)) {
      return setSecurityHeaders(
        NextResponse.json(
          { success: false, message: 'lastName and email or phone are required' },
          { status: 400 }
        )
      );
    }

    const payload = {
      lastName,
      email,
      phone,
      LeadSource: 'Website',
      branch: clean(body.branch) || DEFAULT_BRANCH,
      DestinationCountry: clean(body.DestinationCountry),
      ImmigrationType: clean(body.ImmigrationType),
      ResidentCountry: clean(body.ResidentCountry),
    };

    const crmResponse = await fetch(CRM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });

    if (!crmResponse.ok) {
      console.error('CRM web-to-leads failed:', crmResponse.status, await crmResponse.text());
      return setSecurityHeaders(
        NextResponse.json({ success: false, message: 'CRM rejected the lead' }, { status: 502 })
      );
    }

    return setSecurityHeaders(NextResponse.json({ success: true }));
  } catch (error) {
    console.error('Error posting lead to CRM:', error);
    return setSecurityHeaders(
      NextResponse.json({ success: false, message: 'Failed to submit lead' }, { status: 500 })
    );
  }
}
