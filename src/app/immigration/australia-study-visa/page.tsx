import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Australia Study Visa Guide 2026 | Navigator',
  description: 'Australia Student Visa 500, Genuine Student, 485 Graduate Visa, costs, and PR pathways for applicants from Dubai.',
  keywords: ['Australia study visa', 'Subclass 500 visa', 'Australia student visa', 'study in Australia from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/australia-study-visa`,
  },
  openGraph: {
    title: 'Australia Study Visa Guide 2026 | Navigator',
    description: 'Complete Australia study visa guide for 2026. Subclass 500 visa, Genuine Student requirement, 485 Graduate Visa, and PR pathways.',
    url: `${siteUrl}/immigration/australia-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function AustraliaStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'Australia Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Australia Study Visa"
        description="A practical guide to Australia's Student visa (subclass 500), study planning, financial evidence, and options some graduates may be eligible to explore."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View Australia Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Student Visa Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Australia offers study options through universities, vocational education providers, and other registered institutions. Compare course content, entry requirements, location, total fees, and student support using information from each provider.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The Student visa (subclass 500) is for eligible students enrolled in a registered course. Applicants need a Confirmation of Enrolment (CoE), must meet the Genuine Student requirement, and generally need adequate health cover and evidence of funds. Other evidence, including English or health information, depends on the applicant and current Department of Home Affairs instructions. From 2 October 2026, most new Student visa applications must be lodged from outside Australia. Check the current <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" target="_blank" rel="noreferrer">subclass 500 requirements</a> before applying. Check Home Affairs' current <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500#About" target="_blank" rel="noreferrer">financial-capacity information</a>, <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500#Work" target="_blank" rel="noreferrer">work conditions</a>, and <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work" target="_blank" rel="noreferrer">subclass 485 eligibility</a> before making plans.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Course fees', value: 'Set by provider and course' },
                { icon: Clock, label: 'Processing', value: 'Check current Home Affairs estimates' },
                { icon: GraduationCap, label: 'Work During Study', value: 'Up to 48 hours/fortnight when eligible' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-5 text-center">
                  <item.icon className="w-8 h-8 text-[#436175] mx-auto mb-3" />
                  <p className="text-xs text-gray-700 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-[#436175]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Examples of Australian Universities</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              These are examples, not a ranking. Compare course content, entry criteria, location, support services, and current international fees on each institution's official website.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">University</th>
                    <th className="p-3 font-semibold">Location</th>
                    <th className="p-3 font-semibold">Institution</th>
                    <th className="p-3 font-semibold">Where to check fees</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['University of Melbourne', 'Melbourne, Victoria', 'University', 'Current course fee page'],
                    ['University of Sydney', 'Sydney, New South Wales', 'University', 'Current course fee page'],
                    ['University of New South Wales', 'Sydney, New South Wales', 'University', 'Current course fee page'],
                    ['Australian National University', 'Canberra, ACT', 'University', 'Current course fee page'],
                    ['Monash University', 'Melbourne, Victoria', 'University', 'Current course fee page'],
                    ['University of Queensland', 'Brisbane, Queensland', 'University', 'Current course fee page'],
                    ['University of Adelaide', 'Adelaide, South Australia', 'University', 'Current course fee page'],
                    ['University of Technology Sydney', 'Sydney, New South Wales', 'University', 'Current course fee page'],
                    ['RMIT University', 'Melbourne, Victoria', 'University', 'Current course fee page'],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-200">
                      {row.map((cell, i) => (
                        <td key={i} className="p-3 text-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Planning an Australia Study Budget</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Costs depend on your course, city, housing, and personal needs. Use the Department's financial-capacity rules for visa evidence and build a separate budget from current provider, housing, and local transport information.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Budget item</th>
                    <th className="p-3 font-semibold">What to include</th>
                    <th className="p-3 font-semibold">Where to check</th>
                    <th className="p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Tuition and provider fees', 'Course tuition, deposits, and mandatory charges', 'Provider fee schedule', 'Varies by course and study load'],
                    ['Housing and utilities', 'Rent or residence, utilities, and deposits', 'Provider accommodation resources and current local listings', 'Costs vary by city and housing choice'],
                    ['Everyday costs', 'Food, local transport, phone, and personal items', 'Build a budget for your own circumstances', 'No single estimate fits every student'],
                    ['Health cover', 'Overseas Student Health Cover for the required period', 'Home Affairs and insurer information', 'Check policy dates and inclusions'],
                    ['Travel and arrival', 'Travel, initial accommodation, and set-up expenses', 'Your itinerary and accommodation plan', 'Keep separate from course and living funds'],
                    ['Visa financial evidence', 'Current living-cost amount plus tuition, travel, and any family costs', 'Home Affairs financial-capacity guidance', 'Check the latest figure and accepted evidence'],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-200">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 text-gray-700 ${i === 0 ? 'font-medium text-[#436175]' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships for Studying in Australia</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Funding availability, value, and criteria vary by provider, course, and application year. Confirm current terms and deadlines directly with the institution or funder, and do not rely on an award until it is confirmed.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Government scholarship schemes', amount: 'Varies by scheme', eligibility: 'Check nationality, country-program, study-level, and application-year rules' },
                { name: 'Institution scholarships', amount: 'Set by the provider', eligibility: 'Check course, academic, nationality, and deadline criteria' },
                { name: 'Faculty or course awards', amount: 'Varies by award', eligibility: 'Ask whether a separate application is needed and what the award covers' },
                { name: 'Research funding', amount: 'Depends on the offer', eligibility: 'Confirm duration, conditions, and whether living costs are included' },
                { name: 'External awards', amount: 'Varies by funder', eligibility: 'Check citizenship, residency, field, and course restrictions' },
              ].map(s => (
                <div key={s.name} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-700"><span className="font-medium">Award value:</span> {s.amount}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">What to verify:</span> {s.eligibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for Australia Student Visa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport' },
                { icon: FileText, text: 'Confirmation of Enrolment (CoE) from CRICOS-registered institution' },
                { icon: FileText, text: 'Evidence of funds for tuition, living costs, travel, and family costs if applicable' },
                { icon: FileText, text: 'English-language evidence if required for your application' },
                { icon: FileText, text: 'Answers and supporting information for the Genuine Student requirement' },
                { icon: FileText, text: 'Academic transcripts and completion certificates' },
                { icon: FileText, text: 'Overseas Student Health Cover (OSHC) policy' },
                { icon: FileText, text: 'Biometrics if requested in your application instructions' },
                { icon: FileText, text: 'Health examination evidence if requested' },
                { icon: FileText, text: 'Current visa application fee payment, as instructed' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <item.icon className="w-5 h-5 text-[#436175] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common Australia Student Visa Refusal Reasons</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              A Student visa application is assessed on its individual circumstances. Use these points as general checks, not a complete list or a guarantee of approval.
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Genuine Student information is unclear', solution: 'Answer the current Genuine Student questions fully and accurately, explaining how the course relates to your background and plans. Include relevant evidence requested for your circumstances.' },
                { reason: 'Financial evidence does not meet the rules', solution: 'Check the current financial-capacity amount and accepted evidence. Include tuition, living costs, travel, and any applicable family costs, and ensure documents clearly show the source and availability of funds.' },
                { reason: 'Course or application evidence is incomplete', solution: "Compare your application against the current Home Affairs checklist and your provider's instructions. English evidence may be required, but accepted tests and scores depend on current rules and your circumstances." },
                { reason: 'Health, character, or other information needs attention', solution: 'Answer all questions accurately and complete any health, character, or biometrics steps requested by Home Affairs. Disclose relevant travel and visa history as instructed.' },
              ].map(item => (
                <div key={item.reason} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-2">{item.reason}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Student Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Use these stages as a planning outline for a February or July intake. Provider deadlines, assessment times, and visa processing vary, so confirm current dates before making travel plans.
            </p>
            <div className="space-y-4">
              {[
                { month: '6-8 months before', tasks: 'Research universities and CRICOS-registered programs. Check Genuine Student requirements. Begin test preparation.' },
                { month: '4-6 months before', tasks: 'Take IELTS/PTE. Apply to shortlisted universities. Prepare academic documents and GS statement.' },
                { month: '2-4 months before', tasks: 'Receive CoE. Arrange OSHC. Prepare financial evidence. Submit visa application via ImmiAccount.' },
                { month: '1-2 months before', tasks: 'Complete biometrics and health examination. Track application status. Arrange accommodation and flights.' },
                { month: 'Arrival', tasks: "Travel within the dates and conditions shown on your visa and CoE. Follow your provider's arrival instructions and keep your health-cover details accessible." },
              ].map(item => (
                <div key={item.month} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-36 shrink-0">
                    <span className="inline-block bg-[#436175]/10 text-[#436175] text-sm font-semibold px-3 py-1 rounded-full">{item.month}</span>
                  </div>
                  <p className="text-sm text-gray-700">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8">Step-by-Step Application Process</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Choose Your Institution and Program', body: 'Select a CRICOS-registered institution and a program that matches your academic background and career goals. Australia offers a wide range of programs from vocational education to doctoral research degrees.' },
                { step: '2', title: 'Receive Your Confirmation of Enrolment', body: 'Once accepted, your institution issues a CoE — a document confirming your enrollment details. You need this CoE to apply for your Subclass 500 visa.' },
                { step: '3', title: 'Meet the Genuine Student Requirement', body: 'The GS requirement assesses your genuine intention to study in Australia based on your academic background, career plans, economic circumstances, and ties to your home country.' },
                { step: '4', title: 'Submit Your Visa Application', body: 'Apply through ImmiAccount and follow the checklist generated for your case. Most applications from 2 October 2026 must be lodged outside Australia. Processing times vary; check Home Affairs guidance and avoid booking travel until your visa is granted.' },
                { step: '5', title: 'Prepare for Your Move', body: "Arrange accommodation (on-campus or private rental), open an Australian bank account, purchase OSHC, and join your institution's orientation program. Travel within the dates permitted by your visa and follow your provider's current arrival guidance." },
              ].map(item => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#436175] text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#436175] mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Post-Study Work & PR Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: 'Subclass 485 Visa', body: 'The Post-Higher Education Work stream of subclass 485 is usually granted for 2 to 3 years, depending on qualification and current rules. Separate eligibility requirements apply, including age and course criteria; check the <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work" target="_blank" rel="noreferrer">official stream guidance</a> before relying on it.' },
                { icon: FileText, title: 'Skilled Migration Options', body: 'Some graduates may later explore skilled migration routes such as subclasses 189, 190, or 491. Each has separate occupation, skills-assessment, points, nomination, and invitation requirements; a graduate visa does not guarantee permanent residence.' },
                { icon: BookOpen, title: 'Skills Assessment & Points Test', body: 'Many skilled routes involve an occupation-specific skills assessment and, for points-tested visas, factors such as age, English, work history, and qualifications. Requirements differ by visa subclass and can change.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-6 text-center">
                  <item.icon className="w-10 h-10 text-[#436175] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Study Visa Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <BlogCardImage slug={p.slug} title={p.title} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#436175] mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{p.excerpt}</p>
                    <span className="text-sm text-[#436175] font-medium">{p.readTime} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#436175] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the Genuine Student requirement for Australia?', a: 'The Genuine Student requirement considers whether study is the primary reason for the visa application. Applicants answer questions about their circumstances, course choice, and expected benefit; follow the current form and evidence instructions.' },
                { q: 'How much money do I need for an Australia student visa?', a: 'The current living-cost figure for a single student is AUD $29,710 for 12 months, in addition to tuition and travel. Additional funds may be required for family members. Check Home Affairs’ current financial-capacity rules and accepted evidence for your application.' },
                { q: 'Can I work while studying in Australia?', a: "Eligible Student visa holders may work up to 48 hours per fortnight while their course is in session; exceptions apply for some research students. Check your visa conditions and current Home Affairs rules before starting work." },
                { q: 'What is the Subclass 485 visa?', a: "The Post-Higher Education Work stream is usually granted for 2 to 3 years, depending on qualification and current rules. Separate eligibility requirements apply, including age and qualification criteria; confirm the relevant stream with Home Affairs." },
                { q: 'Can I apply for PR after studying in Australia?', a: 'Some graduates may later explore skilled migration routes such as subclasses 189, 190, or 491. Each has separate occupation, skills-assessment, points, nomination, and invitation requirements. Study or graduate work does not guarantee permanent residence.' },
              ].map(faq => (
                <details key={faq.q} className="bg-white rounded-xl p-5 group">
                  <summary className="font-semibold text-[#436175] cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#436175]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in Australia?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Dubai team can discuss course planning, CoE-related steps, and how to organize application information. Home Affairs and your education provider remain the authoritative sources for current requirements and decisions. Book a consultation to discuss your circumstances.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
