import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'UK Study Visa Guide 2026 | Navigator',
  description: 'UK Student Visa requirements, CAS, Graduate Route, costs, and application guidance for students applying from Dubai.',
  keywords: ['UK study visa', 'UK student visa', 'UK Student route', 'study in UK from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/uk-study-visa`,
  },
  openGraph: {
    title: 'UK Study Visa Guide 2026 | Navigator',
    description: 'UK Student visa guidance on CAS, financial evidence, study conditions, and post-study options, with links to current GOV.UK requirements.',
    url: `${siteUrl}/immigration/uk-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UkStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'UK Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="UK Study Visa"
        description="A practical guide to the UK Student route, course sponsorship, financial evidence, and post-study options that may be available to eligible graduates."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View UK Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Student Visa Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The UK has a wide range of universities and other licensed student sponsors. Compare course content, entry requirements, location, tuition, and support services using each institution's current information.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The Student route is for eligible applicants taking an approved course with a licensed sponsor. Applicants normally need a Confirmation of Acceptance for Studies (CAS), must meet the applicable English-language requirement, and may need to show maintenance funds. Some applicants also need an ATAS certificate or tuberculosis test. The evidence and conditions depend on the course and personal circumstances; check the current <a href="https://www.gov.uk/student-visa" target="_blank" rel="noreferrer">GOV.UK Student visa guidance</a> before applying, including the current <a href="https://www.gov.uk/student-visa/money" target="_blank" rel="noreferrer">financial requirement</a> and the <a href="https://www.gov.uk/graduate-visa" target="_blank" rel="noreferrer">Graduate route rules</a>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Course fees', value: 'Set by the institution and course' },
                { icon: Clock, label: 'Processing', value: 'Check current GOV.UK guidance' },
                { icon: GraduationCap, label: 'Work During Study', value: 'Depends on course and visa conditions' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Examples of UK Universities</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              These are examples of UK universities, not a ranking. Compare course structure, entry criteria, location, student support, and current international fees on each university's official site.
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
                    ['University of Oxford', 'Oxford, England', 'University', 'Current course fee page'],
                    ['University of Cambridge', 'Cambridge, England', 'University', 'Current course fee page'],
                    ['Imperial College London', 'London, England', 'University', 'Current course fee page'],
                    ['University College London', 'London, England', 'University', 'Current course fee page'],
                    ['University of Edinburgh', 'Edinburgh, Scotland', 'University', 'Current course fee page'],
                    ['University of Manchester', 'Manchester, England', 'University', 'Current course fee page'],
                    ['King\'s College London', 'London, England', 'University', 'Current course fee page'],
                    ['University of Glasgow', 'Glasgow, Scotland', 'University', 'Current course fee page'],
                    ['University of Birmingham', 'Birmingham, England', 'University', 'Current course fee page'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Student Visa Financial Requirement</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Visa maintenance requirements differ for study in London and outside London. The amounts below are the current GOV.UK maintenance figures, not a prediction of actual spending. Confirm the applicable amount, course fees, family costs, evidence timing, and exemptions on the <a href="https://www.gov.uk/student-visa/money" target="_blank" rel="noreferrer">official financial guidance</a> before applying.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Budget item</th>
                    <th className="p-3 font-semibold">London</th>
                    <th className="p-3 font-semibold">Outside London</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Visa maintenance amount', '£1,529 per month, up to 9 months', '£1,171 per month, up to 9 months'],
                    ['Tuition funds', 'Any unpaid course fees for the relevant period', 'Any unpaid course fees for the relevant period'],
                    ['Housing, travel, and set-up', 'Budget using your location and plans', 'Budget using your location and plans'],
                    ['Immigration Health Surcharge', 'Check the current GOV.UK amount for your application', 'Check the current GOV.UK amount for your application'],
                    ['Course and living costs', 'Check your university and local cost information', 'Check your university and local cost information'],
                    ['Evidence timing', 'Funds normally held for 28 consecutive days', 'Funds normally held for 28 consecutive days'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships for UK Study</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Scholarship availability depends on nationality, course, level, institution, and application year. Check the funding provider's current terms and deadline; an award should only be included in a visa budget once it is confirmed.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Government-funded awards', amount: 'Varies by scheme', eligibility: 'Check eligible nationalities, study level, application dates, and coverage' },
                { name: 'University scholarships', amount: 'Set by the institution', eligibility: 'Check course, nationality, academic, and deadline requirements' },
                { name: 'Faculty and course awards', amount: 'Varies by award', eligibility: 'Ask the university whether a separate application is needed' },
                { name: 'Research or postgraduate funding', amount: 'Depends on the offer', eligibility: 'Confirm funding length, conditions, and whether it covers living costs' },
                { name: 'External awards', amount: 'Varies by provider', eligibility: 'Confirm nationality, residency, and course restrictions with the funder' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for UK Student Visa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport with at least one blank page' },
                { icon: FileText, text: 'CAS (Confirmation of Acceptance for Studies) from licensed sponsor' },
                { icon: FileText, text: 'Financial evidence if required, meeting the current amount, timing, and format rules' },
                { icon: FileText, text: 'English-language evidence that meets the route and course requirements' },
                { icon: FileText, text: 'Academic qualifications and transcripts' },
                { icon: FileText, text: 'ATAS certificate (if required for your course)' },
                { icon: FileText, text: 'Tuberculosis test results (if from a listed country)' },
                { icon: FileText, text: 'Parental consent (if under 18)' },
                { icon: FileText, text: 'Current visa application fee payment, as instructed' },
                { icon: FileText, text: 'Immigration Health Surcharge payment if applicable, at the current rate' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common UK Student Visa Refusal Reasons</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              No checklist can guarantee approval. Before applying, review the CAS, financial evidence, English-language evidence, and any additional requirements that apply to your case.
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Insufficient Financial Evidence', solution: 'Where the 28-day evidence rule applies, show that the required funds were held for the full period and submit an accepted form of evidence. Check current GOV.UK rules for exemptions and any additional evidence needed for parent-held funds.' },
                { reason: 'CAS Issues', solution: 'Confirm your CAS number is correct and all course details match your actual offer. CAS can only be used for one application — do not apply with outdated CAS information.' },
                { reason: 'Credibility Interview Concerns', solution: 'Be prepared to explain your choice of university, course relevance to your career, and genuine student intent. Review your application before the interview.' },
                { reason: 'Incorrect English Language Evidence', solution: "Check how your course and nationality meet the Student route's English-language rules. In some cases, the institution assesses English; other applicants may need an approved test or other evidence." },
                { reason: 'Missing or Incorrect Documents', solution: 'Use the online document checklist and have a registered immigration advisor review your application before submission.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Student Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Use these stages as a planning outline for a September intake. Course and application deadlines differ, so confirm dates with the institution and GOV.UK.
            </p>
            <div className="space-y-4">
              {[
                { month: 'January-February', tasks: 'Research universities and courses. Check UKVI SELT requirements. Begin IELTS/PTE preparation.' },
                { month: 'March-April', tasks: 'Take English language tests (IELTS for UKVI). Submit UCAS or direct university applications. Prepare personal statement.' },
                { month: 'May-June', tasks: 'Receive CAS from chosen university. Arrange financial documents with 28-day holding period. Apply for ATAS if required.' },
                { month: 'July-August', tasks: 'Submit visa application online. Pay IHS surcharge. Book UKVCAS appointment for biometrics. Prepare for credibility interview.' },
                { month: 'September', tasks: "Travel within the dates permitted by your visa, follow your university's arrival instructions, and check how to access your eVisa and UKVI account." },
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
                { step: '1', title: 'Choose Your Course and University', body: 'Research UK universities and programs that match your academic profile and career aspirations. Compare course content, entry requirements, fees, location, and the support services that matter to you.' },
                { step: '2', title: 'Receive Your CAS Letter', body: 'Once accepted, your university issues a Confirmation of Acceptance for Studies — a unique reference number you need for your visa application. Apply no earlier than 6 months before your course start date.' },
                { step: '3', title: 'Prepare Financial Evidence', body: "Show funds for course fees plus £1,529 per month for study in London or £1,171 outside London, for up to 9 months. Funds normally need to be held for 28 consecutive days, and the period must end within 31 days of application. Check current GOV.UK rules, accepted evidence, and exemptions before applying." },
                { step: '4', title: 'Submit Your Visa Application', body: 'Apply through GOV.UK, pay the fees shown for your application, and complete the identity and biometrics steps in your instructions. Check the current application fee and Immigration Health Surcharge before submitting.' },
                { step: '5', title: 'Plan Your Arrival', body: "If your course and visa permit early travel, plan arrival within the dates shown in your decision. Confirm your accommodation and the current entry guidance before travelling." },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Post-Study Work & Settlement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: 'Graduate Route Visa', body: "Eligible graduates may apply to the Graduate route from inside the UK. It does not require employer sponsorship, but applicants must meet the route's requirements and apply in time. For applications made from 1 January 2027, the route is 18 months for most graduates; doctoral graduates can apply for 3 years. Check current GOV.UK rules." },
                { icon: FileText, title: 'Skilled Worker Visa', body: "A graduate may be able to switch to a Skilled Worker visa if they meet the route's requirements and have an eligible sponsored job. Settlement rules and qualifying residence periods can change; check current GOV.UK guidance." },
                { icon: BookOpen, title: 'Settlement & Citizenship', body: 'Settlement and citizenship have separate eligibility, residence, and other requirements. Review the current rules for the route you hold rather than assuming study or graduate permission leads to settlement.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Study Visa Guides</h2>
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
                { q: 'What is a CAS letter and how do I get one?', a: 'Confirmation of Acceptance for Studies is a unique reference number issued by your UK university after you accept their offer. It confirms your sponsorship for a Student Visa and includes course details, duration, and fees.' },
                { q: 'How much bank balance do I need for a UK student visa?', a: 'You need tuition fees plus living costs: £1,529/month for London or £1,171/month outside London for up to 9 months under the current GOV.UK guidance. Funds normally must be held for 28 consecutive days, with the 28-day period ending within 31 days of the application date. Check current rules and any exemptions.' },
                { q: 'Can I work in the UK while studying?', a: 'Some Student visa holders may work during term and vacations, but hours and permitted work depend on the course, sponsor, and visa conditions. Check the conditions printed on your permission and the current GOV.UK guidance.' },
                { q: 'What is the UK Graduate Route?', a: 'Eligible graduates can apply without employer sponsorship. The duration depends on when the application is made: most applications made by 31 December 2026 receive 2 years, while most applications from 1 January 2027 receive 18 months; doctoral graduates can apply for 3 years. Check current GOV.UK guidance.' },
                { q: 'Can I switch from Student Visa to a work visa easily?', a: 'You may be able to apply to switch from inside the UK if you meet the Skilled Worker route requirements, including sponsorship and job criteria. Permission, settlement, and citizenship are separate decisions with additional requirements; check the current rules before making plans.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in the UK?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Dubai-based team can discuss course planning, CAS-related steps, and how to organize application information. GOV.UK and your licensed sponsor remain the authoritative sources for current requirements and application decisions. Book a consultation to discuss your circumstances.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
