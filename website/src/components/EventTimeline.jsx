import { Link } from 'react-router-dom';
import { AnimatedCard } from './AnimatedSection';

export function EventTimeline({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <div className="relative border-l border-border/80 ml-4 md:ml-6 space-y-12 py-4">
      {events.map((event, index) => {
        return (
          <div key={event.id} className="relative pl-8 md:pl-10 group">
            {/* Timeline Dot & Ring */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-accent flex items-center justify-center">
              <span className="absolute w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            {/* Glowing ring animation on hover */}
            <div className="absolute -left-[17px] top-[-3px] w-8 h-8 rounded-full bg-accent-subtle opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none"></div>

            {/* Timeline Item Content */}
            <AnimatedCard index={index}>
              <div className="bg-surface border border-border p-6 rounded-[24px] shadow-soft hover:shadow hover:border-border-hover transition-all duration-300 card-hover group/card flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                
                <div className="space-y-3 max-w-2xl">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 bg-accent-subtle text-accent font-bold rounded-full uppercase">
                      {event.category}
                    </span>
                    <span className="text-text-secondary font-semibold font-mono">{event.date}</span>
                    {event.status && (
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase ${
                        event.status === 'Ongoing'
                          ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30'
                          : 'bg-surface-secondary text-text-secondary border border-border'
                      }`}>
                        {event.status}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover/card:text-accent transition-colors duration-300 leading-snug">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="text-xs text-accent font-semibold font-mono uppercase tracking-wide mt-1">
                        {event.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {event.summary}
                  </p>

                  {/* Highlights Summary (Short) */}
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {event.highlights.slice(0, 2).map((hl, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[10px] text-text-secondary bg-surface-secondary px-2.5 py-1 rounded-md border border-border font-medium">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-surface-secondary/80 flex justify-between items-center md:justify-end gap-6 text-xs">
                  <div className="flex items-center gap-1.5 text-text-secondary font-medium">
                    <span className="material-symbols-outlined text-sm text-accent">location_on</span>
                    <span>{event.venueDisplay || event.venue}</span>
                  </div>
                  
                  <Link
                    to={`/events/${event.slug}`}
                    className="px-5 py-2.5 bg-surface-secondary hover:bg-accent hover:text-white text-xs font-bold transition-all border border-border hover:border-transparent rounded-[14px] shadow-sm flex items-center gap-1.5"
                  >
                    Case Study
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>

              </div>
            </AnimatedCard>
          </div>
        );
      })}
    </div>
  );
}

export default EventTimeline;
