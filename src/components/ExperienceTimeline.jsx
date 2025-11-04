import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <div className="mb-10 flex items-end justify-between">
    <div>
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-cyan-400" />}
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

function TimelineItem({ title, org, date, location, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400" />
      <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
        <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4" /> {org}</span>
        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {date}</span>
        {location && (
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {location}</span>
        )}
      </div>
      {bullets?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-300">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-black to-gray-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-center text-lg text-gray-200">
            I am a software developer — you can find my journey and achievements below.
          </p>
        </div>

        <SectionHeader title="Education" icon={GraduationCap} />
        <div className="relative border-l border-white/10 pl-8">
          <TimelineItem
            title="Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43)"
            org="National Institute of Technology Sikkim"
            date="Dec 2021 – May 2025"
            location="Sikkim, India"
            bullets={[
              'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science',
            ]}
          />
        </div>

        <div className="mt-14" />
        <SectionHeader title="Work Experience" icon={Briefcase} />
        <div className="relative space-y-10 border-l border-white/10 pl-8">
          <TimelineItem
            title="Software Developer"
            org="Logizee Solutions LLP (Dasho)"
            date="Jul 2025"
            location="Bihar, India"
            bullets={[
              'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
              'Created automation and partner tools with real-time updates.',
              'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
            ]}
          />

          <TimelineItem
            title="Software Development Engineer"
            org="Eduvanz Financing Pvt. Ltd (Wizr)"
            date="Feb 2024 – Jul 2025"
            location="Mumbai, India (Remote)"
            bullets={[
              'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
              'Built dynamic Next.js + TypeScript career and course pages.',
              'Developed an AI-powered chatbot using LangChain and FastAPI.',
            ]}
          />

          <TimelineItem
            title="Freelance Software Development Engineer"
            org="Grozo (Grocery App)"
            date="Sep 2024 – Jan 2025"
            location="Ravangla, Sikkim, India"
            bullets={[
              'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
              'Implemented live tracking, route optimization, and dynamic pricing.',
              'Boosted API performance by 30% with Redis caching and load balancing.',
            ]}
          />

          <TimelineItem
            title="Junior Embedded & IoT Engineer"
            org="9Pointers Tech Pvt. Ltd"
            date="Jun 2024 – Aug 2024"
            location="Jaipur, Rajasthan, India"
            bullets={[
              'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
              'Automated smart home controls using ESP32 & Google Home APIs.',
              'Synced devices to cloud backend via FastAPI + MQTT.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
