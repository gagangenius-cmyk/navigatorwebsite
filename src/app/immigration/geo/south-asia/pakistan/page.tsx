import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Pakistan | Navigator Immigration Dubai",
  description: "Students from Pakistan can get help comparing courses and preparing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Pakistan', 'study visa from Pakistan', 'university applications from Pakistan', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/pakistan`,
  },
  openGraph: {
    title: 'Study Abroad from Pakistan | Navigator Immigration Dubai',
    description: 'Students from Pakistan can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/pakistan`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function PakistanPage() {
  return (
    <GeoPage
      name="Pakistan"
      region="south-asia"
      description="Students from Pakistan can get help comparing overseas programs and preparing admissions, funding and destination-visa documents."
      overview="Choose a program that fits your previous studies and explain the connection clearly in the application. Collect records from the relevant school board or university, check whether the destination requests translations or additional verification, and keep passport details consistent. If your plan includes family funding, a loan or a scholarship, identify the source and timing of each contribution. For immigration steps, use the destination government’s current instructions for your passport and application location."
      benefits={[
        "Check that course prerequisites match your subjects, grades and qualification.",
        "Gather complete academic records and confirm the required format with the university.",
        "Document the source and availability of family, scholarship or loan funds.",
        "Check language-test rules for the specific course and destination visa route.",
        "Confirm application-office jurisdiction and required steps through official sources.",
      ]}
      scholarships={[
        "Check current public scholarship notices, including any HEC programs, for eligible courses, institutions and applicant conditions.",
        "Review university awards for international students and note separate application deadlines.",
        "Confirm the award amount, duration, renewal rules and covered living costs before relying on it.",
      ]}
      loanInfo="Compare any education loan’s approved amount, release schedule, fees, collateral and repayment terms. If family support is also part of the plan, document it as a separate source. Check the destination’s current proof-of-funds guidance to confirm the evidence it accepts."
      faqs={[
        { q: "Can Pakistani students apply for a Canada study permit?", a: "Yes, if they meet IRCC’s current requirements. New applications use Canada’s regular study permit process; the former Student Direct Stream ended on November 8, 2024." },
        { q: "Where can I check whether a scholarship is open?", a: "Use the current notice from the official scholarship sponsor or university. Confirm eligible citizenship, course, institution, deadlines, funding amount and any renewal or service conditions." },
        { q: "What should I check before accepting a university offer?", a: "Verify the institution and course directly, review the full fee schedule and refund terms, and make sure the program fits your academic plan. Then check the destination government’s current student-visa requirements." },
      ]}
    />
  )
}
