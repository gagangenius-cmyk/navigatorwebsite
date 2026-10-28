import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Uttar Pradesh | Navigator Immigration Dubai",
  description: "Students from Uttar Pradesh can get help comparing courses and organizing academic and visa documents. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Uttar Pradesh', 'study visa from Uttar Pradesh', 'university applications from Uttar Pradesh', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/uttar-pradesh`,
  },
  openGraph: {
    title: 'Study Abroad from Uttar Pradesh | Navigator Immigration Dubai',
    description: 'Students from Uttar Pradesh can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/uttar-pradesh`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UttarPradeshPage() {
  return (
    <GeoPage
      name="Uttar Pradesh"
      region="india"
      description="Planning overseas study from Uttar Pradesh? Get help comparing programs and assembling consistent academic, financial and visa documents."
      overview="An application can involve records from several schools, boards, universities and sponsors. Gather complete certificates and marksheets, check that names and dates match your passport, and arrange translations only in the form the institution or destination authority requests. Compare programs using the actual entry criteria and total cost rather than assuming one route suits every city or academic background. Visa requirements are set by the destination government and should be checked for your passport and place of application."
      benefits={[
        "Collect complete academic records and resolve name or date differences before submitting applications.",
        "Ask the university whether it needs grade conversions, subject details or credential evaluation.",
        "Use only language tests and scores accepted for your chosen course and intake.",
        "Document sponsor relationships and the source of funds if another person pays costs.",
        "Check official visa instructions for your current residence and application office.",
      ]}
      scholarships={[
        "Check official scholarship notices for current eligibility, academic conditions and whether overseas study is allowed.",
        "Search university and program awards for international applicants, including separate deadlines and forms.",
        "Do not count an award toward the budget until the institution confirms its value and duration in writing.",
      ]}
      loanInfo="If you need a loan, compare the approved amount and release schedule with tuition deposits and living costs. Keep the loan documents, sponsor records and bank statements organized by source. Check the destination’s official instructions for the exact financial evidence it accepts."
      faqs={[
        { q: "What should I do if my academic records show different name spellings?", a: "Ask the issuing school or university for corrected records or an official explanation, and follow the destination institution’s instructions for supporting documents. Keep your passport and application details consistent." },
        { q: "Are study abroad scholarships available to applicants from Uttar Pradesh?", a: "Some public bodies, institutions and private organizations offer awards, but eligibility and funding change by scheme. Check the current notice for citizenship, course, university and covered costs." },
        { q: "Can an education consultant choose a university for me?", a: "A consultant can help you compare options, but the choice should reflect your academic record, goals and budget. Confirm course details, fees and admission decisions directly with the institution." },
      ]}
    />
  )
}
