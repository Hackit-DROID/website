import { AnimatedCard } from './AnimatedSection';
import MemberCard from './MemberCard';

export function TeamGrid({ members }) {
  if (!members || members.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {members.map((member, index) => (
        <AnimatedCard key={member.id || index} index={index}>
          <MemberCard member={member} />
        </AnimatedCard>
      ))}
    </div>
  );
}

export default TeamGrid;
