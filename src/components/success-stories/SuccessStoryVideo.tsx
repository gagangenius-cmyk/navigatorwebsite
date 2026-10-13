'use client';

import { useEffect, useRef, useState } from 'react';

type SuccessStoryVideoProps = {
  src: string;
  poster?: string;
  title: string;
};

export default function SuccessStoryVideo({ src, poster, title }: SuccessStoryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isTouchViewport, setIsTouchViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
    const updateViewportType = () => setIsTouchViewport(mediaQuery.matches);

    updateViewportType();
    mediaQuery.addEventListener('change', updateViewportType);

    return () => mediaQuery.removeEventListener('change', updateViewportType);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isTouchViewport) return;

    const resetToPoster = () => {
      video.pause();
      video.currentTime = 0;
      video.load();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.play().catch(() => undefined);
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
          resetToPoster();
        }
      },
      { threshold: [0, 0.5, 1] },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      resetToPoster();
    };
  }, [isTouchViewport]);

  const playVideo = () => {
    videoRef.current?.play().catch(() => undefined);
  };

  const resetToPoster = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.load();
  };

  return (
    <video
      ref={videoRef}
      className="success-story-video absolute inset-0 h-full w-full object-contain"
      controls
      muted
      playsInline
      preload="none"
      poster={poster}
      onMouseEnter={isTouchViewport ? undefined : playVideo}
      onMouseLeave={isTouchViewport ? undefined : resetToPoster}
      aria-label={`Client video review: ${title}`}
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video element.
    </video>
  );
}
