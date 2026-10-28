import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Saudi Arabia | Navigator Immigration Dubai",
  description: "Students in Saudi Arabia can get help comparing courses and organizing overseas applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Saudi Arabia', 'study visa from Saudi Arabia', 'university applications from Saudi Arabia', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/saudi-arabia`,
  },
  openGraph: {
    title: 'Study Abroad from Saudi Arabia | Navigator Immigration Dubai',
    description: 'Students from Saudi Arabia can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/saudi-arabia`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function SaudiArabiaPage() {
  return (
    <GeoPage
      name="Saudi Arabia"
      region="gcc"
      description="Study abroad planning for students in Saudi Arabia, including help comparing programs and organizing admission and visa documents."
      overview="Start by confirming whether your plan is self-funded, employer-sponsored or supported through a scholarship. Each funding route has different documents and conditions; a scholarship may limit the approved course or institution, while private funding still needs to meet the destination’s rules. Applicants should also verify which mission or application centre serves their citizenship and current residence. Check these details before accepting an offer or paying a deposit."
      benefits={[
        "Confirm scholarship or employer approval for the exact course, institution and study period.",
        "Check whether funding covers tuition only or also living costs, travel and insurance.",
        "Keep sponsor letters, income evidence and payment records consistent with the stated plan.",
        "Verify application-office jurisdiction using your passport and current residence status.",
        "Compare course entry requirements and total cost before committing to an intake.",
      ]}
      scholarships={[
        "Check current scholarship announcements from the relevant authority and confirm nationality and academic eligibility.",
        "Request written confirmation of the approved institution, course, funding amount and renewal conditions.",
        "Plan for any costs the award does not cover, such as housing, travel, insurance or dependants.",
      ]}
      loanInfo="If the plan combines scholarship, family support or a loan, list each source and the amount it will cover. Check when funds are released and whether the destination accepts the supporting documents. Do not rely on a general estimate in place of the official financial checklist for the chosen visa route."
      faqs={[
        { q: "Do Saudi scholarship rules apply to every applicant in the country?", a: "No. Scholarship eligibility depends on the specific scheme and may be limited by citizenship, course, institution or academic record. Check the current official notice and confirm approval before budgeting around an award." },
        { q: "Can a student visa be arranged before university admission?", a: "Most study routes require an offer or other institution-specific confirmation, but the exact sequence varies by destination. Follow the chosen university’s and government authority’s instructions before paying for visa steps." },
        { q: "Can a visa consultant guarantee approval?", a: "No. Only the destination’s immigration authority decides a visa application. A consultant can help organize documents and explain published steps, but should not promise an outcome." },
      ]}
    />
  )
}
