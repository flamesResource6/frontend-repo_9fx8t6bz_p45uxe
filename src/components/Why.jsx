import { motion } from 'framer-motion';
import { Shield, Clock, Sun } from 'lucide-react';

export default function Why() {
  const features = [
    { icon: Shield, title: 'Blue light protection', desc: 'Premium lenses reduce digital eye strain so you can focus longer.' },
    { icon: Clock, title: 'Endurance comfort', desc: 'Featherweight frames designed for marathon game nights.' },
    { icon: Sun, title: 'Anti-glare coating', desc: 'Sharper visuals with fewer reflections across screens and LEDs.' },
  ];
  return (
    <section id="why" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center">Why blue light glasses?</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Reduce strain, improve clarity, and keep your vibe. Our frames blend retro aesthetics with modern optics and smooth motion.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
              <f.icon className="w-6 h-6 text-pink-400" />
              <h3 className="mt-3 text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
