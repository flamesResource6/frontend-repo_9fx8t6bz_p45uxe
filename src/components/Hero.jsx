import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-xs font-medium ring-1 ring-pink-400/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            New: Retro gamer blue light filters
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Play longer. See clearer.
          </h1>
          <p className="mt-4 text-lg text-pink-100/90">
            Gaming-grade blue light glasses with retro vibes and modern optics. 
            Smooth animations. Cozy, neon aesthetic. Built for marathon sessions.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <a href="#products" className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 text-slate-900 font-semibold shadow-lg shadow-pink-500/30 transition">Shop glasses</a>
            <a href="#why" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md ring-1 ring-white/20 transition">Why blue light?</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
