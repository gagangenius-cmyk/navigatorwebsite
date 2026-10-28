import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Canada Study Visa Guide 2026 | Navigator',
  description: 'Canada study permit requirements, current proof of funds, PGWP, costs, and PR pathways for students applying from Dubai and the UAE.',
  keywords: ['Canada study visa', 'Canada study permit', 'Canada SDS ended', 'study in Canada from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/canada-study-visa`,
  },
  openGraph: {
    title: 'Canada Study Visa Guide 2026 | Navigator',
    description: 'Complete Canada study permit guide for 2026. Current regular-stream requirements, proof of funds, PGWP, costs, and PR pathways.',
    url: `${siteUrl}/immigration/canada-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function CanadaStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'Canada Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Canada Study Visa"
        description="A practical guide to Canada's study permit process, financial evidence, study planning, and options some graduates may be eligible to explore."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View Canada Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Permit Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Canada offers programs at universities, colleges, and other designated learning institutions. Compare each program's admission requirements, total cost, location, and career relevance rather than relying on general rankings or averages. Tuition and living costs vary by institution, program, province, and personal circumstances.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Most foreign nationals need a study permit to study in Canada. Applicants generally need a letter of acceptance from a designated learning institution, proof of financial support, and any additional documents listed for their situation. A provincial or territorial attestation letter may also be required, subject to current exemptions. IRCC ended the Student Direct Stream on November 8, 2024; new applications use the regular process. See the current <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html" target="_blank" rel="noreferrer">IRCC study permit document guide</a> and <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html" target="_blank" rel="noreferrer">proof-of-funds rules</a> before applying. Also check IRCC's current <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html" target="_blank" rel="noreferrer">off-campus work rules</a> and <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html" target="_blank" rel="noreferrer">PGWP eligibility</a> before choosing a program.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Tuition', value: 'Set by institution and program' },
                { icon: Clock, label: 'Processing Time', value: 'Check current IRCC estimates' },
                { icon: GraduationCap, label: 'Work During Study', value: 'Up to 24 hours/week off campus when eligible' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Examples of Canadian Institutions</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              These examples illustrate the range of institutions students may compare. Check each school's official course catalogue, designated learning institution status, admission criteria, and current international tuition before applying.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">University</th>
                    <th className="p-3 font-semibold">Location</th>
                    <th className="p-3 font-semibold">Institution Type</th>
                    <th className="p-3 font-semibold">Tuition information</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['University of Toronto', 'Toronto, Ontario', 'University', 'Check current program fees'],
                    ['University of British Columbia', 'Vancouver, BC', 'University', 'Check current program fees'],
                    ['McGill University', 'Montreal, Quebec', 'University', 'Check current program fees'],
                    ['University of Alberta', 'Edmonton, Alberta', 'University', 'Check current program fees'],
                    ['University of Waterloo', 'Waterloo, Ontario', 'University', 'Check current program fees'],
                    ['University of Montreal', 'Montreal, Quebec', 'University', 'Check current program fees'],
                    ['Simon Fraser University', 'Burnaby, BC', 'University', 'Check current program fees'],
                    ['Humber Polytechnic', 'Toronto, Ontario', 'Polytechnic', 'Check current program fees'],
                    ['Seneca Polytechnic', 'Toronto, Ontario', 'Polytechnic', 'Check current program fees'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Building a Canada Study Budget</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Build a personal budget using your institution's fee schedule and current local housing, transport, food, and insurance costs. For immigration purposes, IRCC sets a separate minimum living-expense amount that depends on the application date, province, and family size; it is not a full estimate of every student's actual spending.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Budget item</th>
                    <th className="p-3 font-semibold">What to include</th>
                    <th className="p-3 font-semibold">Where to verify</th>
                    <th className="p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Tuition and mandatory fees', 'Program tuition, deposits, and institution fees', 'Institution fee schedule', 'Amount varies by program and study load'],
                    ['Housing and utilities', 'Residence or rent, utilities, and deposits', 'Institution housing office and local listings', 'Costs vary by city and housing choice'],
                    ['Daily expenses', 'Food, local transport, phone, and personal needs', 'Build a budget for your own circumstances', 'No single estimate fits every student'],
                    ['Health coverage', 'Provincial coverage rules or private insurance', 'Province and institution guidance', 'Coverage and waiting periods differ'],
                    ['Travel and arrival', 'Travel, initial accommodation, and set-up costs', 'Your itinerary and accommodation plan', 'Keep these separate from tuition and living funds'],
                    ['Proof of funds', 'Tuition plus required living funds and travel', 'Current IRCC financial-support page', 'Check the current amount for your family size'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships & Financial Aid for Canada</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Funding may come from the institution, department, research supervisor, or an external organization. Availability, eligibility, award value, and deadlines vary; verify details directly with the provider and do not count on an award until it is confirmed in writing.
            </p>
            <div className="space-y-4">
              {[
                { name: 'University entrance awards', amount: 'Varies by institution and award', eligibility: "Check the school's current eligibility rules, deadline, and application process" },
                { name: 'Faculty and program awards', amount: 'Set by the award provider', eligibility: 'Review the program-specific criteria and whether a separate application is required' },
                { name: 'Graduate research funding', amount: 'Depends on program and funding offer', eligibility: 'Ask the department or supervisor about assistantships, grants, and funding conditions' },
                { name: 'External scholarships', amount: 'Varies by organization', eligibility: 'Check citizenship, residency, field-of-study, and deadline restrictions' },
                { name: 'Provincial and community awards', amount: 'Varies; availability may be restricted', eligibility: 'Confirm that international students are eligible for the specific award' },
                { name: 'Employer or sponsor funding', amount: 'Depends on the agreement', eligibility: 'Check whether funds are available for tuition, living costs, or both' },
              ].map(s => (
                <div key={s.name} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-700"><span className="font-medium">Typical award:</span> {s.amount}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">What to check:</span> {s.eligibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for Canada Study Permit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport (must be valid for entire study period)' },
                { icon: FileText, text: 'Letter of acceptance from a Designated Learning Institution' },
                { icon: FileText, text: 'Proof of financial support (bank statements, loans, scholarships, or GIC where applicable)' },
                { icon: FileText, text: 'Language test evidence if required by the institution, program, or application checklist' },
                { icon: FileText, text: 'A letter of explanation or study plan if requested or relevant to your application' },
                { icon: FileText, text: 'Academic transcripts and certificates' },
                { icon: FileText, text: 'Medical examination report (if applicable)' },
                { icon: FileText, text: 'Police certificate or other admissibility documents if requested' },
                { icon: FileText, text: 'Photograph and biometrics as instructed for your application' },
                { icon: FileText, text: 'Proof of fee payment and biometrics fee, if applicable, at the current listed rate' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common Reasons for Canada Study Permit Refusal</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              A study permit application is assessed on its own facts. Review the decision letter if an application is refused, and use the points below as general checks rather than a ranking of refusal reasons.
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Insufficient Financial Proof', solution: 'Show funds for first-year tuition, living expenses, and transportation. For applications on or after September 1, 2026, IRCC lists CAD $23,448 for one applicant outside Quebec, excluding tuition and transportation. A GIC is one possible proof-of-funds document, not a universal requirement.' },
                { reason: 'Study plan is unclear', solution: 'Explain why the course and institution fit your background and goals, and show that you understand the conditions of temporary status. Officers assess the whole application; no single document guarantees approval.' },
                { reason: 'Incomplete or Inconsistent Documents', solution: 'Double-check all required documents. Ensure name consistency across all documents, translate non-English documents, and provide clear bank transaction histories.' },
                { reason: 'Information does not align', solution: 'Check that the dates, education history, finances, and statements in your application are consistent and supported by the documents requested for your case.' },
                { reason: 'Admissibility or medical requirements', solution: 'Follow any medical, biometrics, or police-document instructions that apply to your circumstances. Check the current IRCC checklist rather than assuming every applicant has the same requirements.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Use these stages as a planning outline for a September intake. Deadlines vary by institution and visa office, so work back from the dates that apply to your course and location.
            </p>
            <div className="space-y-4">
              {[
                { month: 'January-February', tasks: 'Research universities and programs. Begin IELTS/PTE preparation. Contact shortlisted universities for program details.' },
                { month: 'March-April', tasks: 'Take English language tests. Start university applications. Gather academic transcripts and prepare statement of purpose.' },
                { month: 'May-June', tasks: 'Receive acceptance letters. Arrange current financial documents and proof of funds. Apply for the study permit through IRCC using the regular stream.' },
                { month: 'July-August', tasks: 'Respond to any further IRCC instructions. Finalize travel and accommodation only after checking your decision documents, entry requirements, and institution guidance.' },
                { month: 'September', tasks: 'Arrive in Canada according to your permit and institution instructions. Settle your banking and accommodation, then attend orientation.' },
              ].map(item => (
                <div key={item.month} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-28 shrink-0">
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
                { step: '1', title: 'Research and Choose Your Program', body: 'Identify Canadian universities or colleges that offer programs aligned with your academic background and career goals. Consider factors like tuition fees, location, program duration, and post-graduation work eligibility.' },
                { step: '2', title: 'Apply to a Designated Learning Institution', body: 'Submit applications to your chosen DLIs. Once accepted, the institution will issue a letter of acceptance that you need for your study permit application.' },
                { step: '3', title: 'Gather Required Documents', body: 'Prepare your passport, acceptance letter, proof of financial support, academic transcripts, any institution-required language test results, and a statement of purpose. Use the current IRCC financial-capacity table for the application date and family size.' },
                { step: '4', title: 'Submit Study Permit Application', body: 'Apply online through the IRCC website using the regular study permit stream. Check the current IRCC processing-time tool for the application type and location; the former SDS 20-day standard no longer applies.' },
                { step: '5', title: 'Prepare for Departure', body: "Once your permit is approved, arrange accommodation, book flights, purchase health insurance, and plan your arrival. Travel only within the dates and conditions shown in your documents, and check IRCC's current arrival guidance before departure." },
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
                { icon: Clock, title: 'PGWP (Post-Graduation Work Permit)', body: 'Some graduates may qualify for a post-graduation work permit. Eligibility depends on the institution, program, study history, language evidence, and rules in force when applying; the permit length is determined by IRCC. Check the current PGWP eligibility page before choosing a program.' },
                { icon: FileText, title: 'Canadian Experience Class', body: "Canadian work experience may help a graduate qualify for the Canadian Experience Class, but applicants must meet the program's current requirements and compete in Express Entry selection where applicable. Study or work in Canada does not guarantee permanent residence." },
                { icon: BookOpen, title: 'Provincial Nominee Programs', body: 'Provincial nominee programs have different streams, criteria, and intake limits. A provincial nomination is not automatic and does not ensure an invitation unless the applicable program requirements are met.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Visa Guides</h2>
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
                { q: 'What language score do I need for a Canada study permit?', a: 'There is no current SDS language threshold for new applications. Accepted tests and minimum scores depend on the designated learning institution, program, and any current IRCC instructions, so verify the requirements before applying.' },
                { q: 'How much money do I need to show for a Canada study permit?', a: 'You must show enough for tuition, living expenses, and transportation. For applications on or after September 1, 2026, IRCC lists CAD $23,448 for one applicant outside Quebec for living expenses, excluding tuition and transportation; check the current table for family size and province.' },
                { q: 'Can I work while studying in Canada?', a: "Eligible students may work up to 24 hours per week off campus during regular academic sessions and full-time during scheduled breaks if they meet IRCC's conditions. Check the current work rules and your permit conditions before working." },
                { q: 'How long does it take to get Canada PR after studying?', a: 'There is no fixed timeline from graduation to permanent residence. Some graduates may qualify for an economic immigration program after gaining eligible work experience, but they must meet all current criteria and, where applicable, receive an invitation to apply.' },
                { q: 'What happened to the Student Direct Stream (SDS)?', a: 'IRCC ended SDS on November 8, 2024. New study permit applications are processed through the regular stream, and applicants must meet the current study permit, financial-capacity, and institution requirements.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Canada Study Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Dubai team can help you review study plans, organize application information, and understand the published steps for a Canada study permit. Admission and immigration decisions are made by the institution and IRCC. Book a consultation to discuss your circumstances.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
