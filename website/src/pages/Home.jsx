import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import JoinModal from '../components/JoinModal';
import { milestonesData } from '../data/eventsData';

export function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const focusAreas = [
    {
      title: 'Cybersecurity',
      icon: 'security',
      description: 'Practical learning in web security, ethical hacking fundamentals, and defensive configurations.'
    },
    {
      title: 'Competition',
      icon: 'flag',
      description: 'Participating in CTFs, coding competitions, and hackathons to test problem-solving under pressure.'
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
      <main className="pt-24 pb-20">
        <JoinModal 
          isOpen={isJoinModalOpen} 
          onClose={() => setIsJoinModalOpen(false)} 
        />

        {/* Hero Section */}
        <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
              <span className="font-sans text-xs text-accent uppercase tracking-widest font-bold">
                HackIT SGGSIE&T • Nanded
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight tracking-tight uppercase">
              Learn. Build. <br/>Compete.
            </h1>

            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              We are a student-led cybersecurity and technology community. Through hands-on workshops, active project development, and competitive tournaments, we prepare students for real-world engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-bold transition-all rounded-[16px] shadow-soft hover:shadow-md active:scale-[0.98]"
              >
                Join HackIT Community
              </button>
              <Link
                to="/events"
                className="px-7 py-3.5 bg-surface text-text-primary hover:bg-surface-secondary border border-border hover:border-border-hover font-sans text-sm font-bold transition-all rounded-[16px] shadow-soft active:scale-[0.98]"
              >
                Explore Events
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Academic Showcase (Human element / illustration frame) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-surface border border-border p-6 shadow-soft rounded-[28px] relative">
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent rounded-tr-[16px] opacity-40"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-accent rounded-bl-[16px] opacity-40"></div>
              
              <div className="space-y-4">
                <div className="bg-surface-secondary aspect-[4/3] flex items-center justify-center border border-border relative overflow-hidden group rounded-[20px]">
                  {/* Geometric academic/security background illustration */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b2222_1.5px,transparent_1.5px)] [background-size:20px_20px] dark:opacity-20 dark:bg-[radial-gradient(#a63232_1.5px,transparent_1.5px)]"></div>
                  <div className="relative z-10 text-center p-6 space-y-3">
                    <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center mx-auto rounded-full">
                      <span className="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <h4 className="font-sans font-bold text-sm text-text-primary">SGGSIE&T Campus Activity</h4>
                    <p className="text-xs text-text-secondary max-w-[200px] mx-auto leading-relaxed">Peer-to-peer knowledge sharing and live labs.</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-[11px] text-text-secondary font-sans font-semibold tracking-wider">
                  <span>SYSTEM STATUS: ACTIVE</span>
                  <span>EST. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Space wrapper instead of line divider */}
        <div className="py-8 bg-surface-secondary/40 border-y border-border/50">
          {/* What We Do */}
          <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
            <AnimatedSection className="mb-12">
              <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Pillars</span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight uppercase">
                Our Core Focus
              </h2>
              <p className="text-sm text-text-secondary mt-2 max-w-xl">
                HackIT channels student creativity and technical curiosity into structured learning paths.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <AnimatedCard key={area.title} index={index}>
                  <div className="bg-surface border border-border p-6 h-full flex flex-col justify-between card-hover group shadow-soft rounded-[24px] hover:border-border-hover">
                    <div>
                      <div className="w-12 h-12 bg-accent-subtle text-accent flex items-center justify-center mb-6 rounded-full group-hover:bg-accent group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-xl">{area.icon}</span>
                      </div>

                      <h3 className="font-sans text-base font-bold text-text-primary mb-3">
                        {area.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>
        </div>

        {/* Recent Milestones */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24">
          <AnimatedSection className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">History</span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight uppercase">
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
                <div className="bg-surface border border-border p-6 h-full flex flex-col justify-between card-hover shadow-soft rounded-[24px] hover:border-border-hover">
                  <div>
                    <div className="flex items-center justify-between text-xs text-text-secondary mb-5">
                      <span className="px-3.5 py-1 bg-accent-subtle text-accent font-bold rounded-full">
                        {evt.category}
                      </span>
                      <span className="font-semibold">{evt.date}</span>
                    </div>
                    <h3 className="font-sans text-lg font-bold text-text-primary mb-3 leading-snug">{evt.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">{evt.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-surface-secondary text-xs text-text-secondary flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                    <span>{evt.venue}</span>
                  </div>
                </div>
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
                Join SGGSIE&T&apos;s Engineering Community
              </h3>

              <p className="text-sm text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
                HackIT is a peer-driven environment. Whether you want to write your first program, deploy servers, or hack flags, you will build real skills through collaborative challenges.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-sans text-sm font-bold transition-all rounded-[16px] shadow-soft active:scale-[0.98]"
                >
                  Apply to Join
                </button>
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
