import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { milestonesData } from '../data/eventsData';
import EventCard from '../components/EventCard';
import EventTimeline from '../components/EventTimeline';

export function Events() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'timeline'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  // Dynamically extract categories from milestonesData preserving order of appearance
  const categories = useMemo(() => {
    const unique = Array.from(new Set(milestonesData.map((evt) => evt.category)));
    return ['All', ...unique];
  }, []);

  // Filter events based on search query and selected category
  const filteredEvents = useMemo(() => {
    return milestonesData.filter((evt) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        evt.title.toLowerCase().includes(query) ||
        (evt.subtitle && evt.subtitle.toLowerCase().includes(query)) ||
        evt.summary.toLowerCase().includes(query) ||
        evt.venue.toLowerCase().includes(query) ||
        (evt.venueDisplay && evt.venueDisplay.toLowerCase().includes(query)) ||
        evt.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === 'All' || evt.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
      {/* Header */}
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-14">
        <span className="inline-block px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold tracking-wide rounded-full mb-4">
          2025-26 Academic Year
        </span>

        <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4 uppercase">
          Club Milestones
        </h1>

        <p className="text-base text-text-secondary max-w-2xl leading-relaxed mb-10">
          HackIT is evolving into a student-driven cybersecurity and tech engineering community built on competition, learning, and hands-on experience.
        </p>

        {/* Search & Filter Toolbar */}
        <div className="bg-surface border border-border p-4 rounded-2xl shadow-soft space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search milestones, venues..."
                className="w-full pl-9 pr-8 py-2.5 bg-surface-secondary border border-border focus:border-accent text-xs font-sans rounded-xl outline-none text-text-primary placeholder:text-text-secondary/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary text-xs font-mono"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle Switch with Kowalski Spring Pill */}
            <div className="flex bg-surface-secondary border border-border p-1 rounded-full shrink-0 w-full md:w-auto justify-center relative">
              <button
                onClick={() => setViewMode('grid')}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer z-10 ${
                  viewMode === 'grid' ? 'text-white' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {viewMode === 'grid' && (
                  <motion.div
                    layoutId="viewModeActivePill"
                    className="absolute inset-0 bg-accent rounded-full shadow-soft -z-10"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                  />
                )}
                <span className="material-symbols-outlined text-sm">grid_view</span>
                Card Grid
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer z-10 ${
                  viewMode === 'timeline' ? 'text-white' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {viewMode === 'timeline' && (
                  <motion.div
                    layoutId="viewModeActivePill"
                    className="absolute inset-0 bg-accent rounded-full shadow-soft -z-10"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                  />
                )}
                <span className="material-symbols-outlined text-sm">view_timeline</span>
                Timeline
              </button>
            </div>
          </div>

          {/* Category Filter Pills with Kowalski Spring Pill */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-text-secondary mr-1 font-semibold uppercase">Category:</span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1 text-xs font-mono font-semibold rounded-full border transition-colors cursor-pointer z-10 ${
                    isSelected
                      ? 'text-white border-accent'
                      : 'bg-surface hover:bg-surface-secondary text-text-secondary border-border'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="categoryActivePill"
                      className="absolute inset-0 bg-accent rounded-full -z-10"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Spacing container background */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Major Milestones Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
          <AnimatedSection className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-text-primary uppercase tracking-tight">
                Filtered Events ({filteredEvents.length})
              </h2>
            </div>
          </AnimatedSection>

          {/* Conditional Layout Morphing with Emil Kowalski ease-out curve & transform strings */}
          {filteredEvents.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, transform: 'translateY(12px) scale(0.98)' }
                }
                animate={{ opacity: 1, transform: 'translateY(0px) scale(1)' }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, transform: 'translateY(-12px) scale(0.98)' }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.22, ease: [0.23, 1, 0.32, 1] }
                }
              >
                {viewMode === 'grid' ? (
                  <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredEvents.map((evt, index) => (
                        <AnimatedCard key={evt.id} index={index} layout={true}>
                          <EventCard event={evt} />
                        </AnimatedCard>
                      ))}
                    </div>
                  </AnimatePresence>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <EventTimeline events={filteredEvents} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            /* Empty State */
            <div className="bg-surface border border-border p-12 text-center rounded-2xl max-w-md mx-auto space-y-4">
              <span className="material-symbols-outlined text-4xl text-text-secondary">search_off</span>
              <h3 className="font-sans text-lg font-bold text-text-primary">No Matching Events Found</h3>
              <p className="text-xs text-text-secondary">
                No events match your current filter query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 bg-accent text-white font-mono text-xs font-bold rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Upcoming Activities */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
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
