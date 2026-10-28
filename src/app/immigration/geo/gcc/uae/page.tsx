import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from UAE | Navigator Immigration Dubai",
  description: "Students living in the UAE can get help comparing courses and preparing overseas applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from UAE', 'study visa from UAE', 'university applications from UAE', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/uae`,
  },
  openGraph: {
    title: 'Study Abroad from UAE | Navigator Immigration Dubai',
    description: 'Students from UAE can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/uae`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UAEPage() {
  return (
    <GeoPage
      name="UAE"
      region="gcc"
      description="Students living in the UAE can get Dubai-based help comparing overseas courses and preparing university and visa applications."
      overview="The UAE is home to students with many different passports and residence statuses. Before planning an overseas application, identify which passport you will use, whether you need to show lawful UAE residence, and which visa office handles applications from your current location. For funding, make sure statements, sponsor letters and income records show how the required money will be available. Course and visa rules are set by each institution and destination government."
      benefits={[
        "Check requirements against your citizenship and the passport used for travel, not UAE residence alone.",
        "Confirm whether the destination accepts applications from UAE residents at the local post or visa centre.",
        "Keep UAE residence evidence current if it is relevant to jurisdiction or your application.",
        "Document salary, savings, business income or family sponsorship in the form requested by the destination.",
        "Compare course entry criteria and total costs across study destinations.",
      ]}
      scholarships={[
        "Check whether a scholarship is open to UAE nationals, expatriate residents or both; eligibility may differ.",
        "Ask the university or sponsoring organization to confirm approved courses, funding scope and renewal conditions.",
        "Budget separately for expenses not covered by the award, including housing, insurance and travel.",
      ]}
      loanInfo="If you plan to use savings, a bank loan or employer support, check the destination’s current rules for acceptable proof and access to funds. Keep the sponsor’s relationship, income evidence, account records and transfer timing clear. A local bank product is not automatically accepted as sufficient evidence by every country."
      faqs={[
        { q: "Can UAE residents apply for a Canada study permit?", a: "Yes, if they meet IRCC’s current requirements. The application is assessed under the regular study permit process; check the official instructions for proof of funds and the visa office serving your place of residence." },
        { q: "Do UAE residents all need the same student-visa documents?", a: "No. Requirements depend on the destination, passport, residence status, course and personal circumstances. Start with the destination authority’s checklist and confirm whether UAE residence evidence or local application instructions apply to you." },
        { q: "Which study destination is best for a UAE resident?", a: "It depends on the course, budget, admission profile and future plans. Compare each destination’s current entry, work and visa rules for the passport you will use; UAE residence does not determine every requirement." },
      ]}
    />
  )
}
