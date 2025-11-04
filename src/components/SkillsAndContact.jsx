import { BadgeCheck, Cpu, Database, Flame, Github, Layout, Mail, Rocket, Terminal, Linkedin } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-gray-200 shadow-sm transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
    {children}
  </span>
);

export default function SkillsAndContact() {
  const skills = [
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'],
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'],
    },
    {
      title: 'Frontend & Mobile',
      items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
    },
    {
      title: 'AI & LLMs',
      items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'],
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
    },
    {
      title: 'Automation & Tools',
      items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="w-full bg-gradient-to-b from-black to-gray-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mt-2 text-gray-400">Compact, elegant badges with a soft glow on hover.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-3 text-lg font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <p className="mt-2 text-gray-400">Let’s build something exceptional together.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a href="mailto:vishwajeet.7t@gmail.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
              <Mail className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-medium group-hover:underline">vishwajeet.7t@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/kumarvishwajeettrivedi" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
              <Github className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <div className="font-medium group-hover:underline">kumarvishwajeettrivedi</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
              <Linkedin className="h-5 w-5 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div className="font-medium group-hover:underline">Vishwajeet Kumar</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
