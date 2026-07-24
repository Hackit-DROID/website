import { Link } from 'react-router-dom';
import { Trophy, Code, Cpu, Lock, Shield, ArrowRight, ChevronRight, Activity, Terminal } from 'lucide-react';
import Button from '../components/Button';
import StatCounter from '../components/StatCounter';
import TerminalMockup from '../components/TerminalMockup';
import SectionEntrance from '../components/SectionEntrance';
import { eventsData } from '../data/eventsData';

export function Home({ onOpenJoin, onOpenEvent }) {
  const upcomingEvents = eventsData.filter(e => e.status === 'Upcoming').slice(0, 3);

  return (
    <div className="w-full bg-[#0a0a0a] text-[#ffffff] min-h-screen font-mono">
      
      {/* 1. HERO SECTION (7-5 Grid Split per design.md) */}
      <SectionEntrance className="relative pt-12 pb-24 md:py-24 border-b border-[#2a2a2a] overflow-hidden font-mono">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4ade80]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (7 cols): Editorial & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
                <span className="text-[#4ade80] font-semibold">HACKIT 2026 SEASON IS LIVE</span>
                <span className="text-[#888888]">|</span>
                <span className="text-[#cccccc]">DEFCON Quals Squad Active</span>
              </div>

              {/* Display Headline */}
              <h1 className="display-xl text-[#ffffff] tracking-tight font-mono">
                Student security research. <br />
                <span className="text-[#4ade80]">Kernel exploits to CTF podiums.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base text-[#cccccc] max-w-xl leading-relaxed font-mono">
                We're an open student collective breaking binaries, reverse engineering malware in Ghidra, and competing in DEFCON Quals, PicoCTF, and Midnight Sun. We write custom pwn payloads, audit Linux kernel 6.8 primitives, and ship open-source security tooling.
              </p>

              {/* CTA Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" onClick={onOpenJoin} className="gap-2 text-sm font-mono font-bold">
                  <span>$ hackit join</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Link to="/events">
                  <Button variant="secondary" size="lg" className="gap-2 text-sm font-mono font-bold">
                    <Trophy className="w-4 h-4 text-[#4ade80]" />
                    <span>$ hackit events</span>
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Column (5 cols): Functional Terminal Mockup */}
            <div className="lg:col-span-5 w-full font-mono">
              <TerminalMockup onOpenJoin={onOpenJoin} />
            </div>

          </div>
        </div>
      </SectionEntrance>

      {/* 2. SINGLE TERMINAL-STYLE system.status() TELEMETRY READOUT BLOCK */}
      <SectionEntrance id="telemetry-dashboard" className="py-20 bg-[#121212] border-b border-[#2a2a2a] font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 sm:p-8 font-mono shadow-2xl space-y-6">
            
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/90"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/90"></div>
                <div className="w-3 h-3 rounded-full bg-[#4ade80]/90"></div>
                <span className="text-xs text-[#4ade80] font-bold ml-2">system.status()</span>
              </div>
              <div className="text-[11px] text-[#5a5a5a] flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#4ade80] animate-pulse" />
                <span>UPDATED: 2026-07-23 [STATUS_OK]</span>
              </div>
            </div>

            {/* Telemetry Output Key-Value Grid */}
            <div className="bg-[#121212] border border-[#2a2a2a] rounded-lg p-5 space-y-4 font-mono text-xs">
              <div className="text-[#5a5a5a] text-[11px]">// Live cluster node parameters & telemetry metrics</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4 rounded space-y-2 font-mono">
                  <div className="text-[#5a5a5a] text-[10px] uppercase font-bold">sys.operators_active</div>
                  <div className="flex items-baseline justify-between">
                    <StatCounter value={779} suffix="+" delay={0} />
                    <span className="text-[10px] text-[#4ade80] font-bold">[ONLINE]</span>
                  </div>
                  <div className="text-[11px] text-[#888888] font-mono">Verified student & researcher accounts</div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4 rounded space-y-2 font-mono">
                  <div className="text-[#5a5a5a] text-[10px] uppercase font-bold">ctf.podium_finishes</div>
                  <div className="flex items-baseline justify-between">
                    <StatCounter value={47} suffix="" delay={100} />
                    <span className="text-[10px] text-[#4ade80] font-bold">[VERIFIED]</span>
                  </div>
                  <div className="text-[11px] text-[#888888] font-mono">DEFCON Quals & National CTFs</div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4 rounded space-y-2 font-mono">
                  <div className="text-[#5a5a5a] text-[10px] uppercase font-bold">labs.workshops_held</div>
                  <div className="flex items-baseline justify-between">
                    <StatCounter value={120} suffix="+" delay={200} />
                    <span className="text-[10px] text-[#4ade80] font-bold">[ACTIVE]</span>
                  </div>
                  <div className="text-[11px] text-[#888888] font-mono">Kernel Pwn, Web & Crypto workshops</div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4 rounded space-y-2 font-mono">
                  <div className="text-[#5a5a5a] text-[10px] uppercase font-bold">bounties.cve_disclosed</div>
                  <div className="flex items-baseline justify-between">
                    <StatCounter value={50} prefix="$" suffix="k+" delay={300} />
                    <span className="text-[10px] text-[#4ade80] font-bold">[LOGGED]</span>
                  </div>
                  <div className="text-[11px] text-[#888888] font-mono">Ethical disclosures to CVE databases</div>
                </div>

              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-[#5a5a5a] font-mono">
              <span>$ cat /proc/hackit_status // 0 system faults</span>
              <span className="text-[#4ade80]">HEALTH: 100% OPERATIONAL</span>
            </div>

          </div>

        </div>
      </SectionEntrance>

      {/* 3. FEATURE CARDS SECTION (What HackIT Does) */}
      <SectionEntrance id="research-pods" className="py-24 bg-[#0a0a0a] border-b border-[#2a2a2a] font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-widest font-mono">
              // RESEARCH & COMPETITION PODS
            </span>
            <h2 className="display-lg text-[#ffffff] font-mono">
              Built for every modern security discipline.
            </h2>
            <p className="text-base text-[#cccccc] font-mono">
              From low-level binary exploitation to cloud infrastructure auditing, HackIT operates specialized pods led by veteran CTF players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            
            {/* Full-bleed Green Feature Card */}
            <div className="lg:col-span-2 bg-[#4ade80] text-[#0a0a0a] rounded-xl p-8 space-y-6 flex flex-col justify-between card-hover">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0a0a0a] text-[#4ade80] flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#0a0a0a]/10 text-[#0a0a0a] text-xs font-mono font-bold uppercase tracking-wider">
                  FLAGSHIP PROGRAM
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0a0a] font-mono">
                  Competitive CTF Squad & Global Tournaments
                </h3>
                <p className="text-sm md:text-base text-[#0a0a0a]/90 leading-relaxed max-w-xl font-mono">
                  We field teams for DEFCON, PicoCTF, Midnight Sun, and Google CTF. Members receive dedicated GPU server compute, reverse engineering tool licenses, and joint attack-defense training.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#0a0a0a]/15 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider">
                  14 Podium Finishes in 2025/2026
                </span>
                <Button 
                  variant="secondary" 
                  onClick={onOpenJoin}
                  className="bg-[#0a0a0a] text-[#ffffff] hover:bg-[#1a1a1a] text-xs font-mono font-bold"
                >
                  $ hackit ctf join
                </Button>
              </div>
            </div>

            {/* Dark Feature Card 1: Binary Exploitation */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-8 space-y-4 flex flex-col justify-between group font-mono">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#2a2a2a] text-[#4ade80] flex items-center justify-center group-hover:border-[#4ade80] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#ffffff] font-mono">
                  Binary Exploitation & Pwn
                </h3>
                <p className="text-xs text-[#cccccc] leading-relaxed font-mono">
                  Master ROP chains, heap exploitation, kernel UAF primitives, and ARM shellcoding using GDB, GEF, and custom Python exploits.
                </p>
              </div>
              <div className="text-xs font-mono text-[#888888] pt-4 border-t border-[#2a2a2a]">
                TRACK: PWN & KERNEL
              </div>
            </div>

            {/* Dark Feature Card 2: Web & Cloud Security */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-8 space-y-4 flex flex-col justify-between group font-mono">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#2a2a2a] text-[#4ade80] flex items-center justify-center group-hover:border-[#4ade80] transition-colors">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#ffffff] font-mono">
                  Web & Cloud Auditing
                </h3>
                <p className="text-xs text-[#cccccc] leading-relaxed font-mono">
                  Analyze complex web architectures, OAuth 2.0 implementation flaws, SSRF, GraphQL introspection bypasses, and AWS IAM privilege escalation.
                </p>
              </div>
              <div className="text-xs font-mono text-[#888888] pt-4 border-t border-[#2a2a2a]">
                TRACK: WEB & CLOUD
              </div>
            </div>

            {/* Dark Feature Card 3: Reverse Engineering */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-8 space-y-4 flex flex-col justify-between group font-mono">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#2a2a2a] text-[#4ade80] flex items-center justify-center group-hover:border-[#4ade80] transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#ffffff] font-mono">
                  Reverse Engineering
                </h3>
                <p className="text-xs text-[#cccccc] leading-relaxed font-mono">
                  Deobfuscate malware samples, unpack custom binary protectors, and script Ghidra & Binary Ninja headless analysis plugins.
                </p>
              </div>
              <div className="text-xs font-mono text-[#888888] pt-4 border-t border-[#2a2a2a]">
                TRACK: RE & MALWARE
              </div>
            </div>

            {/* Dark Feature Card 4: Cryptography & Math */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-8 space-y-4 flex flex-col justify-between group font-mono">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#121212] border border-[#2a2a2a] text-[#4ade80] flex items-center justify-center group-hover:border-[#4ade80] transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#ffffff] font-mono">
                  Applied Cryptography
                </h3>
                <p className="text-xs text-[#cccccc] leading-relaxed font-mono">
                  Solve lattice reduction attacks (LLL), ECC discrete logarithms, RSA Coppersmith's theorem, and post-quantum algorithm audits.
                </p>
              </div>
              <div className="text-xs font-mono text-[#888888] pt-4 border-t border-[#2a2a2a]">
                TRACK: CRYPTO & MATH
              </div>
            </div>

          </div>

        </div>
      </SectionEntrance>

      {/* 4. UPCOMING EVENTS SPOTLIGHT */}
      <SectionEntrance id="upcoming-events" className="py-24 bg-[#121212] border-b border-[#2a2a2a] font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#4ade80] uppercase tracking-widest font-mono">
                // UPCOMING SCHEDULE
              </span>
              <h2 className="display-lg text-[#ffffff] font-mono">
                Hands-on Workshops & Competitions
              </h2>
            </div>
            <Link to="/events">
              <Button variant="secondary" className="gap-2 font-mono text-xs">
                <span>$ hackit events --all</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {upcomingEvents.map((evt) => (
              <div 
                key={evt.id}
                className="bg-[#1a1a1a] border border-[#2a2a2a] card-hover rounded-xl p-6 flex flex-col justify-between space-y-6 font-mono"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30 text-xs font-semibold">
                      {evt.type}
                    </span>
                    <span className="text-xs text-[#888888]">{evt.capacityInfo}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#ffffff] leading-tight font-mono">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-[#cccccc] line-clamp-3 leading-relaxed font-mono">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a2a2a] space-y-3 font-mono">
                  <div className="text-xs text-[#888888] flex items-center justify-between">
                    <span>{evt.date}</span>
                    <span className="text-[#4ade80]">{evt.prizes}</span>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={() => onOpenEvent(evt)} 
                    className="w-full text-xs font-mono font-bold"
                  >
                    {evt.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </SectionEntrance>

      {/* 5. TERMINAL PROMPT REVEAL CTA SECTION */}
      <SectionEntrance className="py-20 bg-[#0a0a0a] font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 md:p-12 font-mono shadow-2xl space-y-6 card-hover">
            
            <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#4ade80]/80"></div>
                <span className="text-xs text-[#888888] ml-2">hackit://membership-challenge</span>
              </div>
              <span className="text-xs text-[#4ade80] font-bold">[INTERACTIVE PROMPT]</span>
            </div>

            <div className="space-y-3 font-mono">
              <div className="text-[#4ade80] text-sm font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4ade80]" />
                <span>$ hackit join --track=redteam</span>
              </div>
              <p className="text-xs md:text-sm text-[#cccccc] font-mono leading-relaxed max-w-2xl">
                Whether you're breaking your first buffer overflow or auditing Linux kernel primitives, drop by our Thursday night lab sessions or jump into our Discord server to start auditing binaries, writing exploit payloads, and solving CTF challenges with us.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={onOpenJoin}
                className="font-mono text-sm font-bold gap-2"
              >
                <span>$ execute membership_app</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Link to="/resources">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-mono text-sm font-bold"
                >
                  $ cat /docs/writeups
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </SectionEntrance>

    </div>
  );
}

export default Home;
