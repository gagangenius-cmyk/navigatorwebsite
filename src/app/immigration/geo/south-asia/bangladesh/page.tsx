import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Bangladesh | Navigator Immigration Dubai",
  description: "Students from Bangladesh can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Bangladesh', 'study visa from Bangladesh', 'university applications from Bangladesh', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/bangladesh`,
  },
  openGraph: {
    title: 'Study Abroad from Bangladesh | Navigator Immigration Dubai',
    description: 'Students from Bangladesh can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/bangladesh`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function BangladeshPage() {
  return (
    <GeoPage
      name="Bangladesh"
      region="south-asia"
      description="Students from Bangladesh can get help comparing study options and organizing university and destination-visa documents."
      overview="Build the application around a course that matches your education and intended career. Gather complete academic records and make sure the funding file explains who is paying, where the money comes from and how it will be available. Requirements for language tests, translations, medical checks and police certificates depend on the institution and destination, so do not rely on a generic list. Check the current government guidance for your passport and application location."
      benefits={[
        "Compare course prerequisites with your previous subjects, grades and qualifications.",
        "Keep academic documents and passport details consistent across forms and certificates.",
        "Show a clear funding trail for savings, loans or family sponsorship.",
        "Check whether translations or authentication are requested by the university or authority.",
        "Confirm application-office jurisdiction and current processing guidance before planning travel.",
      ]}
      scholarships={[
        "Check current public scholarship notices for eligibility, course level, destination and any return conditions.",
        "Ask universities about awards for international applicants and the documents needed to apply.",
        "Confirm the award’s payment timing and whether it covers living costs, insurance and travel.",
      ]}
      loanInfo="If you are combining a loan with family support, show each source separately and confirm when the funds can be accessed. Compare loan terms and disbursement timing with tuition deadlines. The destination government’s current checklist determines which documents are acceptable as proof of funds."
      faqs={[
        { q: "Can Bangladeshi students apply for a Canada study permit?", a: "Yes, applicants can use Canada’s regular study permit process if they meet current IRCC requirements. The former Student Direct Stream ended on November 8, 2024; check IRCC’s current rules and document list." },
        { q: "Which English test should I take for overseas study?", a: "Check the accepted tests and required scores with each institution and course. If the destination’s visa route has separate language rules, confirm those with the government authority as well." },
        { q: "Can a scholarship cover all study costs?", a: "Some awards cover only part of the cost. Read the current terms for tuition, living expenses, travel, insurance and renewal conditions, and plan separately for any funding gap." },
      ]}
    />
  )
}
