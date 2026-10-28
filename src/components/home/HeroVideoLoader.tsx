'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import HeroVideoBackground from './HeroVideoBackground';

type HeroVideoLoaderProps = {
  poster: string;
};

export default function HeroVideoLoader({ poster }: HeroVideoLoaderProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const shouldLoadVideoRef = useRef(false);

  const loadVideo = useCallback(() => {
    if (shouldLoadVideoRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    shouldLoadVideoRef.current = true;
    setShouldLoadVideo(true);
  }, []);

  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = loaderRef.current?.closest('section');
    if (!section) return;

    const handleMouseEnter = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        loadVideo();
      }
    };

    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('touchstart', loadVideo, { passive: true });

    return () => {
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('touchstart', loadVideo);
    };
  }, [loadVideo]);

  return (
    <div
      ref={loaderRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <HeroVideoBackground enabled={shouldLoadVideo} poster={poster} />
    </div>
  );
}
