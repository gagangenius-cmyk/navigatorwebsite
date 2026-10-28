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

export const metadata: Metadata = buildPageMetadata(coreSeoPages.studentVisa);

const studentSteps = [
  { position: 1, name: 'Eligibility Check', text: 'We discuss your academic background and study preferences, then help identify program options to research further.', url: `${siteUrl}/student-visa#overview` },
  { position: 2, name: 'University Application', text: 'We can help organize institution applications; admission requirements and decisions are set by each institution.', url: `${siteUrl}/student-visa#destinations` },
  { position: 3, name: 'Document Preparation', text: 'Document requirements vary by destination, course, and applicant. Check the official institution and immigration authority lists for your case.', url: `${siteUrl}/student-visa#requirements` },
  { position: 4, name: 'Visa Application', text: 'We can help you understand application steps and organize documents; submit through the official process and follow the authority instructions.', url: `${siteUrl}/student-visa#process` },
  { position: 5, name: 'Pre-Departure Support', text: 'Plan travel and arrival after your permission is granted, following your institution and destination guidance.', url: `${siteUrl}/student-visa#contact-section` },
];

export default function StudentVisaLayout({
  children,
}: {
  children: ReactNode
}) {
  const serviceSchema = buildServiceSchema(coreSeoPages.studentVisa);
  const faqSchema = buildFaqSchema(coreSeoPages.studentVisa.faqs);
  const howToSchema = buildHowToSchema(studentSteps, 'Student Visa');
  const videoSchema = null;
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.studentVisa);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/student-visa`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.studentVisa.breadcrumbs)} />
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
