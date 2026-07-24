import { useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import SectionEntrance from '../components/SectionEntrance';
import CliFilterFlags from '../components/CliFilterFlags';
import { teamMembers, advisoryBoard } from '../data/teamData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../components/SocialIcons';

export function Team({ onOpenJoin }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filterOptions = [
    { value: 'All', flag: '--all' },
    { value: 'Core Team', flag: '--core-team' },
    { value: 'Leads', flag: '--leads' }
  ];

  const filteredMembers = teamMembers.filter((m) => {
    if (selectedCategory === 'All') return true;
    return m.category === selectedCategory;
  });

  return (
    <SectionEntrance className="w-full bg-[#0a0a0a] text-[#ffffff] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-mono text-[#4ade80]">
            <Users className="w-3.5 h-3.5" />
            <span>HACKIT LEADERSHIP & RESEARCHERS</span>
          </div>
          <h1 className="display-lg text-[#ffffff]">
            The HackIT Team
          </h1>
          <p className="text-base text-[#cccccc] leading-relaxed">
            Meet the reverse engineers, pwners, and math researchers maintaining HackIT's open-source tooling, memory forensic labs, and weekly track sessions.
          </p>
        </div>

        {/* Unified CLI Flag Filter Bar */}
        <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-4 font-mono text-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CliFilterFlags 
              options={filterOptions} 
              activeValue={selectedCategory} 
              onChange={setSelectedCategory} 
              label="FILTER_FLAG:" 
            />

            <span className="text-[11px] text-[#5a5a5a]">
              MEMBERS_FILTERED: <strong className="text-[#4ade80]">{filteredMembers.length}</strong>
            </span>
          </div>
        </div>

        {/* Team Grid with Fast (~180ms) Filter Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-6 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Photo & Header info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#2a2a2a] group-hover:border-[#4ade80] transition-colors"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#ffffff] group-hover:text-[#4ade80] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-[#4ade80] font-semibold">
                        {member.role}
                      </p>
                      <span className="text-[11px] text-[#888888] font-mono block">
                        {member.track}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#cccccc] leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#121212] border border-[#2a2a2a] text-[10px] font-mono text-[#888888]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#5a5a5a] uppercase">
                    {member.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#888888] hover:text-[#4ade80] transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#888888] hover:text-[#4ade80] transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#888888] hover:text-[#4ade80] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Advisory Board Section */}
        <div className="pt-12 border-t border-[#2a2a2a] space-y-6">
          <h2 className="text-2xl font-bold text-[#ffffff]">
            Faculty & Industry Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisoryBoard.map((advisor, idx) => (
              <div
                key={idx}
                className="bg-[#121212] border border-[#2a2a2a] card-hover rounded-xl p-6 flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-lg font-bold text-[#ffffff]">{advisor.name}</h4>
                  <p className="text-xs text-[#4ade80] font-mono">{advisor.title}</p>
                  <p className="text-xs text-[#888888] mt-1">{advisor.affiliation}</p>
                </div>
                <span className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#cccccc] text-xs font-mono rounded-full">
                  {advisor.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead recruitment callout */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#ffffff]">
              Interested in leading a research pod or hosting a workshop?
            </h3>
            <p className="text-sm text-[#cccccc]">
              HackIT is always looking for passionate members to run weekly sessions, design CTF challenges, or write technical articles.
            </p>
          </div>
          <Button variant="primary" onClick={onOpenJoin} className="shrink-0 gap-2 font-mono text-xs">
            <span>Apply as Track Lead</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </SectionEntrance>
  );
}

export default Team;
