import { useState } from 'react';
import { Link } from 'react-router-dom';

export function EventCard({ event }) {
  const [imgError, setImgError] = useState(false);
  if (!event) return null;

  const coverImage = event.coverImage || (event.gallery && event.gallery.length > 0 ? event.gallery[0] : null);
  const displayVenue = event.venueDisplay || event.venue;
  const isOngoing = event.status === 'Ongoing' || (event.startDate && event.endDate && new Date() >= new Date(event.startDate) && new Date() <= new Date(event.endDate + 'T23:59:59'));
  const status = event.status || (isOngoing ? 'Ongoing' : 'Completed');

  return (
    <article className="bg-surface border border-border p-5 sm:p-6 h-full flex flex-col justify-between card-hover group shadow-soft hover:shadow hover:border-border-hover rounded-[24px] transition-all duration-300">
      <div>
        {/* Cover Photo */}
        <div className="w-full aspect-video bg-surface-secondary border border-border/70 mb-5 overflow-hidden rounded-[16px] relative group-hover:border-border-hover transition-colors">
          {coverImage && !imgError ? (
            <img
              src={coverImage}
              alt={event.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-text-secondary/50 p-4">
              <span className="material-symbols-outlined text-3xl mb-1 text-text-secondary/40">photo_library</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary/60">Media Archive Pending</span>
            </div>
          )}
          {status && (
            <span
              className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                status === 'Ongoing'
                  ? 'bg-amber-500/90 text-white'
                  : 'bg-surface/90 text-text-secondary border border-border'
              }`}
            >
              {status}
            </span>
          )}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-4 text-xs">
          <span className="px-3.5 py-1 bg-accent-subtle text-accent font-bold rounded-full uppercase">
            {event.category}
          </span>
          <span className="text-text-secondary font-semibold font-mono">{event.date}</span>
        </div>

        <h3 className="font-sans text-base font-bold text-text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
          {event.title}
        </h3>

        {event.subtitle && (
          <p className="text-xs text-accent font-semibold font-mono uppercase tracking-wide mb-3">
            {event.subtitle}
          </p>
        )}

        <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
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
          <span className="line-clamp-1">{displayVenue}</span>
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
