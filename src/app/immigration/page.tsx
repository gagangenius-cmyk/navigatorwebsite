import { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Study Abroad & Immigration Hub | Navigator',
  description: 'Study abroad and immigration guides for Canada, the UK, Australia, the USA, and Europe, with practical information for applicants planning from Dubai and beyond.',
  keywords: ['immigration Dubai', 'study abroad Dubai', 'student visa Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration`,
  },
  openGraph: {
    title: 'Study Abroad & Immigration Hub | Navigator',
    description: 'Study abroad and immigration guides for Canada, the UK, Australia, the USA, and Europe, with practical information for applicants planning from Dubai and beyond.',
    url: `${siteUrl}/immigration`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function ImmigrationHub() {
  const posts = getAllBlogPosts()

  const pillars = [
    {
      title: 'Canada Study Visa',
      href: '/immigration/canada-study-visa',
      desc: 'Study permits, PGWP, and Express Entry pathways for international students.',
      count: posts.filter(p => p.category === 'Canada Immigration').length,
    },
    {
      title: 'UK Study Visa',
      href: '/immigration/uk-study-visa',
      desc: 'The Student route, CAS, Graduate route, and conditions that may apply after study.',
      count: posts.filter(p => p.category === 'UK Immigration').length,
    },
    {
      title: 'Australia Study Visa',
      href: '/immigration/australia-study-visa',
      desc: 'Student visa (subclass 500), the Genuine Student requirement, and possible post-study options.',
      count: posts.filter(p => p.category === 'Australia Immigration').length,
    },
    {
      title: 'Study Abroad Consultant',
      href: '/immigration/study-abroad-consultant',
      desc: 'Expert guidance for international students from Dubai and beyond.',
      count: posts.length,
    },
  ]

  const featuredIds = [
    'canada-express-entry-2026-categories-guide',
    'australia-skills-in-demand-482-income-threshold-2026',
    'etias-europe-2026-uae-travelers',
  ]
  const featured = featuredIds
    .map(id => posts.find(post => post.id === id))
    .filter(Boolean) as typeof posts

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Study Abroad & Immigration Guide"
        description="Browse guides to study abroad, student visa requirements, financial planning, and post-study options across selected destinations."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'Browse All Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map(p => (
                <Link key={p.href} href={p.href} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#436175] group-hover:text-blue-600 mb-2">{p.title}</h3>
                  <p className="text-gray-700 mb-4">{p.desc}</p>
                  <span className="text-sm text-[#436175] font-medium">{p.count} guides available →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Featured Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <BlogCardImage slug={p.slug} title={p.title} image={p.image} imageAlt={p.imageAlt} />
                  </div>
                  <div className="p-5">
                    <span className="text-sm font-medium text-[#436175] mb-2 block">{p.category}</span>
                    <h3 className="text-lg font-semibold text-[#436175] group-hover:text-blue-600 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{p.excerpt}</p>
                    <span className="text-sm font-medium text-[#436175]">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-[#436175] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#436175] mb-4">Why Work With Navigator Immigration?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
              {[
                'Guidance on application planning and published requirements',
                'Personalized study abroad roadmap',
                'End-to-end visa application support',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
