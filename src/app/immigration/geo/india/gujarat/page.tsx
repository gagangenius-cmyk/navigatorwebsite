import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Gujarat | Navigator Immigration Dubai",
  description: "Students from Gujarat can get help comparing programs and preparing applications with clear funding records. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Gujarat', 'study visa from Gujarat', 'university applications from Gujarat', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/gujarat`,
  },
  openGraph: {
    title: 'Study Abroad from Gujarat | Navigator Immigration Dubai',
    description: 'Students from Gujarat can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/india/gujarat`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function GujaratPage() {
  return (
    <GeoPage
      name="Gujarat"
      region="india"
      description="Students from Gujarat can get guidance on comparing overseas courses, organizing family or business funding evidence and preparing applications."
      overview="A study plan funded by family savings or a family business needs a clear paper trail. Before applying, decide who will pay each cost and collect records showing the source and availability of that money. Match the course to your education and experience, then compare the full cost and entry requirements across institutions. Do not assume that a loan, scholarship or business account will meet a visa requirement until the destination authority’s current checklist confirms the accepted evidence."
      benefits={[
        "Map each part of the budget to a specific funding source and supporting document.",
        "If a business owner is sponsoring the student, ask what records the destination accepts to show income and access to funds.",
        "Compare business, finance, engineering and technology programs by curriculum and career fit.",
        "Check university award conditions and whether an award covers tuition, living costs or both.",
        "Keep the admission plan and visa evidence consistent with the student’s actual circumstances.",
      ]}
      scholarships={[
        "Check official state or national notices for current eligibility and whether overseas study is covered.",
        "Ask universities about awards for international applicants from India and the documents needed to compete.",
        "Treat a scholarship as confirmed only after receiving a formal award letter with amount, duration and conditions.",
      ]}
      loanInfo="Compare lender terms, collateral, total cost and the timing of each disbursement. If a family business or relative is also contributing, keep that evidence distinct from the loan documents. The final file should show that the required funds are available to the student in the form accepted by the destination authority."
      faqs={[
        { q: "Can a family business sponsor an overseas student?", a: "It may be possible, but accepted sponsor types and evidence depend on the destination. Check the official financial-document rules and be ready to show the sponsor’s relationship, source of funds and ability to provide the stated amount." },
        { q: "How can I compare study abroad costs?", a: "Add tuition, housing, food, travel, insurance and any required deposits for the whole period. Check the institution’s current fee schedule and the destination’s official funds requirement, then account for exchange-rate changes." },
        { q: "Are scholarships available to students from Gujarat?", a: "Options may come from public schemes, universities or private organizations, but eligibility changes by award. Confirm that the current cycle allows overseas study and covers your course before relying on it." },
      ]}
    />
  )
}
