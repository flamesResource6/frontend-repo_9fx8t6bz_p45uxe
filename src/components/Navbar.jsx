import { ShoppingCart, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <a href="#" className="inline-flex items-center gap-2 text-white">
            <Gamepad2 className="w-6 h-6 text-pink-400" />
            <span className="font-bold tracking-tight">CRT Glass</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#why" className="hover:text-white transition">Why Us</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <motion.button whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2 rounded-xl bg-pink-500 text-slate-900 font-semibold px-4 py-2 shadow shadow-pink-500/30">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:block">Cart</span>
            <span className="ml-1 inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-slate-900 text-pink-300 ring-1 ring-pink-300/40">{cartCount}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
