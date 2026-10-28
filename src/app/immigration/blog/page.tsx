import { Metadata } from 'next'
import { getAllBlogPosts, toBlogCardPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import ImmigrationBlogClient from './_components/ImmigrationBlogClient'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Blog | Navigator',
  description: 'Practical immigration, work and study guides for GCC residents exploring Norway, Bulgaria, Germany, Portugal, Canada, the UK and more.',
  keywords: [
    'immigration blog for GCC residents',
    'Norway work permit from GCC',
    'Bulgaria work permit from UAE',
    'Germany work visa from GCC',
    'Portugal D8 visa from UAE',
    'study abroad blog',
    'immigration consultant Dubai',
  ],
  alternates: {
    canonical: `${siteUrl}/immigration/blog`,
  },
  openGraph: {
    title: 'Immigration Blog | Navigator',
    description: 'Expert articles on study visas, immigration pathways, and studying abroad from Canada, UK, Australia, and beyond.',
    url: `${siteUrl}/immigration/blog`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function ImmigrationBlogPage() {
  const posts = toBlogCardPosts(getAllBlogPosts())
  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="All Immigration & Study Abroad Guides"
        description="Browse practical work, study and residence guides for GCC residents exploring Norway, Bulgaria, Germany, Portugal and other destinations."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'Immigration Hub', href: '/immigration' }}
        showScrollIndicator={false}
      />
      <ImmigrationBlogClient posts={posts} />
    </div>
  )
}
