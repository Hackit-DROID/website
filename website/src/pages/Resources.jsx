import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';

export function Resources({ onOpenWriteup }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const resourcesData = [
    {
      id: '#001',
      tag: 'EXPLOIT',
      title: 'Buffer Overflow in Custom ARM Kernels',
      description: 'A deep dive into memory corruption vulnerabilities within ARM-based microkernels, focusing on return-oriented programming (ROP) techniques.',
      author: '@root_access'
    },
    {
      id: '#002',
      tag: 'WRITEUP',
      title: 'DEF CON 31 CTF: The Final Push',
      description: 'Documentation of the reverse engineering challenges faced during the final stages of the international competition.',
      author: '@nullbyte'
    },
    {
      id: '#003',
      tag: 'HARDWARE',
      title: 'ESP32 Marauder Custom Build',
      description: 'Schematics and firmware configuration for a portable Wi-Fi audit tool using the ESP32 chipset and custom OLED display.',
      author: '@hardware_head'
    },
    {
      id: '#004',
      tag: 'WEB',
      title: 'Advanced SQLi in Modern CMS',
      description: 'Bypassing modern WAFs and prepared statements using obscure character encoding and time-based blind injection.',
      author: '@injection_v2'
    },
    {
      id: '#005',
      tag: 'OSINT',
      title: 'Automating Metadata Extraction',
      description: 'A Python-based framework for bulk scanning image archives to extract geolocation and device-specific EXIF data.',
      author: '@seeker'
    },
    {
      id: '#006',
      tag: 'TOOLS',
      title: 'HACKIT Terminal Kit v2.4',
      description: 'Internal shell configuration, zsh aliases, and automated recon scripts for rapid deployment during engagements.',
      author: '@maintainer'
    }
  ];

  const filterOptions = ['ALL', 'WRITEUPS', 'TOOLS', 'HARDWARE', 'LINKS'];

  const filteredResources = resourcesData.filter(res => {
    if (activeFilter === 'WRITEUPS' && res.tag !== 'WRITEUP') return false;
    if (activeFilter === 'TOOLS' && res.tag !== 'TOOLS') return false;
    if (activeFilter === 'HARDWARE' && res.tag !== 'HARDWARE') return false;
    if (activeFilter === 'LINKS' && res.tag !== 'EXPLOIT' && res.tag !== 'WEB' && res.tag !== 'OSINT') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.tag.toLowerCase().includes(q) ||
        res.author.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <main className="min-h-screen grid-bg text-[#e5e2e1] pt-20">
      {/* Hero Section */}
      <AnimatedSection className="max-w-container-max mx-auto px-margin-desktop py-16 border-b border-[#e5e2e1]">
        <div className="max-w-2xl">
          <p className="font-label-caps text-label-caps text-[#72ff70] mb-4">/ARCHIVE/REPOSITORY</p>
          <h1 className="font-display-xl font-extrabold mb-6 text-white uppercase">
            CENTRAL KNOWLEDGE BASE
          </h1>
          <p className="font-body-base text-body-base text-[#c6c6c7] max-w-lg">
            Technical documentation, writeups, and exploitation guides curated by the HACKIT collective. Strictly for educational and research purposes.
          </p>
        </div>
      </AnimatedSection>

      {/* Filter / Utility Bar */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-4 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#131313]/90 backdrop-blur-sm sticky top-[65px] z-30 border-b border-[#e5e2e1]">
        <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`font-label-caps text-label-caps px-3 py-1 border transition-colors duration-150 uppercase font-bold ${
                activeFilter === opt
                  ? 'border-[#72ff70] bg-[#72ff70] text-[#003907]'
                  : 'border-[#e5e2e1] text-[#e5e2e1] hover:border-[#72ff70]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full md:w-64 border border-[#e5e2e1] px-3 py-1">
          <span className="material-symbols-outlined text-[#c6c6c7]" style={{ fontSize: '18px' }}>
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="QUERY_RESOURCES..."
            className="bg-transparent border-none focus:ring-0 font-code-sm text-code-sm text-[#e5e2e1] w-full placeholder:text-[#b9ccb2] outline-none"
          />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchQuery}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#e5e2e1]"
          >
            {filteredResources.map((item, index) => (
              <AnimatedCard key={item.id} index={index}>
                <article
                  onClick={() => onOpenWriteup ? onOpenWriteup(item) : null}
                  className="border-r border-b border-[#e5e2e1] p-6 card-subtle-hover bg-[#131313] cursor-pointer flex flex-col justify-between min-h-[320px] group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-label-caps text-label-caps text-[#b9ccb2]">{item.id}</span>
                      <span className="font-label-caps text-label-caps border border-[#b9ccb2] px-2 py-0.5 text-xs text-white">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-3 group-hover:text-[#72ff70] transition-colors duration-150 font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="font-body-base text-body-base text-[#c6c6c7] mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-[#e5e2e1]/20">
                    <span className="font-label-caps text-label-caps text-[#b9ccb2] uppercase">
                      By {item.author}
                    </span>
                    <span className="material-symbols-outlined text-[#72ff70]">
                      arrow_forward
                    </span>
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Technical Specs / Footer Callout */}
      <AnimatedSection className="max-w-container-max mx-auto px-margin-desktop py-12 mb-20">
        <div className="bg-[#1A1A1A] border border-[#e5e2e1] p-4">
          <div className="flex items-center justify-between border-b border-[#e5e2e1] pb-2 mb-4">
            <span className="font-code-sm text-code-sm text-white font-bold">system_status.log</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#b9ccb2]"></div>
              <div className="w-3 h-3 bg-[#b9ccb2]"></div>
            </div>
          </div>
          <div className="font-code-sm text-code-sm space-y-1">
            <p className="text-[#72ff70]">[INFO] Repository successfully synced with local mirrors.</p>
            <p className="text-white">[INFO] Total Resources: 42 modules available.</p>
            <p className="text-white">[INFO] Last update: 2026-07-24 04:12:00 UTC</p>
            <p className="text-[#b9ccb2]">&gt; Want to contribute a writeup? Contact @moderator in the Discord.</p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

export default Resources;
