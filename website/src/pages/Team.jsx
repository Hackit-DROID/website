import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import FacultyCard from '../components/FacultyCard';
import ExpandableMemberCard from '../components/ExpandableMemberCard';
import { faculty, officers, leads, coreCommittee } from '../data/teamData';

export function Team() {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedMemberId(prevId => prevId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-background text-text-primary pt-24 pb-20 font-sans antialiased">
      {/* Faculty */}
      {faculty && (
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
      )}

      {/* Spacing wrapper instead of line divider */}
      <div className="bg-surface-secondary/40 border-y border-border/50">
        {/* Officers */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-20 pb-12">
          <AnimatedSection className="mb-12">
            <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Executive Officers</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
              Club Officers
            </h2>
            <p className="text-sm text-text-secondary">
              Responsible for administrative governance, departmental coordination, financial planning, and operational strategy.
            </p>
          </AnimatedSection>

          <LayoutGroup id="officers-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
              {officers.map((member, index) => (
                <AnimatedCard 
                  key={member.id} 
                  index={index}
                  layout={true}
                  className={`no-layout-transition h-fit
                    ${selectedMemberId === member.id 
                      ? 'col-span-1 sm:col-span-2 lg:col-span-3' 
                      : 'col-span-1'
                    }`}
                >
                  <ExpandableMemberCard 
                    member={member} 
                    isSelected={selectedMemberId === member.id}
                    onClick={() => handleCardClick(member.id)}
                    isLeadership={true}
                  />
                </AnimatedCard>
              ))}
            </div>
          </LayoutGroup>
        </section>

        {/* Leads */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-20 border-t border-border/40">
          <AnimatedSection className="mb-12">
            <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Technical &amp; Public Relations</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
              Domain Leads
            </h2>
            <p className="text-sm text-text-secondary">
              Leading curriculum development, cybersecurity workshops, public outreach, and community engagement.
            </p>
          </AnimatedSection>

          <LayoutGroup id="leads-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
              {leads.map((member, index) => (
                <AnimatedCard 
                  key={member.id} 
                  index={index}
                  layout={true}
                  className={`no-layout-transition h-fit
                    ${selectedMemberId === member.id 
                      ? 'col-span-1 sm:col-span-2 lg:col-span-3' 
                      : 'col-span-1'
                    }`}
                >
                  <ExpandableMemberCard 
                    member={member} 
                    isSelected={selectedMemberId === member.id}
                    onClick={() => handleCardClick(member.id)}
                    isLeadership={true}
                  />
                </AnimatedCard>
              ))}
            </div>
          </LayoutGroup>
        </section>
      </div>

      {/* Core Members & Co-Leads */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24">
        <AnimatedSection className="mb-12">
          <span className="font-sans text-xs text-accent uppercase tracking-wider font-bold block mb-2">Core team</span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight mb-2">
            Co-Leads &amp; Team Members
          </h2>
          <p className="text-sm text-text-secondary">
            Supporting lead officers in lab coordination, resource management, and peer-to-peer mentorship.
          </p>
        </AnimatedSection>

        <LayoutGroup id="core-grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
            {coreCommittee.map((member, index) => (
              <AnimatedCard 
                key={member.id} 
                index={index}
                layout={true}
                className={`no-layout-transition h-fit
                  ${selectedMemberId === member.id 
                    ? 'col-span-1 sm:col-span-2 lg:col-span-3' 
                    : 'col-span-1'
                  }`}
              >
                <ExpandableMemberCard 
                  member={member} 
                  isSelected={selectedMemberId === member.id}
                  onClick={() => handleCardClick(member.id)}
                  isLeadership={false}
                />
              </AnimatedCard>
            ))}
          </div>
        </LayoutGroup>
      </section>
    </main>
  );
}

export default Team;
