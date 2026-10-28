import { Metadata } from 'next'
import { ReactNode } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
  buildPageMetadata,
  buildServiceSchema,
  buildSpeakableSchema,
  buildVideoObjectSchema,
  buildWebPageSchemaWithReview,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.visitVisa);

const visitSteps = [
  { position: 1, name: 'Eligibility Check', text: 'Review the current visitor visa category and criteria for your destination and travel purpose.', url: `${siteUrl}/visit-visa#overview` },
  { position: 2, name: 'Document Preparation', text: 'Use the destination authority checklist to gather the documents that apply to your case; examples may include identity, itinerary, and financial evidence.', url: `${siteUrl}/visit-visa#requirements` },
  { position: 3, name: 'Application Submission', text: 'Submit the application through the official channel for your destination and follow the authority instructions.', url: `${siteUrl}/visit-visa#process` },
  { position: 4, name: 'Application Follow-up', text: 'Check application updates through the official channel and respond to any requests from the authority.', url: `${siteUrl}/visit-visa#process` },
  { position: 5, name: 'Visa Approval & Travel', text: 'After a decision, check your visa conditions and entry dates before finalizing travel.', url: `${siteUrl}/visit-visa#contact` },
];

export default function VisitVisaLayout({
  children,
}: {
  children: ReactNode
}) {
  const serviceSchema = buildServiceSchema(coreSeoPages.visitVisa);
  const faqSchema = buildFaqSchema(coreSeoPages.visitVisa.faqs);
  const howToSchema = buildHowToSchema(visitSteps, 'Visit Visa');
  const videoSchema = buildVideoObjectSchema(
    '/videos/visit-visa.mp4',
    'Visit Visa Program Overview - Navigator Immigration',
    'Watch an overview of visitor visa application planning for tourism, family visits, and short business trips from Dubai.',
    `${siteUrl}/title.webp`
  );
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.visitVisa);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/visit-visa`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.visitVisa.breadcrumbs)} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={howToSchema} />
      <JsonLd data={videoSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
