import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Punjab | Navigator Immigration Dubai",
  description: "Students from Punjab can get help comparing study destinations and organizing applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Punjab', 'study visa from Punjab', 'university applications from Punjab', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/punjab`,
  },
  openGraph: {
    title: 'Study Abroad from Punjab | Navigator Immigration Dubai',
    description: 'Students from Punjab can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/punjab`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function PunjabPage() {
  return (
    <GeoPage
      name="Punjab"
      region="india"
      description="Planning to study abroad from Punjab? Get help comparing programs, preparing applications and checking the destination’s current visa guidance."
      overview="Family or community connections can help you understand daily life in another country, but they should not be the only reason to choose a campus. Compare the course, location, total cost and support services, then make sure the study plan fits your academic record and goals. For a visa application, explain the genuine purpose of study and document available funds according to the destination’s current rules. Canada’s former Student Direct Stream is closed, so new applications follow the regular study permit process."
      benefits={[
        "Compare campuses on course fit and realistic living costs, not only the size of a local community.",
        "Keep your study plan consistent with earlier education, work experience and future goals.",
        "If relatives or family are sponsoring you, document the relationship and evidence that funds are accessible.",
        "Review post-study options as separate, changeable immigration rules rather than a promised outcome.",
        "Use the current government checklist for your destination and application location.",
      ]}
      scholarships={[
        "Check current government scholarship notices for eligible citizenship, course, institution and any return or service conditions.",
        "Ask universities whether awards are open to applicants from India and whether they apply automatically or need a separate form.",
        "Compare the award period with the full length of study and budget for living expenses it does not cover.",
      ]}
      loanInfo="For an education loan, compare the sanctioned amount, collateral, interest, fees and release schedule before accepting an offer. Make sure the timing matches tuition deposits and the destination’s financial-evidence rules. If family members contribute as well, document those funds separately and explain how they will be available."
      faqs={[
        { q: "Is Canada’s Student Direct Stream still open to students from Punjab?", a: "No. IRCC ended SDS on November 8, 2024. New study permit applications use the regular process, and applicants should follow current IRCC instructions rather than old SDS checklists." },
        { q: "Does having family in Canada improve a study permit application?", a: "Family support may be relevant to funding or accommodation, but it does not replace the study permit requirements. Explain the relationship and show accessible funds; the officer assesses the full application under current rules." },
        { q: "Can study in Canada lead to permanent residence?", a: "A study permit does not guarantee permanent residence. Work and immigration options depend on the course, institution, permit conditions and rules in force later. Check those separately before choosing a program." },
      ]}
    />
  )
}
