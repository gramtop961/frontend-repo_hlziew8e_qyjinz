import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ title, description, actions }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10">
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {actions?.map((a) => (
          <a
            key={a.label}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
          >
            {a.icon}
            <span>{a.label}</span>
          </a>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-cyan-400/40" />
    </div>
  );
}

export default function ProjectsGrid() {
  const linkedin = 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/';
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-gray-950 to-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-gray-400">A selection of work across logistics, AI, web, and embedded systems.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Dasho (Parcel & Transport Platform)"
            description="Logistics and parcel platform backend with Flutter integration and automation dashboard."
            actions={[
              { label: 'View on LinkedIn', href: linkedin, icon: <ExternalLink className="h-4 w-4" /> },
            ]}
          />

          <ProjectCard
            title="Grozo (Real-time Grocery App)"
            description="Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing."
            actions={[
              { label: 'View on LinkedIn', href: linkedin, icon: <ExternalLink className="h-4 w-4" /> },
            ]}
          />

          <ProjectCard
            title="Crypto Meets UPI"
            description="Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase."
            actions={[
              { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi', icon: <Github className="h-4 w-4" /> },
            ]}
          />

          <ProjectCard
            title="WanderWise (AI-Powered Travel App)"
            description="AI-based trip recommendation system using LangChain and vector databases."
            actions={[
              { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise', icon: <Github className="h-4 w-4" /> },
            ]}
          />

          <ProjectCard
            title="RCSC 2025 Conference Website"
            description="College conference site built using Next.js with responsive event layout and dynamic content."
            actions={[
              { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference', icon: <Github className="h-4 w-4" /> },
              { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/', icon: <ExternalLink className="h-4 w-4" /> },
            ]}
          />

          <ProjectCard
            title="Face Detection Greeting System"
            description="Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, and Raspberry Pi."
            actions={[
              { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system', icon: <Github className="h-4 w-4" /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
