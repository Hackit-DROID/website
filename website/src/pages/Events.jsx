import { useState } from 'react';
import { Calendar, MapPin, Award, Clock } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import SectionEntrance from '../components/SectionEntrance';
import CliFilterFlags from '../components/CliFilterFlags';
import CliSearchBar from '../components/CliSearchBar';
import { eventsData } from '../data/eventsData';

export function Events({ onOpenEvent }) {
  const [selectedTab, setSelectedTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const filterOptions = [
    { value: 'All', flag: '--all' },
    { value: 'CTF', flag: '--type=ctf' },
    { value: 'Workshops', flag: '--type=workshops' },
    { value: 'Past', flag: '--archive' }
  ];

  const filteredEvents = eventsData.filter((evt) => {
    if (selectedTab === 'CTF' && evt.type !== 'CTF') return false;
    if (selectedTab === 'Workshops' && evt.type !== 'Workshops') return false;
    if (selectedTab === 'Past' && evt.status !== 'Past') return false;
    if (selectedTab !== 'Past' && evt.status === 'Past' && selectedTab !== 'All') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        evt.title.toLowerCase().includes(q) ||
        evt.description.toLowerCase().includes(q) ||
        evt.location.toLowerCase().includes(q) ||
        evt.organizer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getFlagName = (tab) => {
    const opt = filterOptions.find(o => o.value === tab);
    return opt ? opt.flag : '--all';
  };

  return (
    <SectionEntrance className="w-full bg-[#0a0a0a] text-[#ffffff] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-mono text-[#4ade80]">
            <Calendar className="w-3.5 h-3.5" />
            <span>HACKIT EVENT SCHEDULE & ARCHIVE</span>
          </div>
          <h1 className="display-lg text-[#ffffff]">
            Events & Competitions
          </h1>
          <p className="text-base text-[#cccccc] leading-relaxed">
            Join 24-hour Jeopardy CTFs, live kernel memory heap grooming sessions in Lab 402, and attack-defense watchparties during DEFCON Quals. All sessions are open to registered members and Discord community operators.
          </p>
        </div>

        {/* Unified CLI Filter & Search Query Container */}
        <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-4 font-mono text-xs space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Reusable CLI Filter Flags */}
            <CliFilterFlags 
              options={filterOptions} 
              activeValue={selectedTab} 
              onChange={setSelectedTab} 
              label="FILTER_FLAG:" 
            />

            {/* Reusable CLI Search Bar */}
            <CliSearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
              placeholder='grep -i "kernel"'
              onClear={() => setSearchQuery('')}
            />

          </div>

          {/* Active Query Output Status */}
          <div className="pt-2 border-t border-[#2a2a2a]/60 text-[11px] text-[#5a5a5a] flex items-center justify-between">
            <span>QUERY_PIPELINE: <strong className="text-[#cccccc]">hackit events list {getFlagName(selectedTab)} {searchQuery ? `--search="${searchQuery}"` : ''}</strong></span>
            <span>MATCHES: <strong className="text-[#4ade80]">{filteredEvents.length}</strong></span>
          </div>

        </div>

        {/* Filtered Content Grid with Fast (~180ms) Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab + searchQuery}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }}
          >
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-6 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30 text-xs font-mono font-semibold">
                          {event.type}
                        </span>
                        
                        <span className="text-[11px] font-mono text-[#888888] bg-[#121212] px-2 py-0.5 rounded border border-[#2a2a2a]">
                          {event.capacityInfo}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#ffffff] group-hover:text-[#4ade80] transition-colors leading-tight">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-xs text-[#cccccc] font-mono bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#4ade80]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#4ade80]" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-[#4ade80]" />
                          <span>{event.prizes}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#cccccc] leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#2a2a2a] flex flex-col space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#888888]">
                        <span>Host: {event.organizer}</span>
                        <span className="text-[#4ade80] font-semibold">{event.difficulty}</span>
                      </div>
                      
                      <Button
                        variant={event.registrationOpen ? "primary" : "secondary"}
                        size="sm"
                        onClick={() => onOpenEvent(event)}
                        className="w-full text-xs font-mono"
                      >
                        {event.ctaLabel}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-[#121212] border border-[#2a2a2a] rounded-xl space-y-3 font-mono">
                <p className="text-base text-[#cccccc]">No matching events found for query pipeline.</p>
                <Button variant="secondary" size="sm" onClick={() => { setSelectedTab('All'); setSearchQuery(''); }}>
                  $ hackit events reset
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </SectionEntrance>
  );
}

export default Events;
