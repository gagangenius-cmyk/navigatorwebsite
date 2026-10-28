import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Oman | Navigator Immigration Dubai",
  description: "Students in Oman can get help comparing programs and organizing admission and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Oman', 'study visa from Oman', 'university applications from Oman', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/oman`,
  },
  openGraph: {
    title: 'Study Abroad from Oman | Navigator Immigration Dubai',
    description: 'Students from Oman can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/oman`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function OmanPage() {
  return (
    <GeoPage
      name="Oman"
      region="gcc"
      description="Study abroad support for students in Oman, from comparing course options to preparing funding and visa documents."
      overview="Before accepting an overseas offer, make sure the course, budget and funding source fit together. If a scholarship, employer or family member is supporting you, confirm the approved institution, covered expenses and any continuing conditions in writing. Self-funded applicants should check how much money must be shown, how it can be documented and whether the rules differ for accompanying family. Use the destination government’s current visa guidance for the final checklist."
      benefits={[
        "Check award or employer approval against the exact university, course and intake.",
        "Budget for tuition, housing, travel, insurance and any costs for accompanying family.",
        "Document who will pay each expense and when funds will be available.",
        "Compare the course requirements with your previous education and career plan.",
        "Verify accepted language tests, application location and visa steps with official sources.",
      ]}
      scholarships={[
        "Review the latest scholarship conditions directly with the sponsoring authority before accepting an offer.",
        "Check university and external awards for eligibility, deadlines and covered expenses.",
        "Confirm whether the award must be renewed and what academic progress it requires.",
      ]}
      loanInfo="If using a loan, compare the approved amount, disbursement dates, fees and repayment conditions. Make sure the paperwork shows the actual funds available for study and meets the destination’s current rules. Keep scholarship, employer and family contributions clearly separated in your budget."
      faqs={[
        { q: "What should Omani students check before relying on a scholarship?", a: "Confirm the current scheme’s eligibility, approved courses and universities, covered costs, payment schedule and renewal or service conditions with the sponsoring authority." },
        { q: "How do I choose between study destinations?", a: "Compare course fit, total cost, language requirements and the destination’s current student-visa and work rules. Choose based on your goals and circumstances rather than a general popularity claim." },
        { q: "Can I use family support as visa funding evidence?", a: "Some routes accept sponsor support, but rules differ. Check the destination’s official checklist for evidence of the relationship, sponsor’s finances and access to funds before applying." },
      ]}
    />
  )
}
