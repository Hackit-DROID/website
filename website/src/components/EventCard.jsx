import { Link } from 'react-router-dom';

export function EventCard({ event }) {
  if (!event) return null;

  return (
    <article className="bg-surface border border-border p-6 h-full flex flex-col justify-between card-hover group shadow-soft hover:shadow hover:border-border-hover rounded-[24px] transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-5 text-xs">
          <span className="px-3.5 py-1 bg-accent-subtle text-accent font-bold rounded-full uppercase">
            {event.category}
          </span>
          <span className="text-text-secondary font-semibold">{event.date}</span>
        </div>

        <h3 className="font-sans text-base font-bold text-text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
          {event.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {event.summary}
        </p>

        {/* Highlights summary */}
        <div className="mb-5 space-y-2.5 p-5 bg-background border border-border rounded-[16px]">
          <span className="text-xs font-bold text-text-primary uppercase tracking-wider block mb-1">
            Key Highlights
          </span>
          <ul className="space-y-2 text-xs text-text-secondary">
            {event.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span className="leading-relaxed line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-surface-secondary space-y-4 text-xs">
        <div className="flex items-center gap-1.5 text-text-secondary font-medium">
          <span className="material-symbols-outlined text-sm text-accent">location_on</span>
          <span className="line-clamp-1">{event.venue}</span>
        </div>
        {event.prizes && (
          <div className="flex items-center gap-1.5 text-accent font-bold">
            <span className="material-symbols-outlined text-sm">workspace_premium</span>
            <span className="line-clamp-1">{event.prizes}</span>
          </div>
        )}

        <Link
          to={`/events/${event.slug}`}
          className="block text-center w-full mt-3 py-2.5 bg-surface-secondary hover:bg-accent hover:text-white text-xs font-bold transition-all border border-border hover:border-transparent rounded-[14px] shadow-sm"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default EventCard;
