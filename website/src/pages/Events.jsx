import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { milestonesData, whatsNextData } from '../data/eventsData';

export function Events({ onOpenEvent }) {
  const featuredEvents = milestonesData.filter((evt) => evt.featured);
  const openHouseEvent = milestonesData.find((evt) => !evt.featured);

  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
      {/* Header */}
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-14">
        <span className="inline-block px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold tracking-wide rounded-full mb-4">
          2025-26 Academic Year
        </span>

        <h1 className="font-sans text-3xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4 uppercase">
          Club Milestones
        </h1>

        <p className="text-base text-text-secondary max-w-2xl leading-relaxed mb-10">
          HackIT is evolving into a student-driven cybersecurity community built on competition, learning, and hands-on technical experience.
        </p>

        {/* Value Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '01', label: 'Competition', sub: 'CTFs & tournaments' },
            { num: '02', label: 'Learning', sub: 'Weekly practical labs' },
            { num: '03', label: 'Growth', sub: 'Technical excellence' },
            { num: '04', label: 'Community', sub: 'Student-led network' },
          ].map((p) => (
            <div key={p.num} className="p-5 bg-surface border border-border rounded-[20px] shadow-soft">
              <span className="text-accent text-sm font-bold block mb-1">{p.num}. {p.label}</span>
              <span className="text-xs text-text-secondary font-medium leading-normal">{p.sub}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Spacing container background instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Major Milestones */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-12">
            <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Portfolio</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
              Major Milestones
            </h2>
            <p className="text-sm text-text-secondary">
              Key events highlighting student participation, hackathons, and practical learning.
            </p>
          </AnimatedSection>

          {/* Featured Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredEvents.map((evt, index) => (
              <AnimatedCard key={evt.id} index={index}>
                <article className="bg-surface border border-border p-6 h-full flex flex-col justify-between card-hover group shadow-soft hover:shadow hover:border-border-hover rounded-[24px]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-5 text-xs">
                      <span className="px-3.5 py-1 bg-accent-subtle text-accent font-bold rounded-full">
                        {evt.category}
                      </span>
                      <span className="text-text-secondary font-semibold">{evt.date}</span>
                    </div>

                    <h3 className="font-sans text-base font-bold text-text-primary group-hover:text-accent transition-colors mb-3">
                      {evt.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed mb-5">
                      {evt.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5 space-y-2.5 p-5 bg-background border border-border rounded-[16px]">
                      <span className="text-xs font-bold text-text-primary uppercase tracking-wider block mb-1">
                        Key Highlights
                      </span>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {evt.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-surface-secondary space-y-4 text-xs">
                    <div className="flex items-center gap-1.5 text-text-secondary font-medium">
                      <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                      <span>{evt.venue}</span>
                    </div>
                    {evt.prizes && (
                      <div className="flex items-center gap-1.5 text-accent font-bold">
                        <span className="material-symbols-outlined text-sm">workspace_premium</span>
                        <span>{evt.prizes}</span>
                      </div>
                    )}

                    {onOpenEvent && (
                      <button
                        onClick={() => onOpenEvent(evt)}
                        className="w-full mt-3 py-2.5 bg-surface-secondary hover:bg-accent hover:text-white text-xs font-bold transition-all border border-border hover:border-transparent rounded-[14px] shadow-sm cursor-pointer"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </div>

          {/* Open House (subtle emphasis) */}
          {openHouseEvent && (
            <AnimatedSection>
              <div className="bg-surface border border-border p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 text-sm shadow-soft rounded-[20px] hover:border-border-hover transition-colors">
                <div className="flex items-center gap-4">
                  <span className="w-2.5 h-2.5 bg-text-secondary rounded-full shrink-0"></span>
                  <div>
                    <div className="flex items-center gap-2 text-xs mb-1.5">
                      <span className="px-2.5 py-0.5 bg-accent-subtle text-accent font-bold rounded-full">
                        {openHouseEvent.category}
                      </span>
                      <span className="text-text-secondary font-semibold">{openHouseEvent.date}</span>
                    </div>
                    <h4 className="font-bold text-text-primary text-base leading-snug">{openHouseEvent.title}</h4>
                    <p className="text-xs text-text-secondary mt-1 max-w-2xl leading-relaxed">{openHouseEvent.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-text-secondary shrink-0 font-medium">
                  <span>{openHouseEvent.venue}</span>
                  {onOpenEvent && (
                    <button
                      onClick={() => onOpenEvent(openHouseEvent)}
                      className="px-4.5 py-2.5 bg-surface-secondary text-text-primary hover:bg-border border border-border font-bold rounded-[14px] transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          )}
        </section>
      </div>

      {/* What's Next */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24">
        <AnimatedSection className="mb-12">
          <span className="inline-block px-3.5 py-1 bg-accent text-white text-xs font-bold rounded-full mb-3">
            Roadmap 2026-27
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
            What&apos;s next?
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
            HackIT is expanding its technical footprint with practical initiatives designed to build real cybersecurity skills at SGGSIE&T.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsNextData.map((item, index) => (
            <AnimatedCard key={item.title} index={index}>
              <div className="bg-surface border border-border p-6 h-full flex items-start gap-4 card-hover group shadow-soft hover:border-border-hover rounded-[22px]">
                <span className="material-symbols-outlined text-lg text-accent bg-accent-subtle p-3 rounded-full shrink-0">
                  {item.icon}
                </span>
                <div className="space-y-1">
                  <h3 className="font-sans text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Events;
