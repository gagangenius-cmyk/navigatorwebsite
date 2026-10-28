import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Kuwait | Navigator Immigration Dubai",
  description: "Students in Kuwait can get help comparing programs and preparing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Kuwait', 'study visa from Kuwait', 'university applications from Kuwait', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/kuwait`,
  },
  openGraph: {
    title: 'Study Abroad from Kuwait | Navigator Immigration Dubai',
    description: 'Students from Kuwait can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/kuwait`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function KuwaitPage() {
  return (
    <GeoPage
      name="Kuwait"
      region="gcc"
      description="Students in Kuwait can get help comparing overseas programs, checking funding conditions and preparing university and visa applications."
      overview="If your study plan depends on government, employer or family funding, confirm the terms before choosing a course. Check whether the sponsor approves the institution and subject, how payments are released, and whether there are academic or service conditions. Students who fund the plan themselves should build a budget for the full program and follow the destination’s current financial-evidence rules. Visa-office jurisdiction can depend on citizenship and residence, so verify it directly."
      benefits={[
        "Get written confirmation that a sponsor accepts the chosen university, course and intake.",
        "Compare funding coverage with tuition, living costs, travel, insurance and deposits.",
        "Keep sponsor, bank and university records aligned on the amount and payment schedule.",
        "Check that your academic subjects and grades meet course prerequisites.",
        "Confirm where you must submit biometrics or visa documents for your case.",
      ]}
      scholarships={[
        "Ask the relevant scholarship authority about current approved institutions, fields and applicant eligibility.",
        "Check university awards for international students and whether a separate application is required.",
        "Confirm renewal conditions and whether the scholarship covers living costs as well as tuition.",
      ]}
      loanInfo="For a loan or family-funded application, keep evidence of each source and show when the money can be used. Compare the lender’s release schedule and repayment terms with the university’s payment dates, and verify the destination’s current rules before treating a loan letter as proof of funds."
      faqs={[
        { q: "How can Kuwaiti students confirm scholarship conditions?", a: "Use the current notice from the scholarship authority and confirm approved institutions, eligible subjects, funding coverage and renewal rules. Do not rely on a previous year’s list when planning a new intake." },
        { q: "Can an expatriate living in Kuwait apply for a student visa there?", a: "Possibly, depending on the destination’s consular jurisdiction and your lawful residence status. Check the destination’s official instructions for the office that accepts applications from your circumstances." },
        { q: "What financial documents should I prepare?", a: "Start with the destination’s official checklist. It may ask for evidence of tuition payments, living costs, travel funds and the source of support; the accepted documents and timing vary by country and case." },
      ]}
    />
  )
}
