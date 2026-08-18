import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import FacultyCard from '../components/FacultyCard';
import LeadershipCard from '../components/LeadershipCard';
import MemberCard from '../components/MemberCard';
import { faculty, leadership, coreCommittee } from '../data/teamData';

export function Team() {
  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
      {/* Faculty */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 pb-16">
        <AnimatedSection className="mb-10 text-center sm:text-left">
          <span className="inline-block px-3.5 py-1 bg-accent-subtle text-accent text-xs font-bold tracking-wide rounded-full mb-3">
            Academic Advisory
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-text-primary tracking-tight mb-2 uppercase">
            Faculty Mentorship
          </h1>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Guided by faculty to align our technical sessions with industry benchmarks and academic goals.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <FacultyCard faculty={faculty} />
        </AnimatedSection>
      </section>

      {/* Spacing wrapper instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Leadership */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <AnimatedSection className="mb-12">
            <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Leadership</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
              Student Leaders
            </h2>
            <p className="text-sm text-text-secondary">
              Students responsible for session coordination, project management, and community operations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leadership.map((member, index) => (
              <AnimatedCard key={member.name} index={index}>
                <LeadershipCard member={member} />
              </AnimatedCard>
            ))}
          </div>
        </section>
      </div>

      {/* Core Members */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24">
        <AnimatedSection className="mb-12">
          <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Core team</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
            Technical &amp; Operations Team
          </h2>
          <p className="text-sm text-text-secondary">
            HackIT core members managing workshops, infrastructure, and event planning.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {coreCommittee.map((member, index) => (
            <AnimatedCard key={member.name} index={index}>
              <MemberCard member={member} />
            </AnimatedCard>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Team;
