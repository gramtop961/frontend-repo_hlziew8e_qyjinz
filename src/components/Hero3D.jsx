import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero3D() {
  const layerRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / innerHeight - 0.5) * 20;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div ref={layerRef} className="max-w-3xl will-change-transform">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <Rocket className="h-4 w-4 text-cyan-300" />
              <span className="text-sm text-cyan-200">Modern • Interactive • 3D</span>
            </div>
            <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Vishwajeet Kumar
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-gray-200">
              I am a software developer crafting scalable backends, fluid apps, and playful 3D web experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => scrollTo('experience')} className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-black transition hover:bg-white">
                View Experience
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('projects')} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-white backdrop-blur transition hover:border-white hover:bg-white/10">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
