import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Globe, Users, FileText, BookOpen, Award, Star } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Study Abroad Consultant Dubai | Navigator',
  description: 'Study abroad consultants in Dubai for Canada, the UK, Australia, the USA, and Europe. Free planning consultation.',
  keywords: ['study abroad consultant Dubai', 'overseas education consultants Dubai', 'study abroad agency Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/study-abroad-consultant`,
  },
  openGraph: {
    title: 'Study Abroad Consultant Dubai | Navigator',
    description: 'Study abroad guidance from Dubai for Canada, the UK, Australia, the USA, and Europe, with practical planning support.',
    url: `${siteUrl}/immigration/study-abroad-consultant`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function StudyAbroadConsultantPillar() {
  const posts = getAllBlogPosts()

  const countries = [
    { name: 'Canada', flag: '🇨🇦', desc: 'Study permit requirements, current proof-of-funds rules, and program-specific PGWP eligibility.' },
    { name: 'United Kingdom', flag: '🇬🇧', desc: 'Student route requirements and Graduate Route rules that depend on eligibility and application date.' },
    { name: 'Australia', flag: '🇦🇺', desc: 'Subclass 500 requirements, the Genuine Student requirement, and separate eligibility rules for subclass 485.' },
    { name: 'USA', flag: '🇺🇸', desc: 'F-1 student visa requirements and post-completion work options subject to separate eligibility rules.' },
    { name: 'Germany', flag: '🇩🇪', desc: 'Student visa and residence requirements, which vary by course, state, and applicant.' },
    { name: 'Ireland', flag: '🇮🇪', desc: 'Study permission and graduate options for eligible students under current Irish rules.' },
  ]

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Study Abroad Consultant Dubai"
        description="Study abroad planning from Dubai, with support comparing programs, reviewing application steps, and preparing for departure."
        primaryCta={{ label: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Browse All Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Your Study Abroad Journey Starts Here</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Navigator Immigration is a Dubai-based consultancy for people considering study abroad. We help clients compare destinations and programs, understand the application steps, and identify requirements to confirm with universities and government authorities.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              A useful plan starts with your academic background, goals, budget, and preferred timing. We can help you shortlist options and organize next steps, while each institution decides admission and the relevant authority decides the visa application.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Study Planning by Destination</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed text-center">
              Course fees, living costs, and visa conditions vary within each country. Use the points below to compare options, then confirm amounts and eligibility with the institution and official government source for your chosen course and application date:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">Study application</th>
                    <th className="p-3 font-semibold">Budget</th>
                    <th className="p-3 font-semibold">Post-study options</th>
                    <th className="p-3 font-semibold">What to verify</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Canada', 'Study permit; PAL/TAL may be required', 'Fees and living costs vary by program, province, and city', 'PGWP eligibility depends on program and current rules', 'IRCC permit, funds, work, and PGWP rules'],
                    ['United Kingdom', 'Student route and CAS from a licensed sponsor', 'Course fees plus applicable maintenance funds and actual living costs', 'Graduate route duration depends on application date and eligibility', 'GOV.UK course, funds, work, and graduate rules'],
                    ['Australia', 'Subclass 500, CoE, and Genuine Student requirement', 'Provider fees plus current financial-capacity evidence', 'Subclass 485 eligibility and duration depend on stream and qualification', 'Home Affairs visa, funds, work, and graduate rules'],
                    ['USA', 'F-1 route and required school documentation', 'Institution costs, location, insurance, and personal budget', 'OPT or STEM OPT requires separate eligibility and authorization', 'Official school, State Department, and USCIS rules'],
                    ['Germany', 'National student visa or residence requirements as applicable', 'Course fees and living funds vary by institution and location', 'Graduate job-search or work options have separate conditions', 'Official federal and state guidance for your course'],
                    ['Ireland', 'Course/provider and study permission requirements', 'Tuition and living costs vary by course and location', 'Graduate scheme eligibility depends on award and current rules', 'Irish immigration and institution guidance'],
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

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Why Work With Navigator Immigration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Star, title: 'Founded in Dubai', body: 'Navigator Immigration was founded in Dubai in 2015. Our consultations focus on helping students compare study options and understand the steps relevant to their plans.' },
                { icon: Award, title: 'Application Planning', body: 'We help clients organize application information and identify documents to check against current institution and government instructions.' },
                { icon: Globe, title: 'Destination Comparison', body: 'Compare Canada, the UK, Australia, the USA, Germany, and Ireland based on course fit, cost, location, and the rules that apply to your situation.' },
                { icon: Users, title: 'Planning Around Your Goals', body: 'Discuss your academic background, budget, timing, and priorities so you can decide which options to research further.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <item.icon className="w-10 h-10 text-[#436175] mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Questions to Ask When Comparing Study Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Course fit', dest: 'Academic and career goals', text: 'Does the course build on your previous study or experience, and can you explain why you chose it?' },
                { name: 'Total budget', dest: 'Fees and living costs', text: 'Have you checked current tuition, accommodation, travel, insurance, and required visa funds for your own circumstances?' },
                { name: 'Application conditions', dest: 'Institution and visa rules', text: 'What documents, language evidence, deadlines, and financial evidence apply to this course and your nationality?' },
                { name: 'After-study plans', dest: 'Separate eligibility rules', text: 'What post-study options may be available, and what requirements or changes could affect your eligibility later?' },
              ].map(t => (
                <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
                  <div className="border-t border-[#436175]/20 pt-3">
                    <p className="font-semibold text-[#436175] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-700">{t.dest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">English Language Requirements by Country</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Language evidence is set by the institution, course, and sometimes the visa route. Use the table as a reminder of what to verify; do not treat any score as universal. For visa and work rules, confirm details with the current government guidance for your destination.
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">Institution requirement</th>
                    <th className="p-3 font-semibold">Visa route evidence</th>
                    <th className="p-3 font-semibold">Accepted proof</th>
                    <th className="p-3 font-semibold">Where to verify</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Canada', 'Set by institution and program', 'If required by institution or route', 'If accepted for the program', 'Check institution and IRCC rules'],
                    ['United Kingdom', 'Set by course and sponsor', 'Accepted tests vary', 'Accepted tests vary', 'Check Student route and sponsor rules'],
                    ['Australia', 'Set by provider and course', 'Accepted tests vary', 'Accepted tests vary', 'Check current Home Affairs rules'],
                    ['USA', 'Set by school and program', 'Accepted tests vary', 'Accepted tests vary', 'Check school and visa guidance'],
                    ['Germany (English programs)', 'Set by institution and course', 'Accepted tests vary', 'Accepted tests vary', 'Check institution and visa guidance'],
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

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: 'University & Program Selection', body: 'We discuss your academic background, goals, and budget, then help you compare program options and identify admission criteria, funding information, and deadlines to confirm with each institution.' },
                { icon: FileText, title: 'Visa Application Support', body: 'We can help organize documents and review the steps described in the relevant official checklist. Visa forms, interview requirements, and financial evidence differ by destination and applicant; confirm who is responsible for each submission and follow the current authority instructions.' },
                { icon: BookOpen, title: 'Pre-Departure & Post-Arrival', body: 'We can discuss practical pre-departure questions such as accommodation, insurance, and travel planning. Availability and the scope of any support should be confirmed during your consultation.' },
              ].map(s => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <s.icon className="w-10 h-10 text-[#436175] mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Countries We Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {countries.map(c => (
                <div key={c.name} className="bg-white rounded-xl p-5">
                  <p className="text-2xl mb-2">{c.flag}</p>
                  <h3 className="font-semibold text-[#436175] mb-1">{c.name}</h3>
                  <p className="text-sm text-gray-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8">How We Work</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Free Initial Consultation', body: 'We discuss your academic background, career goals, preferred study destinations, and budget. This helps us understand your profile and create a tailored study abroad strategy.' },
                { step: '2', title: 'University Shortlisting & Applications', body: 'Based on your profile, we shortlist suitable universities and programs, help you prepare strong applications, review your statement of purpose, and track deadlines.' },
                { step: '3', title: 'Visa Preparation & Submission', body: 'Our visa team guides you through document collection, financial evidence preparation, and application form filling. We review everything before submission to prepare a clear application.' },
                { step: '4', title: 'Pre-Departure Support', body: 'Once your visa is approved, we help with travel arrangements, accommodation booking, bank account opening, and connect you with student networks in your destination country.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">All Study Abroad Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 12).map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-36 overflow-hidden">
                    <BlogCardImage slug={p.slug} title={p.title} />
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-[#436175]/10 text-[#436175] text-xs font-medium px-2.5 py-1 rounded-full mb-2">{p.category}</span>
                    <h3 className="text-base font-semibold text-[#436175] mb-2 line-clamp-2">{p.title}</h3>
                    <span className="text-sm text-[#436175] font-medium">{p.readTime} →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/immigration/blog" className="inline-flex items-center text-[#436175] font-medium hover:text-blue-600">
                View All Guides <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#436175] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How early should I start planning for study abroad?', a: 'Starting well ahead of your intended intake can leave time to compare courses, meet admission conditions, prepare funding documents, and apply for permission to travel. The right lead time depends on the institution, course, nationality, and visa process; check those deadlines first.' },
                { q: 'What documents do I need for a student visa application?', a: 'The checklist depends on your destination, course, and circumstances. It may include a passport, institution acceptance document, proof of funds, education records, language evidence, and any route-specific documents requested by the authority. Follow the current official checklist rather than treating a general list as complete.' },
                { q: 'Can I work while studying abroad?', a: 'Some destinations allow students to work under specified conditions, but permission, limits, and exceptions vary by country, course, and visa. Check the rules and your visa conditions before working, and plan funds without relying on future employment.' },
                { q: 'How do I choose between study destinations?', a: 'Compare course content, entry criteria, total costs, location, language requirements, support services, and the rules for working during or after study. Treat post-study immigration options as separate routes with their own eligibility criteria.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Study Abroad Journey Today</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in Dubai, anywhere in the UAE, India, or across the Gulf region, our team is ready to help you achieve your international education goals. Book a free consultation to discuss your study abroad plans.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
