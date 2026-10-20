export interface LeadInput {
  name: string;
  email?: string;
  phone?: string;
  branch?: string;
  DestinationCountry?: string;
  ImmigrationType?: string;
  ResidentCountry?: string;
}

// Fire-and-forget: a CRM failure must never block the visitor's form submission.
export function submitLead(lead: LeadInput): void {
  const { name, ...rest } = lead;
  fetch('/api/web-to-leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lastName: name, ...rest }),
    keepalive: true,
  }).catch((error) => console.error('Lead submission error:', error));
}
