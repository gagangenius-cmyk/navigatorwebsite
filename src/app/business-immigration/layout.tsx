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
  buildWebPageSchemaWithReview,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.businessImmigration);

const businessSteps = [
  { position: 1, name: 'Initial Consultation', text: 'Review your goals, investment capacity and evidence against relevant business immigration or investor visa criteria.', url: `${siteUrl}/business-immigration#overview` },
  { position: 2, name: 'Business Plan Development', text: 'Prepare a business plan or investment evidence when the selected program requires it.', url: `${siteUrl}/business-immigration#investment` },
  { position: 3, name: 'Due Diligence & Documentation', text: 'Identify any background, source-of-funds, legal or financial evidence required for the selected route.', url: `${siteUrl}/business-immigration#requirements` },
  { position: 4, name: 'Investment Execution', text: 'Complete an investment or business-establishment step only where it is required by the chosen program.', url: `${siteUrl}/business-immigration#investment` },
  { position: 5, name: 'Application & Approval', text: 'Prepare the application for review by the competent authority, which makes the decision under the program rules.', url: `${siteUrl}/business-immigration#process` },
  { position: 6, name: 'Post-Approval Support', text: 'If included in the agreed service, organise eligible family-member documentation and explain relevant post-grant conditions.', url: `${siteUrl}/business-immigration#contact` },
];

export default function BusinessImmigrationLayout({
  children,
}: {
  children: ReactNode
}) {
  const serviceSchema = buildServiceSchema(coreSeoPages.businessImmigration);
  const faqSchema = buildFaqSchema(coreSeoPages.businessImmigration.faqs);
  const howToSchema = buildHowToSchema(businessSteps, 'Business Immigration & Investor Visa');
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.businessImmigration);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/business-immigration`);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(coreSeoPages.businessImmigration.breadcrumbs)}
      />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={howToSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
