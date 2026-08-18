import { useState } from 'react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { 
  communityPhilosophy, 
  howWeLearn, 
  domainsExplored, 
  recruitmentConfig 
} from '../data/communityData';
import { Github, Linkedin, Discord } from '../components/SocialIcons';

export function Community() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">

      {/* Section 1: Hero & Philosophy */}
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-16">
        <span className="inline-block px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold tracking-wide rounded-full mb-4">
          Community Life
        </span>

        <h1 className="font-sans text-3xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4 uppercase">
          What is it like to be part of HackIT?
        </h1>

        {/* Quote */}
        <div className="p-6 bg-surface border-l-4 border-accent border-y border-r border-border max-w-3xl mb-12 shadow-soft rounded-[20px] rounded-l-[4px]">
          <p className="text-base text-text-primary italic leading-relaxed">
            &ldquo;HackIT is more than a club. It&apos;s a community built around learning, building, and competing together.&rdquo;
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityPhilosophy.map((item, idx) => (
            <AnimatedCard key={item.title} index={idx}>
              <div className="bg-surface border border-border p-6 h-full shadow-soft hover:border-border-hover rounded-[24px] transition-all duration-200">
                <span className="text-sm text-accent font-bold block mb-2.5">
                  {item.title}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Spacing container background instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Section 2: How We Learn */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-10">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary uppercase mb-2">
              How we learn
            </h2>
            <p className="text-sm text-text-secondary">
              Four methods that define how HackIT members develop technical skills.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeLearn.map((card, idx) => {
              const isSelected = activeCard === card.id;
              return (
                <AnimatedCard key={card.id} index={idx}>
                  <button
                    onClick={() => setActiveCard(isSelected ? null : card.id)}
                    className={`w-full text-left p-6 border transition-all duration-300 h-full flex flex-col justify-between cursor-pointer rounded-[24px] shadow-soft ${
                      isSelected
                        ? 'bg-accent-subtle border-accent'
                        : 'bg-surface border-border hover:border-border-hover'
                    }`}
                  >
                    <div>
                      <div className={`w-11 h-11 flex items-center justify-center mb-5 rounded-full ${
                        isSelected ? 'bg-accent text-white' : 'bg-accent-subtle text-accent'
                      } transition-colors`}>
                        <span className="material-symbols-outlined text-lg">{card.icon}</span>
                      </div>

                      <h3 className="font-sans text-base font-bold text-text-primary mb-2">
                        {card.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </button>
                </AnimatedCard>
              );
            })}
          </div>
        </section>
      </div>

      {/* Section 3: Domains */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <AnimatedSection className="mb-8">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary uppercase mb-2">
            Domains we explore
          </h2>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap gap-3">
          {domainsExplored.map((domain) => (
            <span
              key={domain}
              className="px-4 py-2 bg-surface text-text-primary border border-border hover:border-accent hover:text-accent text-sm font-semibold transition-all cursor-default shadow-soft rounded-full"
            >
              {domain}
            </span>
          ))}
        </AnimatedSection>
      </section>

      {/* Spacing container background instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Section 4: Recruitment Cycle */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary uppercase mb-2">
                Annual recruitment
              </h2>
              <p className="text-sm text-text-secondary">
                {recruitmentConfig.statusSubtext}
              </p>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2.5 px-4.5 py-2 bg-surface border border-border text-sm shrink-0 shadow-soft rounded-full">
              <span className={`w-2.5 h-2.5 ${recruitmentConfig.isOpen ? 'bg-success' : 'bg-error'} rounded-full`}></span>
              <span className="text-text-primary font-bold">{recruitmentConfig.statusText}</span>
            </div>
          </AnimatedSection>

          {/* Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {recruitmentConfig.pipeline.map((step, idx) => (
              <AnimatedCard key={step.step} index={idx}>
                <div className="bg-surface border border-border p-5 h-full flex flex-col card-hover relative shadow-soft rounded-[20px] hover:border-border-hover">
                  <span className="text-accent text-xs font-bold block mb-1.5">{step.step}.</span>
                  <h3 className="font-sans text-sm font-bold text-text-primary mb-1.5">{step.name}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                  {idx < recruitmentConfig.pipeline.length - 1 && (
                    <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-text-secondary font-bold z-10 text-sm">
                      →
                    </span>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </div>

      {/* Section 5: Recruitment Status & Socials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <AnimatedSection>
          <div className="bg-surface border border-border p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-soft rounded-[28px]">
            <span className="inline-block px-3.5 py-1 bg-error/10 text-error text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full mb-4">
              Recruitment Status: CLOSED
            </span>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary uppercase mb-4">
              Membership Recruitment
            </h3>

            <p className="text-sm text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
              Recruitment is conducted once every academic year through an application, screening, and interview process.
              Future recruitment announcements will be published through official HackIT and SGGSIE&T communication channels.
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-2">Connect & Follow</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn w-11 h-11"
                  aria-label="Join our Discord Server"
                >
                  <Discord size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn w-11 h-11"
                  aria-label="View our GitHub Organization"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn w-11 h-11"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

export default Community;
