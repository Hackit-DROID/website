import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { milestonesData } from '../data/eventsData';
import EventCard from '../components/EventCard';
import EventTimeline from '../components/EventTimeline';

export function Events() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
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
              <span className="text-xs text-text-secondary font-semibold font-medium leading-normal">{p.sub}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Spacing container background instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Major Milestones */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Portfolio</span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
                Major Milestones
              </h2>
              <p className="text-sm text-text-secondary">
                Key events highlighting student participation, hackathons, and practical learning.
              </p>
            </div>

            {/* View Mode Toggle Switch */}
            <div className="flex bg-surface border border-border p-1 rounded-full shadow-sm shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-accent text-white shadow-soft'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
                Card Grid
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'timeline'
                    ? 'bg-accent text-white shadow-soft'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">view_timeline</span>
                Timeline
              </button>
            </div>
          </AnimatedSection>

          {/* Conditional Layout Rendering */}
          {viewMode === 'grid' ? (
            <div className="space-y-10">
              {/* Featured Event Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredEvents.map((evt, index) => (
                  <AnimatedCard key={evt.id} index={index}>
                    <EventCard event={evt} />
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
                      <Link
                        to={`/events/${openHouseEvent.slug}`}
                        className="px-4.5 py-2.5 bg-surface-secondary text-text-primary hover:bg-border border border-border font-bold rounded-[14px] transition-colors inline-block text-center"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>
          ) : (
            <div className="max-w-4xl">
              <EventTimeline events={milestonesData} />
            </div>
          )}
        </section>
      </div>

      {/* Upcoming Activities */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24">
        <AnimatedSection className="text-center max-w-xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 bg-surface border border-border text-text-secondary text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full shadow-soft">
            To Be Announced
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight">
            Upcoming Activities
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Events and activities for the 2026–27 academic year will be announced soon.
          </p>
        </AnimatedSection>
      </section>
    </main>
  );
}

export default Events;
