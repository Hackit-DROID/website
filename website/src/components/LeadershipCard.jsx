import { useState } from 'react';

export function LeadershipCard({ member }) {
  const [imgError, setImgError] = useState(false);
  if (!member) return null;

  const initials = member.name && !member.name.startsWith('[')
    ? member.name.split(' ').map(n => n[0]).join('').slice(0, 2)
    : 'LD';

  return (
    <div className="bg-surface border border-border p-5 rounded-[24px] h-full flex flex-col justify-between card-hover group shadow-soft hover:border-border-hover transition-all duration-300">
      <div>
        {/* Photo / Initials */}
        <div className="w-full aspect-square bg-surface-secondary border border-border mb-4 flex items-center justify-center overflow-hidden text-accent font-sans text-3xl font-bold rounded-[20px]">
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Role */}
        <span className="inline-block px-3 py-1 bg-accent-subtle text-accent text-xs font-bold rounded-full mb-3">
          {member.role}
        </span>

        {/* Name & Domain */}
        <h3 className="font-sans text-base font-bold text-text-primary group-hover:text-accent transition-colors mb-1.5 leading-snug">
          {member.name}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {member.domain}
        </p>
      </div>

      {/* Links */}
      <div className="pt-4 mt-5 border-t border-surface-secondary flex items-center gap-2.5 text-xs text-text-secondary">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-2.5 py-1 rounded-[8px]">
            LinkedIn
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-2.5 py-1 rounded-[8px]">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default LeadershipCard;
