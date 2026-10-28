import type { Metadata } from 'next'
import GeoPage from '../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from India | Navigator Immigration Dubai",
  description: "Students from India can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from India', 'study visa from India', 'university applications from India', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india`,
  },
  openGraph: {
    title: 'Study Abroad from India | Navigator Immigration Dubai',
    description: 'Students from India can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function IndiaPage() {
  return (
    <GeoPage
      name="India"
      region="india"
      description="Study abroad planning for students from India, with help comparing courses and preparing university and visa documents. Navigator Immigration Consultant is based in Dubai."
      overview="Start with the course and institution, then check how your existing qualification, grades and prerequisites fit. An application from India may bring together records from a school or university, a bank or a sponsor, so keep names, dates and funding amounts consistent. Compare tuition, living costs, travel, insurance and course requirements before choosing a destination. Visa steps depend on the destination and can also vary by passport and place of application; check the relevant authority’s current instructions before paying fees or booking travel."
      benefits={[
        "Compare course content and entry prerequisites with your previous study and career plans.",
        "Build a full budget that includes tuition, living costs, travel, insurance and currency changes.",
        "Document where study funds come from and when they will be available.",
        "Check whether academic records need certified translations, attestations or credential assessment.",
        "Confirm which visa office serves your current residence and passport before you plan an appointment.",
      ]}
      scholarships={[
        "Check current central or state scholarship notices for rules on citizenship, course, institution, grades and any service obligations.",
        "Review each university’s awards for international students; eligibility and deadlines differ by program.",
        "Confirm what an award actually covers. Tuition support may not include housing, travel, insurance or day-to-day costs.",
      ]}
      loanInfo="Compare an education loan’s approved amount and disbursement dates along with its interest, fees, collateral and repayment terms. Before relying on it for a visa application, check the destination’s current rules for loan letters, account history and sponsor funds. Keep the sanction letter, tuition receipts and bank evidence consistent."
      faqs={[
        { q: "Which country should students from India choose for study?", a: "There is no single best destination for every student. Compare the course and institution, total cost, admission requirements and the destination’s current student-visa and post-study rules against your own plans." },
        { q: "What documents are usually needed for a student visa?", a: "Use the destination government’s checklist for your application location and circumstances. A starting file may include a passport, admission confirmation, academic records and evidence of available funds. Tests, personal statements, medical checks and police certificates are required only where the institution or authority asks for them." },
        { q: "Can Indian students still apply through Canada’s Student Direct Stream?", a: "No. IRCC ended the Student Direct Stream on November 8, 2024. Applications submitted on or after that date use the regular study permit process; check IRCC’s current requirements and proof-of-funds guidance." },
        { q: "How should I compare education loans?", a: "Compare the approved amount, release schedule, interest, fees, collateral and repayment conditions. Also check that the destination authority accepts the lender’s documents as evidence of funds; a loan offer alone may not show that money is available." },
      ]}
    />
  )
}
