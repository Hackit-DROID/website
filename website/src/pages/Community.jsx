import { useState } from 'react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import JoinModal from '../components/JoinModal';
import { 
  communityPhilosophy, 
  howWeLearn, 
  domainsExplored, 
  recruitmentConfig, 
  socialLinks 
} from '../data/communityData';

export function Community() {
  const [activeCard, setActiveCard] = useState(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />

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

      {/* Section 5: CTA & Socials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
        <AnimatedSection>
          <div className="bg-surface border border-border p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-soft rounded-[28px]">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary uppercase mb-4">
              Become part of HackIT
            </h3>

            <p className="text-sm text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
              Interested in cybersecurity, programming, projects, or technical competitions? Follow HackIT and join when recruitment opens.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5.5 py-3 bg-surface-secondary hover:bg-surface text-text-primary border border-border hover:border-border-hover text-sm font-bold rounded-[14px] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-[14px] transition-colors shadow-soft cursor-pointer"
              >
                Express Interest
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

export default Community;
