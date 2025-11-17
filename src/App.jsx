import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Why from './components/Why';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (p) => setCart((c) => [...c, p]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar cartCount={cart.length} />
      <Hero />
      <main className="relative">
        <Products onAdd={addToCart} />
        <Why />
        <footer id="faq" className="border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center text-white/70">
            <p>© {new Date().getFullYear()} CRT Glass — retro gaming blue light eyewear</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App
