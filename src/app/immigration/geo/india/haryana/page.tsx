import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Haryana | Navigator Immigration Dubai",
  description: "Students from Haryana can get help comparing courses and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Haryana', 'study visa from Haryana', 'university applications from Haryana', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/haryana`,
  },
  openGraph: {
    title: 'Study Abroad from Haryana | Navigator Immigration Dubai',
    description: 'Students from Haryana can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/haryana`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function HaryanaPage() {
  return (
    <GeoPage
      name="Haryana"
      region="india"
      description="Study abroad application guidance for students from Haryana, with help comparing courses and preparing documents for each destination."
      overview="Students from Haryana may study in one state and live or work in another, so confirm the visa application office that serves your current residence and passport. Do not choose an appointment location from a generic checklist alone. For admission, collect complete records from the relevant school, board or university and check how each institution evaluates your qualification. Plan from the course start date, leaving time to meet university deadlines and the destination government’s current process."
      benefits={[
        "Check visa-office jurisdiction against your current residence and passport before booking biometrics.",
        "Request transcripts and grading information from the school board or university that issued them.",
        "Compare course entry rules with your subjects, grades and any language-test requirements.",
        "Budget for tuition, living costs, travel, insurance and any required deposits.",
        "Verify post-study and work conditions on the destination government’s current website.",
      ]}
      scholarships={[
        "Review current national or state scholarship notices and confirm that overseas study is permitted by the scheme.",
        "Check university funding for the exact program and intake; application deadlines may come before admission decisions.",
        "Read renewal, grade and service conditions before including a scholarship in your budget.",
      ]}
      loanInfo="When comparing education loans, check the sanctioned amount, release milestones, collateral, interest and repayment terms. If more than one family member is paying, show each contribution clearly. For visa evidence, follow the destination’s current rules on the form and history of funds."
      faqs={[
        { q: "Can I apply for my visa from Gurugram or Delhi?", a: "The responsible office depends on the destination’s consular rules and your citizenship or lawful residence, not simply the nearest city. Check the official instructions for your case before making an appointment." },
        { q: "Do CBSE and state-board records need extra assessment?", a: "That depends on the university and program. Send the complete marksheets and certificates, and ask admissions whether it needs an official grade explanation, credential assessment or subject details." },
        { q: "When should I book an English test?", a: "First confirm which test version the course accepts and the minimum score for your intake. Check how long results remain valid and leave time for a retake if your schedule allows." },
      ]}
    />
  )
}
