'use client';

import { useEffect, useRef, useState } from 'react';

type DeferredAutoplayVideoProps = Omit<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  'src' | 'autoPlay' | 'preload'
> & {
  src: string;
  sourceType?: string;
};

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/**
 * Keeps the poster in the exact video slot while deferring the media request
 * until the video is near the viewport and the browser is idle. This avoids
 * competing with HTML, CSS, and the LCP resource during the first paint.
 */
export default function DeferredAutoplayVideo({
  src,
  sourceType = 'video/mp4',
  poster,
  ...videoProps
}: DeferredAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let timeoutId: number | undefined;
    let idleId: number | undefined;
    const typedWindow = window as WindowWithIdleCallback;

    const startLoading = () => {
      setShouldLoad(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);

        if (entry.isIntersecting && !shouldLoad) {
          if (typedWindow.requestIdleCallback) {
            idleId = typedWindow.requestIdleCallback(startLoading, { timeout: 2500 });
          } else {
            timeoutId = window.setTimeout(startLoading, 1500);
          }
        } else if (!entry.isIntersecting) {
          if (idleId !== undefined) typedWindow.cancelIdleCallback?.(idleId);
          if (timeoutId !== undefined) window.clearTimeout(timeoutId);
          idleId = undefined;
          timeoutId = undefined;
        }
      },
      { rootMargin: '300px 0px' },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      if (idleId !== undefined) typedWindow.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    videoRef.current?.load();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => video.play().catch(() => undefined);
    if (!shouldLoad || !isNearViewport) {
      video.pause();
      return;
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      play();
      return;
    }

    video.addEventListener('loadeddata', play, { once: true });
    return () => video.removeEventListener('loadeddata', play);
  }, [isNearViewport, shouldLoad]);

  return (
    <video
      {...videoProps}
      ref={videoRef}
      poster={poster}
      preload={shouldLoad ? 'metadata' : 'none'}
    >
      {shouldLoad ? <source src={src} type={sourceType} /> : null}
      Your browser does not support the video element.
    </video>
  );
}
