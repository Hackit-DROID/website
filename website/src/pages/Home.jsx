import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { milestonesData } from '../data/eventsData';

export function Home() {
  const focusAreas = [
    {
      title: 'Cybersecurity',
      icon: 'security',
      description: 'Practical learning in web security, ethical hacking fundamentals, and defensive configurations.'
    },
    {
      title: 'Competition',
      icon: 'flag',
      description: 'Participating in coding competitions and hackathons to test problem-solving under pressure.'
    },
    {
      title: 'Projects',
      icon: 'code',
      description: 'Collaborative development of open-source tools, technical scripts, and student projects.'
    },
    {
      title: 'Community',
      icon: 'groups',
      description: 'A student-run network at SGGSIE&T bridging beginners and senior peers through peer mentorship.'
    }
  ];

  return (
    <div className="bg-background text-text-primary min-h-screen font-sans antialiased">
      <main className="pt-28 pb-20">

        {/* Hero Section: Option B - Massive Typographic Center-Stage Editorial Layout */}
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center space-y-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-subtle border border-accent/20 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold">
              HackIT SGGSIE&T • Nanded
            </span>
          </div>

          {/* Massive Editorial Headline */}
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black text-text-primary leading-[1.05] tracking-tight uppercase">
            Learn. Build. <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">Compete.</span>
          </h1>

          {/* Domain Tag Strip (Authentic non-CTF tracks with Material Symbols) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs text-text-secondary">
            <span className="px-3.5 py-1 bg-surface border border-border rounded-full shadow-xs inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-accent">security</span>
              Cybersecurity & Systems
            </span>
            <span className="px-3.5 py-1 bg-surface border border-border rounded-full shadow-xs inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-accent">terminal</span>
              Software & Web Engineering
            </span>
            <span className="px-3.5 py-1 bg-surface border border-border rounded-full shadow-xs inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-accent">groups</span>
              Peer Mentorship
            </span>
          </div>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We are a student-led cybersecurity and technology community. Through hands-on workshops, active project development, and competitive tournaments, we prepare students for real-world engineering.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/community"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-bold uppercase tracking-wider transition-all rounded-xl shadow-soft active:scale-[0.98] flex items-center gap-2"
            >
              Explore Community
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link
              to="/events"
              className="px-8 py-4 bg-surface text-text-primary hover:bg-surface-secondary border border-border hover:border-border-hover font-sans text-sm font-bold uppercase tracking-wider transition-all rounded-xl shadow-soft active:scale-[0.98]"
            >
              Explore Events
            </Link>
          </div>

          {/* Authentic Campus Indicators Row */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border/60 max-w-xl mx-auto font-mono text-xs text-text-secondary">
            <div>
              <span className="block font-bold text-text-primary text-sm">SGGSIE&T</span>
              <span>Nanded Campus</span>
            </div>
            <div>
              <span className="block font-bold text-accent text-sm">STUDENT-LED</span>
              <span>Peer Mentorship</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-bold text-text-primary text-sm">EST. 2024</span>
              <span>Active Club</span>
            </div>
          </div>

        </AnimatedSection>

        {/* Section Divider with Cyber Grid */}
        <div className="py-12 bg-surface-secondary/40 border-y border-border/60 bg-cyber-grid">
          {/* Asymmetric Bento Matrix (Core Focus) */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
            <AnimatedSection className="mb-10">
              <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Pillars</span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-text-primary tracking-tight uppercase">
                Our Core Focus
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                HackIT channels student creativity and technical curiosity into structured learning paths.
              </p>
            </AnimatedSection>

            {/* 2x2 Bento Matrix using Authentic Data */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Bento Cell 1: Cybersecurity (2x Span) */}
              <div className="md:col-span-7 bg-surface border border-border p-7 shadow-soft rounded-2xl flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-accent-subtle text-accent flex items-center justify-center mb-6 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">{focusAreas[0].icon}</span>
                  </div>
                  <h3 className="font-sans text-xl font-extrabold text-text-primary mb-3">
                    {focusAreas[0].title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                    {focusAreas[0].description}
                  </p>
                </div>
              </div>

              {/* Bento Cell 2: Competition */}
              <div className="md:col-span-5 bg-surface border border-border p-7 shadow-soft rounded-2xl flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-accent-subtle text-accent flex items-center justify-center mb-6 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">{focusAreas[1].icon}</span>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-text-primary mb-3">
                    {focusAreas[1].title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {focusAreas[1].description}
                  </p>
                </div>
              </div>

              {/* Bento Cell 3: Projects */}
              <div className="md:col-span-5 bg-surface border border-border p-7 shadow-soft rounded-2xl flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-accent-subtle text-accent flex items-center justify-center mb-6 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">{focusAreas[2].icon}</span>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-text-primary mb-3">
                    {focusAreas[2].title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {focusAreas[2].description}
                  </p>
                </div>
              </div>

              {/* Bento Cell 4: Community (2x Span) */}
              <div className="md:col-span-7 bg-surface border border-border p-7 shadow-soft rounded-2xl flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <div className="w-12 h-12 bg-accent-subtle text-accent flex items-center justify-center mb-6 rounded-xl group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">{focusAreas[3].icon}</span>
                  </div>
                  <h3 className="font-sans text-xl font-extrabold text-text-primary mb-3">
                    {focusAreas[3].title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                    {focusAreas[3].description}
                  </p>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Recent Milestones */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">History</span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-text-primary tracking-tight uppercase">
                Recent Milestones
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                Significant achievements from the 2025-26 academic year.
              </p>
            </div>
            <Link
              to="/events"
              className="text-sm text-accent hover:text-accent-hover font-bold transition-colors shrink-0 flex items-center gap-1.5 bg-accent-subtle px-4 py-2 rounded-full"
            >
              View Full Timeline →
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestonesData.map((evt, idx) => (
              <AnimatedCard key={evt.id} index={idx}>
                <Link
                  to={`/events/${evt.slug}`}
                  className="block bg-surface border border-border p-6 h-full flex flex-col justify-between shadow-soft rounded-2xl hover:border-border-hover group transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                      <span className="px-3 py-1 bg-accent-subtle text-accent font-bold rounded-full uppercase text-xs">
                        {evt.category}
                      </span>
                      <span className="font-semibold">{evt.date}</span>
                    </div>
                    <h3 className="font-sans text-lg font-bold text-text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">
                      {evt.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-surface-secondary text-xs text-text-secondary flex items-center justify-between font-medium">
                    <div className="flex items-center gap-1.5">
                      {evt.venue && (
                        <>
                          <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                          <span>{evt.venue}</span>
                        </>
                      )}
                    </div>
                    <span className="text-accent group-hover:text-accent-hover font-bold flex items-center gap-1.5 transition-all">
                      Read Story
                      <span className="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform duration-300">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
          <AnimatedSection>
            <div className="bg-surface border border-border p-8 sm:p-16 text-center max-w-4xl mx-auto relative shadow-soft rounded-[28px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-accent rounded-b-[4px]"></div>
              
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-4">
                SGGSIE&T&apos;s Student Engineering Community
              </h3>

              <p className="text-sm text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
                HackIT is a peer-driven environment. Whether you want to write your first program, deploy servers, or solve coding challenges, you will build real skills through collaborative projects.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/community"
                  className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-bold transition-all rounded-[16px] shadow-soft active:scale-[0.98]"
                >
                  View Recruitment Status
                </Link>
                <Link
                  to="/team"
                  className="px-7 py-3.5 bg-surface-secondary text-text-primary hover:bg-border border border-border font-sans text-sm font-bold transition-all rounded-[16px] active:scale-[0.98]"
                >
                  Meet student leaders
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}

export default Home;
