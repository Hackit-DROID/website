import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { milestonesData } from '../data/eventsData';

export function EventDetails() {
  const { slug } = useParams();
  
  // Find current event
  const currentIdx = milestonesData.findIndex((evt) => evt.slug === slug);
  const event = milestonesData[currentIdx];

  // If event doesn't exist, show an error page
  if (!event) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-background text-text-primary pt-32 pb-20 flex flex-col items-center justify-center px-4 text-center">
          <span className="material-symbols-outlined text-6xl text-accent mb-4 animate-bounce">
            error
          </span>
          <h1 className="text-3xl font-extrabold mb-2 uppercase tracking-tight">Event Not Found</h1>
          <p className="text-sm text-text-secondary max-w-md mb-8">
            The event you are looking for does not exist in HackIT's archive. It may have been moved or renamed.
          </p>
          <Link
            to="/events"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-[14px] transition-colors flex items-center gap-2 shadow-soft"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Events
          </Link>
        </main>
      </PageTransition>
    );
  }

  const totalEvents = milestonesData.length;
  // Circular navigation wraps around
  const prevEvent = milestonesData[(currentIdx - 1 + totalEvents) % totalEvents];
  const nextEvent = milestonesData[(currentIdx + 1) % totalEvents];

  // Helper to map icons for highlights
  const getHighlightIcon = (text) => {
    const t = text.toLowerCase();
    if (t.includes('participant') || t.includes('student') || t.includes('freshmen')) return 'groups';
    if (t.includes('prize') || t.includes('cash') || t.includes('₹')) return 'workspace_premium';
    if (t.includes('round') || t.includes('competition') || t.includes('stage')) return 'sports_esports';
    if (t.includes('national') || t.includes('nominee') || t.includes('sih')) return 'stars';
    if (t.includes('showcase') || t.includes('project')) return 'rocket_launch';
    if (t.includes('dignitary') || t.includes('director')) return 'account_balance';
    return 'check_circle';
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Back Navigation */}
          <div className="pt-4 pb-6">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-accent transition-colors bg-surface-secondary border border-border px-4 py-2 rounded-full shadow-soft"
            >
              <span className="material-symbols-outlined text-xs">arrow_back</span>
              Back to Events
            </Link>
          </div>

          {/* Hero Section */}
          <AnimatedSection className="mb-12 border-b border-border/60 pb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold tracking-wide rounded-full uppercase">
                {event.category}
              </span>
              <span className="text-xs text-text-secondary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">calendar_month</span>
                {event.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight tracking-tight uppercase mb-6">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary font-medium">
              <div className="flex items-center gap-2 bg-surface-secondary px-4 py-2 rounded-[12px] border border-border">
                <span className="material-symbols-outlined text-base text-accent">location_on</span>
                <span>{event.venue}</span>
              </div>
              {event.prizes && (
                <div className="flex items-center gap-2 bg-accent-subtle px-4 py-2 rounded-[12px] border border-accent/10 text-accent font-bold">
                  <span className="material-symbols-outlined text-base">workspace_premium</span>
                  <span>{event.prizes}</span>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Split Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content (Overview & Highlights) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Event Overview */}
              <AnimatedSection className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary border-l-2 border-accent pl-3.5">
                  Event Overview
                </h2>
                <p className="text-base text-text-primary font-medium leading-relaxed pt-2">
                  {event.summary}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </AnimatedSection>

              {/* Key Highlights */}
              <AnimatedSection className="space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary border-l-2 border-accent pl-3.5">
                  Key Highlights
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, idx) => (
                    <AnimatedCard key={idx} index={idx}>
                      <div className="bg-surface border border-border p-5 rounded-[20px] shadow-soft card-hover hover:border-border-hover transition-all duration-300 flex items-start gap-4 h-full">
                        <div className="w-10 h-10 bg-accent-subtle text-accent flex items-center justify-center rounded-xl shrink-0">
                          <span className="material-symbols-outlined text-lg">
                            {getHighlightIcon(highlight)}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-text-primary font-bold leading-normal pt-1.5">
                          {highlight}
                        </span>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </AnimatedSection>

              {/* Photo Gallery */}
              <AnimatedSection className="space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary border-l-2 border-accent pl-3.5">
                  Media Gallery
                </h2>

                {event.gallery && event.gallery.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {event.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="bg-surface border border-border overflow-hidden rounded-[20px] aspect-[4/3] group relative shadow-soft">
                        <img 
                          src={imgUrl} 
                          alt={`${event.title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-surface-secondary/50 border border-dashed border-border p-8 rounded-[24px] text-center flex flex-col items-center justify-center min-h-[220px]">
                    <div className="w-12 h-12 bg-border text-text-secondary flex items-center justify-center rounded-full mb-3">
                      <span className="material-symbols-outlined text-xl">photo_library</span>
                    </div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">Media Archive Pending</h4>
                    <p className="text-xs text-text-secondary max-w-sm leading-relaxed">
                      Photographs of this milestone are currently being cataloged and optimized for the student portal.
                    </p>
                  </div>
                )}
              </AnimatedSection>

            </div>

            {/* Right Sidebar (Metadata) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Event Metadata Card */}
              <AnimatedSection>
                <div className="bg-surface border border-border p-6 rounded-[24px] shadow-soft space-y-6">
                  
                  {/* Domains */}
                  <div>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-3">
                      Domains Covered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.domains.map((dom) => (
                        <span 
                          key={dom}
                          className="px-2.5 py-1 bg-surface-secondary text-text-secondary hover:text-accent font-mono text-[10px] font-bold rounded-[6px] border border-border transition-colors duration-200"
                        >
                          #{dom.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats / Attendance */}
                  <div className="pt-5 border-t border-border/60 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-surface-secondary text-text-secondary flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined text-base">groups</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-text-secondary block font-semibold uppercase leading-none mb-0.5">Reach</span>
                        <span className="text-xs font-bold text-text-primary">{event.participants}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact & Outcome */}
                  <div className="pt-5 border-t border-border/60">
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-2">
                      Outcome Report
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {event.report}
                    </p>
                  </div>

                </div>
              </AnimatedSection>

            </div>

          </div>

          {/* Previous & Next Event Navigation */}
          <div className="pt-10 border-t border-border/60 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Prev Link */}
            <Link
              to={`/events/${prevEvent.slug}`}
              className="w-full sm:w-[48%] flex items-center justify-between p-5 bg-surface border border-border rounded-[20px] shadow-soft card-hover hover:border-border-hover group transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <span className="material-symbols-outlined text-lg text-text-secondary group-hover:text-accent transition-colors group-hover:-translate-x-1 duration-300">
                  arrow_back
                </span>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-0.5">Previous Milestone</span>
                  <span className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors leading-snug block line-clamp-1 max-w-[200px] sm:max-w-[180px] md:max-w-[240px]">
                    {prevEvent.title}
                  </span>
                </div>
              </div>
            </Link>

            {/* Next Link */}
            <Link
              to={`/events/${nextEvent.slug}`}
              className="w-full sm:w-[48%] flex items-center justify-between p-5 bg-surface border border-border rounded-[20px] shadow-soft card-hover hover:border-border-hover group transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 justify-between w-full">
                <div className="text-left">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-0.5">Next Milestone</span>
                  <span className="text-xs font-bold text-text-primary group-hover:text-accent transition-colors leading-snug block line-clamp-1 max-w-[200px] sm:max-w-[180px] md:max-w-[240px]">
                    {nextEvent.title}
                  </span>
                </div>
                <span className="material-symbols-outlined text-lg text-text-secondary group-hover:text-accent transition-colors group-hover:translate-x-1 duration-300">
                  arrow_forward
                </span>
              </div>
            </Link>

          </div>

        </div>
      </main>
    </PageTransition>
  );
}

export default EventDetails;
