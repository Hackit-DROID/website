export function MemberCard({ member }) {
  if (!member) return null;

  const initials = member.name && !member.name.startsWith('[')
    ? member.name.split(' ').map(n => n[0]).join('').slice(0, 2)
    : 'MB';

  return (
    <div className="bg-surface border border-border p-4 rounded-[20px] h-full flex flex-col justify-between card-hover group shadow-soft hover:border-border-hover transition-all duration-300">
      <div>
        {/* Photo / Initials */}
        <div className="w-full aspect-square bg-surface-secondary border border-border mb-3.5 flex items-center justify-center overflow-hidden text-text-secondary font-sans text-lg font-semibold group-hover:text-accent transition-colors rounded-[16px]">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Name & Role */}
        <h4 className="font-sans text-sm font-bold text-text-primary group-hover:text-accent transition-colors mb-1 leading-snug">
          {member.name}
        </h4>
        <p className="text-[11px] text-text-secondary leading-normal">
          {member.domain}
        </p>
      </div>

      {/* Links */}
      <div className="pt-3 mt-4 border-t border-surface-secondary flex items-center gap-2 text-[10px] text-text-secondary">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-2 py-1 rounded-[6px]">
            LinkedIn
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-2 py-1 rounded-[6px]">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default MemberCard;
