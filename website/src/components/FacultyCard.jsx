export function FacultyCard({ faculty }) {
  if (!faculty) return null;

  const initials = faculty.name && !faculty.name.startsWith('[')
    ? faculty.name.split(' ').map(n => n[0]).join('').slice(0, 2)
    : 'FC';

  return (
    <div className="bg-surface border border-border p-6 sm:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 rounded-[24px] shadow-soft hover:border-border-hover transition-all duration-200">
      {/* Photo / Initials */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-surface-secondary border border-border flex items-center justify-center shrink-0 overflow-hidden text-accent font-sans text-2xl font-bold rounded-[20px]">
        {faculty.image ? (
          <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
        <span className="inline-block px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold rounded-full mb-3">
          Faculty Advisor
        </span>
        <h3 className="font-sans text-lg sm:text-xl font-bold text-text-primary mb-1.5">
          {faculty.name || "Faculty Advisor (TBD)"}
        </h3>
        <p className="text-sm text-text-secondary mb-4 leading-relaxed">
          {faculty.domain || "SGGSIE&T Advisory"}
        </p>

        <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-text-secondary">
          {faculty.linkedin && (
            <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-3 py-1.5 rounded-[10px]">
              LinkedIn
            </a>
          )}
          {faculty.github && (
            <a href={faculty.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition-colors bg-surface-secondary px-3 py-1.5 rounded-[10px]">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FacultyCard;
