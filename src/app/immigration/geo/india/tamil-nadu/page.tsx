import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Tamil Nadu | Navigator Immigration Dubai",
  description: "Students from Tamil Nadu can get help comparing technical and other study programs and organizing applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Tamil Nadu', 'study visa from Tamil Nadu', 'university applications from Tamil Nadu', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/tamil-nadu`,
  },
  openGraph: {
    title: 'Study Abroad from Tamil Nadu | Navigator Immigration Dubai',
    description: 'Students from Tamil Nadu can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/tamil-nadu`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function TamilNaduPage() {
  return (
    <GeoPage
      name="Tamil Nadu"
      region="india"
      description="Study abroad guidance for students from Tamil Nadu, including help matching a course to prior study and preparing university and visa applications."
      overview="For engineering, technology and research applicants, compare the new program’s modules with your earlier coursework and experience. Universities may ask for detailed transcripts, prerequisite subjects, portfolios, references or proof of research, depending on the course. Keep the course choice connected to your academic history and plans. Before applying for a visa, check the destination’s official document list and make sure all records use consistent names and dates."
      benefits={[
        "Match advanced courses in engineering or technology to your prior subjects and project work.",
        "Request complete semester-wise transcripts and grading explanations from your institution early.",
        "Check whether the course requires references, a portfolio, research proposal or work experience.",
        "Compare tuition, living costs and internship terms across campuses.",
        "Confirm the required language test and minimum score with each institution.",
      ]}
      scholarships={[
        "Check current state or national scholarship schemes for eligibility, approved courses and application deadlines.",
        "Review university awards for your exact course; merit criteria and funding amounts vary.",
        "Confirm whether any award can be combined with other funding and whether it covers living expenses.",
      ]}
      loanInfo="If you use a loan, request a sanction letter that clearly identifies the student, amount, purpose and release conditions. Compare disbursement dates with the university’s fee schedule, and verify that the visa authority accepts the lender’s documents as proof of available funds."
      faqs={[
        { q: "Will an engineering degree from Tamil Nadu be accepted overseas?", a: "The university assesses your qualification and course prerequisites. Provide full transcripts, grading details and course descriptions if requested, and ask admissions whether a credential assessment is needed." },
        { q: "Do all technology master’s programs require the same subjects?", a: "No. Requirements differ by institution and specialization. Compare prerequisites for each course and explain how your previous study or work prepares you for it." },
        { q: "Are IELTS, PTE and TOEFL interchangeable?", a: "Not automatically. Each university sets the tests and versions it accepts, and a visa route may have its own rules. Check both before booking." },
      ]}
    />
  )
}
