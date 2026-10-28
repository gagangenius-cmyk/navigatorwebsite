import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: "Study Abroad from Bahrain | Navigator Immigration Dubai",
  description: "Students in Bahrain can get help comparing courses and preparing overseas applications. Navigator Immigration Consultant is based in Dubai.",
  keywords: ['study abroad from Bahrain', 'study visa from Bahrain', 'university applications from Bahrain', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/bahrain`,
  },
  openGraph: {
    title: 'Study Abroad from Bahrain | Navigator Immigration Dubai',
    description: 'Students from Bahrain can get help comparing study options and organizing university and visa applications. Navigator Immigration Consultant is based in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/bahrain`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function BahrainPage() {
  return (
    <GeoPage
      name="Bahrain"
      region="gcc"
      description="Study abroad planning for students in Bahrain, with help comparing courses, funding options and destination-specific visa steps."
      overview="The first question is whether you are applying as a Bahraini citizen or as a resident with another passport. Nationality and lawful residence can affect scholarship eligibility, visa requirements and which mission accepts an application. Once that is clear, compare programs by course fit and total cost, and check what evidence is needed if family or an employer is paying. Use current information from the scholarship sponsor, university and destination government."
      benefits={[
        "Check scholarship eligibility against citizenship, residence, course and institution.",
        "Confirm which visa office accepts your application before booking an appointment.",
        "Document family or employer support and how funds will be available.",
        "Compare courses by prerequisites, full tuition and living costs.",
        "Verify health, language-test and police-certificate requirements only from the official checklist.",
      ]}
      scholarships={[
        "Ask the relevant scholarship authority whether the current award is open to your citizenship and chosen institution.",
        "Check universities for international awards and read the conditions for renewal and academic progress.",
        "Confirm the award’s amount, duration and covered expenses before including it in your study budget.",
      ]}
      loanInfo="If you are using savings, a loan or sponsor support, confirm which documents the destination accepts and when funds need to be available. Keep evidence of the sponsor’s relationship and income where required, and make sure the funding plan covers costs not included in a scholarship."
      faqs={[
        { q: "Do Bahrain residents and citizens have the same scholarship options?", a: "Not necessarily. Each award sets its own citizenship, residence, course and institution rules. Check the current official conditions with the sponsor before relying on funding." },
        { q: "Can I apply for an overseas visa from Bahrain?", a: "The answer depends on your passport, lawful residence and the destination’s consular jurisdiction. Follow the destination government’s instructions for the office that handles your application." },
        { q: "What if my family is paying for my studies?", a: "Check the destination’s current rules for sponsor evidence. You may need to document the relationship, the sponsor’s finances and how the funds will be available; requirements vary by route." },
      ]}
    />
  )
}
