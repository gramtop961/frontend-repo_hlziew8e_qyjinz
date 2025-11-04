import Hero3D from './components/Hero3D.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import SkillsAndContact from './components/SkillsAndContact.jsx';
import { Rocket } from 'lucide-react';

function Nav() {
  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-black/50 px-5 py-3 text-white backdrop-blur">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold">Vishwajeet Kumar</span>
          </div>
          <nav className="hidden gap-6 sm:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-200 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-gray-400">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Vishwajeet Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Nav />
      <main>
        <Hero3D />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsAndContact />
      </main>
      <Footer />
    </div>
  );
}
