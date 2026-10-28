import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Kerala | Navigator Immigration Dubai",
  description: "Students from Kerala can get help comparing programs and preparing university and visa applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Kerala', 'study visa from Kerala', 'university applications from Kerala', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/kerala`,
  },
  openGraph: {
    title: 'Study Abroad from Kerala | Navigator Immigration Dubai',
    description: 'Students from Kerala can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/kerala`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function KeralaPage() {
  return (
    <GeoPage
      name="Kerala"
      region="india"
      description="Students from Kerala can get Dubai-based guidance on course selection, university applications and destination-specific visa preparation for overseas study."
      overview="When comparing destinations, begin with the course and what it qualifies you to do. Applicants considering nursing, healthcare, engineering or information technology should check accreditation, clinical or practical components, and any licensing rules separately; similar course names do not always lead to the same professional rights. If family members are funding the plan, show the relationship and how the money will be available. Keep the academic choice, admission file and visa explanation aligned."
      benefits={[
        "Check whether a regulated profession requires separate recognition or registration after study.",
        "Compare course modules and practical placements, not only the program title.",
        "Collect complete school, college or university records before application deadlines.",
        "Show how family support will be available and document its source where required.",
        "Choose an accepted language test and score only after checking each course’s current entry rules.",
      ]}
      scholarships={[
        "Look for current state or national awards that explicitly allow overseas study and match your course and applicant status.",
        "Check university scholarships for the exact campus and program; some awards require a separate application.",
        "List tuition, accommodation, travel and insurance separately so you can see which costs remain unfunded.",
      ]}
      loanInfo="If a loan is part of the plan, compare the amount released for tuition with the timing of deposits and living costs. Ask the lender for a clear sanction and disbursement schedule, then check the destination’s official guidance on whether that evidence meets its financial requirement."
      faqs={[
        { q: "Will a Kerala qualification automatically meet an overseas course requirement?", a: "No. The university decides how previous study, grades and prerequisites match its course. Send complete transcripts and ask the admissions team whether it needs a credential assessment or additional subject evidence." },
        { q: "Which English test should I take?", a: "Check the accepted test versions and minimum scores for each shortlisted course. If a visa route has a separate language rule, confirm that on the destination authority’s official site before booking." },
        { q: "Can a consultant guarantee admission or a student visa?", a: "No. The university decides admission and the immigration authority decides the visa. A consultant can help organize an application and explain published requirements, but cannot promise either outcome." },
      ]}
    />
  )
}
