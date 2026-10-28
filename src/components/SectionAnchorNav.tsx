'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionAnchor {
  id: string;
  label: string;
  icon: ReactNode;
}

interface SectionAnchorNavProps {
  anchors: SectionAnchor[];
  navClassName: string;
  activeClassName: string;
  inactiveClassName: string;
  ctaClassName: string;
}

export default function SectionAnchorNav({
  anchors,
  navClassName,
  activeClassName,
  inactiveClassName,
  ctaClassName,
}: SectionAnchorNavProps) {
  const [activeSection, setActiveSection] = useState(anchors[0]?.id ?? '');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={navClassName}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 lg:py-4">
          <div className="flex items-center overflow-x-auto gap-1 pb-2 lg:pb-0 scrollbar-hide">
            {anchors.map((anchor) => (
              <button
                key={anchor.id}
                onClick={() => scrollToSection(anchor.id)}
                className={`flex-shrink-0 flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeSection === anchor.id ? activeClassName : inactiveClassName}`}
              >
                <span className="hidden sm:inline">{anchor.icon}</span>
                <span>{anchor.label}</span>
              </button>
            ))}
          </div>
          <Link href="/contact" className={ctaClassName}>
            Get Started
            <ArrowRight className="ml-1 lg:ml-2 w-3 h-3 lg:w-4 lg:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
