import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Nepal | Navigator Immigration Dubai",
  description: "Students from Nepal can get help comparing courses and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Nepal', 'study visa from Nepal', 'university applications from Nepal', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/nepal`,
  },
  openGraph: {
    title: 'Study Abroad from Nepal | Navigator Immigration Dubai',
    description: 'Students from Nepal can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/nepal`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function NepalPage() {
  return (
    <GeoPage
      name="Nepal"
      region="south-asia"
      description="Study abroad guidance for students from Nepal, with help comparing courses and preparing academic, funding and visa documents."
      overview="Start by checking how your previous qualification is assessed by each institution. A university may ask for full transcripts, grading details, English-language results or a credential assessment, and the requirements can differ by course. Plan the funding evidence at the same time: identify the sponsor, source and timing of each contribution. For immigration steps, follow the destination authority’s current checklist for your passport and place of application."
      benefits={[
        "Ask admissions how your school or university qualification meets the chosen course prerequisites.",
        "Collect full transcripts and grading information before application deadlines.",
        "Confirm the accepted language test and score for each program.",
        "Document loans, savings and family support according to the destination’s current rules.",
        "Check official visa-office instructions before arranging an appointment or travel.",
      ]}
      scholarships={[
        "Review current public scholarship announcements and confirm citizenship, course and institution eligibility.",
        "Check university awards and external programs directly with their official sponsors.",
        "Compare the award duration and payment schedule with the full cost of study.",
      ]}
      loanInfo="When comparing education loans, check the approved amount, release schedule, fees, collateral and repayment conditions. Keep the loan and sponsor records clear, and verify with the destination government what evidence it accepts for the required funds."
      faqs={[
        { q: "What academic records should Nepali students prepare?", a: "Start with complete certificates and transcripts from the issuing schools or institutions. Ask the university whether it needs grading explanations, translations or a credential assessment for your course." },
        { q: "Are Canada’s old SDS requirements still used?", a: "No. IRCC ended SDS on November 8, 2024. New study permit applications use the regular stream and must meet current IRCC requirements." },
        { q: "How can I compare student-loan options?", a: "Compare the amount released, interest, fees, collateral, timing and repayment schedule. Then check whether the destination accepts the lender’s documents as evidence of funds." },
      ]}
    />
  )
}
