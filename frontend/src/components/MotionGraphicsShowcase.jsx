import { motion } from 'framer-motion';
import { Sparkles, Video, Palette, Code2 } from 'lucide-react';

export default function MotionGraphicsShowcase() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">

      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/35 via-indigo-500/25 to-orange-500/25 rounded-3xl blur-3xl opacity-80 animate-pulse pointer-events-none" />

      {/* Main Glass Canvas Container */}
      <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/25 via-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl overflow-hidden">

        {/* Top Floating Badge */}
        <div className="bg-[#0f1523] rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden">

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

          {/* Header Card Info */}
          <div className="flex items-center justify-between z-10 relative">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Creativion" className="h-8 w-auto object-contain" />
              <div>
                <h3 className="font-display font-extrabold text-white text-sm tracking-tight">
                  CREATIVION REEL & MOTION LAB
                </h3>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block">
                  SHOWCASE REEL • 4K
                </span>
              </div>
            </div>

            {/* Window control pills */}
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
          </div>

          {/* Centerpiece: HTML5 Video Showcase Container */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/80 to-[#080b11] p-4 border border-white/15 shadow-2xl group">

            {/* Animated Gradient Blob */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-tr from-orange-500/35 to-blue-600/35 rounded-full blur-2xl"
            />

            <div className="relative z-10 space-y-4">

              {/* Media Reel Simulation Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Creativion Brand Reel</h4>
                    <span className="text-[10px] text-slate-400">High-impact motion & video production</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[40, 70, 45, 90, 60, 85, 50, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                      className="w-1 bg-gradient-to-t from-blue-500 to-orange-400 rounded-full h-7"
                    />
                  ))}
                </div>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl group-hover:border-blue-500/60 transition-colors bg-black">
                <video
                  src="/herologovideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Overlays */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-red-600/90 text-white shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>LIVE REEL</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-semibold px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Creativion Motion Assets</span>
                  </span>
                  <span className="text-orange-400 font-bold">100% Custom Work</span>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Animated Graphic Cards Grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card A: Branding */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between text-blue-400">
                <Palette className="w-4 h-4" />
                <span className="text-[10px] font-bold text-orange-400 uppercase">Design System</span>
              </div>
              <h4 className="text-xs font-bold text-white">Brand Visual Identity</h4>
              <p className="text-[10px] text-slate-300">Editorial logo & typography</p>
            </motion.div>

            {/* Card B: Performance Tech */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between text-emerald-400">
                <Code2 className="w-4 h-4" />
                <span className="text-[10px] font-bold text-blue-400 uppercase">React & Tech</span>
              </div>
              <h4 className="text-xs font-bold text-white">Modern Web Engineering</h4>
              <p className="text-[10px] text-slate-300">Ultra-fast web platforms</p>
            </motion.div>

          </div>

          {/* Bottom Floating Stats Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-orange-500/20 border border-white/10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white">Creative & Video Production</span>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300">
              Agency Quality
            </span>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
