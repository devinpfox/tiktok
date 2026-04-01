"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, user will need to tap
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/JAKE-RYAN.mp4"
        poster="/lead-in-image.png"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="h-screen w-screen object-contain"
      />
    </div>
  );
}
