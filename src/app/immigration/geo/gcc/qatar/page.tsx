import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Qatar | Navigator Immigration Dubai",
  description: "Students in Qatar can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Qatar', 'study visa from Qatar', 'university applications from Qatar', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/qatar`,
  },
  openGraph: {
    title: 'Study Abroad from Qatar | Navigator Immigration Dubai',
    description: 'Students from Qatar can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/qatar`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function QatarPage() {
  return (
    <GeoPage
      name="Qatar"
      region="gcc"
      description="Guidance for students in Qatar comparing local and overseas study options, university applications and destination visa requirements."
      overview="When comparing an overseas course with a local or branch-campus option, check who awards the degree, where you will study, whether the qualification meets your goal and what the full program costs. If you choose to study abroad, confirm the admission conditions and visa process for the passport you will use. Applicants relying on family or employer support should document the source and availability of funds in the form the destination requires."
      benefits={[
        "Compare the degree-awarding institution, campus location, recognition and course content.",
        "Check admission prerequisites and accepted language tests for each program.",
        "Clarify whether a family member, employer or scholarship sponsor will cover each cost.",
        "Confirm the current visa application process for your citizenship and place of residence.",
        "Budget for tuition, housing, travel, insurance and any required deposits.",
      ]}
      scholarships={[
        "Check whether a scholarship supports study outside Qatar and whether it is limited by citizenship, field or institution.",
        "Ask the university or sponsor for written details on the amount, duration, renewal rules and covered costs.",
        "Keep a plan for expenses not covered by the award, including travel and housing.",
      ]}
      loanInfo="Before relying on a loan or sponsor, confirm how and when the funds will be available and whether the destination accepts the supporting documents. Compare repayment terms and any currency exposure, and keep evidence for each funding source in one organized file."
      faqs={[
        { q: "How should I compare studying abroad with a branch-campus program?", a: "Check the awarding institution, campus, course content, total fees, recognition and any transfer or mobility options directly with the provider. Make sure the route meets your academic and career goal before comparing visa steps." },
        { q: "Can a Qatar resident apply for an overseas student visa from Qatar?", a: "That depends on the destination’s consular rules and your citizenship or lawful residence. Check the destination government’s instructions for the office that accepts applications from your circumstances." },
        { q: "What should I confirm before accepting a scholarship?", a: "Read the current award terms for eligible courses, approved institutions, funding scope, payment timing, renewal conditions and any service or return requirements. Confirm the award in writing and budget for uncovered costs." },
      ]}
    />
  )
}
