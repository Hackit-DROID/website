import { useState } from 'react';
import { BookOpen, Star, ExternalLink, FileCode } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import SectionEntrance from '../components/SectionEntrance';
import CliFilterFlags from '../components/CliFilterFlags';
import CliSearchBar from '../components/CliSearchBar';
import { resourcesData } from '../data/resourcesData';

export function Resources({ onOpenWriteup }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const filterOptions = [
    { value: 'All', flag: '--all' },
    { value: 'Writeups', flag: '--type=writeups' },
    { value: 'Cheatsheets', flag: '--type=cheatsheets' },
    { value: 'Tools', flag: '--type=tools' }
  ];

  const filteredResources = resourcesData.filter((res) => {
    if (selectedCategory !== 'All' && res.category !== selectedCategory) return false;
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

  const copySnippet = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getFlagName = (cat) => {
    const opt = filterOptions.find(o => o.value === cat);
    return opt ? opt.flag : '--all';
  };

  return (
    <SectionEntrance className="w-full bg-[#0a0a0a] text-[#ffffff] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-mono text-[#4ade80]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>HACKIT KNOWLEDGE BASE & CODE EXCERPTS</span>
          </div>
          <h1 className="display-lg text-[#ffffff]">
            Writeups, Tools & Cheatsheets
          </h1>
          <p className="text-base text-[#cccccc] leading-relaxed">
            Explore CTF solution walkthroughs, automated exploitation scripts, and hands-on cheatsheets written by HackIT members.
          </p>
        </div>

        {/* Unified CLI Filter & Search Query Container */}
        <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-4 font-mono text-xs space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Reusable CLI Filter Flags */}
            <CliFilterFlags 
              options={filterOptions} 
              activeValue={selectedCategory} 
              onChange={setSelectedCategory} 
              label="FILTER_FLAG:" 
            />

            {/* Reusable CLI Search Bar */}
            <CliSearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
              placeholder='grep -i "ghidra"'
              onClear={() => setSearchQuery('')}
            />

          </div>

          {/* Active Query Output Status */}
          <div className="pt-2 border-t border-[#2a2a2a]/60 text-[11px] text-[#5a5a5a] flex items-center justify-between">
            <span>QUERY_PIPELINE: <strong className="text-[#cccccc]">hackit docs list {getFlagName(selectedCategory)} {searchQuery ? `--search="${searchQuery}"` : ''}</strong></span>
            <span>MATCHES: <strong className="text-[#4ade80]">{filteredResources.length}</strong></span>
          </div>

        </div>

        {/* Resource Cards List with Fast (~180ms) Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }}
          >
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((res) => (
                  <div
                    key={res.id}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-6 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30 font-semibold">
                            {res.category}
                          </span>
                          <span className="text-[#888888]">• {res.tag}</span>
                        </div>
                        <span className="flex items-center gap-1 text-[#4ade80]">
                          <Star className="w-3.5 h-3.5 fill-[#4ade80]" />
                          {res.stars}
                        </span>
                      </div>

                      <div>
                        <h3 
                          onClick={() => onOpenWriteup(res)}
                          className="text-xl font-bold text-[#ffffff] group-hover:text-[#4ade80] transition-colors cursor-pointer leading-tight"
                        >
                          {res.title}
                        </h3>
                        <p className="text-xs text-[#888888] font-mono mt-1">
                          By {res.author} • {res.date} • {res.readTime}
                        </p>
                      </div>

                      <p className="text-xs text-[#cccccc] leading-relaxed">
                        {res.description}
                      </p>

                      {res.codeSnippet && (
                        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-3 font-mono text-[11px] relative overflow-hidden">
                          <div className="flex items-center justify-between text-[#888888] mb-1.5 text-[10px] uppercase">
                            <span className="flex items-center gap-1">
                              <FileCode className="w-3 h-3 text-[#4ade80]" />
                              Snippet Preview
                            </span>
                            <button
                              onClick={() => copySnippet(res.id, res.codeSnippet)}
                              className="hover:text-[#4ade80] transition-colors"
                            >
                              {copiedId === res.id ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          <pre className="text-[#4ade80] overflow-x-auto whitespace-pre leading-relaxed font-mono">
                            <code>{res.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                    </div>

                    <div className="pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
                      <a
                        href={res.externalLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[#888888] hover:text-[#ffffff] flex items-center gap-1 font-mono transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#4ade80]" />
                        GitHub Repo
                      </a>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onOpenWriteup(res)}
                        className="text-xs font-mono"
                      >
                        Read Full Article
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-[#121212] border border-[#2a2a2a] rounded-xl space-y-3 font-mono">
                <p className="text-base text-[#cccccc]">No resources found matching query pipeline.</p>
                <Button variant="secondary" size="sm" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
                  $ hackit docs reset
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </SectionEntrance>
  );
}

export default Resources;
