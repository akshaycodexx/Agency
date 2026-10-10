import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function CinematicHeroVisual() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 sm:my-12">
      
      {/* Ambient Outer Radial Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-orange-500/25 rounded-[2.5rem] blur-3xl opacity-80 animate-pulse pointer-events-none" />

      {/* Main Widescreen Video Cinema Container */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 bg-gradient-to-b from-white/25 via-white/10 to-white/5 border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden group">
        
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl">
          
          {/* HTML5 Video Player */}
          <video
            ref={videoRef}
            src="/herologovideo.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Mute Control Button Overlay */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/60 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white transition-all shadow-lg cursor-pointer"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
