"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black mb-3">
      {/* Video */}
      <video
        ref={videoRef}
        src="/images/about.mp4"
        className="w-full h-full object-contain cursor-pointer"
        playsInline
        onClick={handleToggle}
      />

      {/* Play Button (Only When Paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            onClick={handleToggle}
            className="pointer-events-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-secondary"
          >
            <Play className="text-white w-8 h-8 md:w-10 md:h-10 ml-1" />
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
