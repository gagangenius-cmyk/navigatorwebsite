import Link from 'next/link'

interface HeroCTA {
  label: string
  href: string
}

interface ImmigrationHeroProps {
  heading: string
  description: string
  primaryCta?: HeroCTA
  secondaryCta?: HeroCTA
  showScrollIndicator?: boolean
}

export default function ImmigrationHero({
  heading,
  description,
  primaryCta = { label: 'Free Eligibility Check', href: '/contact' },
  secondaryCta = { label: 'Browse All Guides', href: '/immigration/blog' },
  showScrollIndicator = true,
}: ImmigrationHeroProps) {
  return (
    <section
      className="immigration-hero-section relative bg-gradient-to-br from-accent-orange-red/85 via-[#436175]/75 to-[#585a5e]/85 pt-48 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <div className="immigration-hero-orb-one absolute top-20 left-10 w-72 h-72 bg-[#436175]/20 rounded-full blur-3xl" />
        <div className="immigration-hero-orb-two absolute bottom-20 right-10 w-96 h-96 bg-[#436175]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="immigration-hero-content relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="immigration-hero-title text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {heading}
          </h1>

          <p className="immigration-hero-description text-xl lg:text-2xl mb-8 text-white/80 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="immigration-hero-actions flex flex-col sm:flex-row gap-4 justify-center">
            <div className="immigration-hero-cta">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                {primaryCta.label}
              </Link>
            </div>
            <div className="immigration-hero-cta">
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        {showScrollIndicator && (
          <div className="immigration-hero-scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
              <div className="immigration-hero-scroll-dot w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
