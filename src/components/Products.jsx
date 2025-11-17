import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const API = import.meta.env.VITE_BACKEND_URL || '';

export default function Products({ onAdd }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        await fetch(`${API}/seed`, { method: 'POST' });
      } catch {}
      try {
        const res = await fetch(`${API}/products`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(236,72,153,0.15),transparent),radial-gradient(600px_200px_at_80%_20%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Featured glasses</h2>
            <p className="text-white/70 mt-2">Retro frames. Modern optics. Built for boss fights and late-night raids.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-pink-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">Smooth animations on hover</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {loading && (
              <div className="col-span-full text-center text-white/70">Loading products...</div>
            )}
            {!loading && items.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-pink-300 font-bold">${p.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-1 text-white/70 text-sm line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/60">Tint: {p.tint || 'clear'}</span>
                    <motion.button whileTap={{ scale: 0.96 }} onClick={() => onAdd(p)} className="px-4 py-2 rounded-xl bg-pink-500 text-slate-900 font-semibold shadow shadow-pink-500/30">Add to cart</motion.button>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-pink-500/10 to-transparent" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
