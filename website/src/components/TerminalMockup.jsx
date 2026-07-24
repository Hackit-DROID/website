import { useState, useEffect, useRef } from 'react';
import { Copy, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fullCommandOutput = `[✓] Club Status: ACTIVE & COMPETING
[✓] Target: DEFCON Quals 2026
[✓] Weekly Lab: Thursdays 18:00 UTC
[!] Active CTF Podium Streak: 14 Consecutive Events`;

export function TerminalMockup({ onOpenJoin }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live');
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTypingQuick, setIsTypingQuick] = useState(false);

  const checkReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const checkHasBooted = () => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem('hackit_hero_booted') === 'true';
    } catch {
      return false;
    }
  };

  const isReducedMotion = checkReducedMotion();
  const alreadyBooted = checkHasBooted();
  const shouldSkipBoot = isReducedMotion || alreadyBooted;

  const [commandTyped, setCommandTyped] = useState(shouldSkipBoot ? 'hackit status' : '');
  const [typedOutput, setTypedOutput] = useState(shouldSkipBoot ? fullCommandOutput : '');
  const [isTyping, setIsTyping] = useState(!shouldSkipBoot);
  const [isExecuting, setIsExecuting] = useState(false);

  const [history, setHistory] = useState(
    shouldSkipBoot
      ? [
          { type: 'system', text: 'HackIT Cyber Security Collective OS v4.2 [x86_64-linux]' },
          { type: 'system', text: 'Type "help" or click interactive CLI actions below.' }
        ]
      : []
  );

  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, typedOutput, commandTyped, activeTab, isExecuting, inputVal]);

  // Boot animation sequence (initial page load only, strictly under ~1.8s)
  useEffect(() => {
    if (shouldSkipBoot) return;

    try {
      sessionStorage.setItem('hackit_hero_booted', 'true');
    } catch {}

    const headerText = 'HackIT Cyber Security Collective OS v4.2 [x86_64-linux]';
    const targetCmd = 'hackit status';
    const outputLines = fullCommandOutput.split('\n');

    let isMounted = true;
    let headerIdx = 0;

    // Step 1: Type system header line
    const headerInterval = setInterval(() => {
      if (!isMounted) return;
      headerIdx += 3;
      if (headerIdx >= headerText.length) {
        clearInterval(headerInterval);
        setHistory([
          { type: 'system', text: headerText },
          { type: 'system', text: 'Type "help" or click interactive CLI actions below.' }
        ]);

        // Step 2: Type command ($ hackit status) (~28ms/char)
        let cmdIdx = 0;
        const cmdInterval = setInterval(() => {
          if (!isMounted) return;
          if (cmdIdx <= targetCmd.length) {
            setCommandTyped(targetCmd.slice(0, cmdIdx));
            cmdIdx++;
          } else {
            clearInterval(cmdInterval);
            setCommandTyped(targetCmd);

            // Step 3: Status lines sequence (~110ms per line)
            let lineIdx = 0;
            const lineInterval = setInterval(() => {
              if (!isMounted) return;
              lineIdx++;
              setTypedOutput(outputLines.slice(0, lineIdx).join('\n'));
              if (lineIdx >= outputLines.length) {
                clearInterval(lineInterval);
                setIsTyping(false);
              }
            }, 110);
          }
        }, 28);
      }
    }, 15);

    return () => {
      isMounted = false;
      clearInterval(headerInterval);
    };
  }, [shouldSkipBoot]);

  const executeCommandAction = (rawCmd) => {
    const lower = rawCmd.toLowerCase();
    let responseText = '';

    if (lower === 'help') {
      responseText = `Available Commands:
  help      - Display command list
  status    - View system.status() telemetry readout
  tracks    - Jump to Research & Pods
  events    - Navigate to CTF Calendar
  join      - Trigger membership application flow
  clear     - Clear terminal buffer`;
    } else if (lower === 'status' || lower === 'hackit status') {
      responseText = `[✓] Executing system.status()... Revealing live telemetry readout panel.`;
      const el = document.getElementById('telemetry-dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'tracks') {
      responseText = `[✓] Executing tracks query... Scrolling to Research Pods.`;
      const el = document.getElementById('research-pods');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (lower === 'events') {
      responseText = `[✓] Executing events pipeline... Opening HackIT Events Calendar.`;
      const el = document.getElementById('upcoming-events');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/events');
      }
    } else if (lower === 'join' || lower === 'hackit join') {
      responseText = `[!] Executing membership challenge sequence... Opening modal.`;
      if (onOpenJoin) onOpenJoin();
    } else if (lower === 'clear') {
      setHistory([]);
      setCommandTyped('');
      setTypedOutput('');
      setInputVal('');
      return;
    } else {
      responseText = `command not found: ${rawCmd}. Type "help" for valid options.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: rawCmd },
      { type: 'output', text: responseText }
    ]);
  };

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || inputVal).trim();
    if (!rawCmd || isExecuting || isTypingQuick) return;

    setIsExecuting(true);

    setTimeout(() => {
      executeCommandAction(rawCmd);
      setIsExecuting(false);
      setInputVal('');
    }, 180);
  };

  // QUICK RUN button clicks: type command into input line (~30ms/char) before executing
  const handleQuickRun = (cmd) => {
    if (isExecuting || isTypingQuick) return;

    const prefersReducedMotion = checkReducedMotion();
    if (prefersReducedMotion) {
      executeCommandAction(cmd);
      setInputVal('');
      return;
    }

    setIsTypingQuick(true);
    setInputVal('');
    let charIdx = 0;

    const typeTimer = setInterval(() => {
      charIdx++;
      setInputVal(cmd.slice(0, charIdx));
      if (charIdx >= cmd.length) {
        clearInterval(typeTimer);
        setTimeout(() => {
          executeCommandAction(cmd);
          setIsTypingQuick(false);
          setInputVal('');
        }, 100);
      }
    }, 30);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const copyTerminalContent = () => {
    let textToCopy = history.map(item => item.type === 'command' ? `$ ${item.text}` : item.text).join('\n');
    if (commandTyped) {
      textToCopy += `\n$ ${commandTyped}\n${typedOutput}`;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden font-mono text-xs text-[#ffffff] card-hover">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-[#2a2a2a] select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]/90 inline-block"></div>
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]/90 inline-block"></div>
          <div className="w-3 h-3 rounded-full bg-[#4ade80]/90 inline-block"></div>
          <span className="ml-2 text-xs text-[#888888] font-mono hidden sm:inline-block">
            root@hackit-hq:~#
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-[#0a0a0a] p-1 rounded-md border border-[#2a2a2a]">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
              activeTab === 'live' ? 'bg-[#1a1a1a] text-[#4ade80] font-semibold' : 'text-[#888888] hover:text-[#ffffff]'
            }`}
          >
            shell.sh
          </button>
          <button
            onClick={() => setActiveTab('manifest')}
            className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
              activeTab === 'manifest' ? 'bg-[#1a1a1a] text-[#4ade80] font-semibold' : 'text-[#888888] hover:text-[#ffffff]'
            }`}
          >
            manifest.json
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={copyTerminalContent}
            className="p-1.5 text-[#888888] hover:text-[#4ade80] hover:bg-[#242424] rounded transition-colors"
            title="Copy terminal buffer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#4ade80]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="p-5 bg-[#1a1a1a] min-h-[300px] max-h-[360px] overflow-y-auto space-y-3 font-mono">
        {activeTab === 'live' && (
          <>
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.type === 'system' && (
                  <div className="text-[#5a5a5a] text-[11px]">// {item.text}</div>
                )}
                {item.type === 'command' && (
                  <div className="flex items-center text-[#4ade80] gap-1.5 font-semibold">
                    <span className="text-[#888888]">$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="text-[#cccccc] bg-[#0a0a0a]/50 p-2.5 rounded border border-[#2a2a2a]/40 text-xs leading-relaxed whitespace-pre-wrap font-mono">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Typewriter Initial Execution Line */}
            {commandTyped && (
              <div className="space-y-1">
                <div className="flex items-center text-[#4ade80] gap-1.5 font-semibold">
                  <span className="text-[#888888]">$</span>
                  <span>{commandTyped}</span>
                </div>
                {typedOutput && (
                  <pre className="text-[#cccccc] bg-[#0a0a0a]/50 p-2.5 rounded border border-[#2a2a2a]/40 text-xs leading-relaxed whitespace-pre-wrap font-mono">
                    {typedOutput}
                  </pre>
                )}
              </div>
            )}

            {/* Execution indicator */}
            {(isExecuting || isTypingQuick) && (
              <div className="text-[#4ade80] text-xs font-mono animate-pulse">
                [EX_PROCESS] Running binary payload...
              </div>
            )}

            {/* Interactive Prompt Line */}
            <div className="flex items-center gap-2 text-[#4ade80] pt-1">
              <ChevronRight className="w-4 h-4 text-[#4ade80] shrink-0" />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isExecuting || isTypingQuick}
                placeholder={isTyping || isExecuting || isTypingQuick ? "executing..." : "type 'help', 'status', 'join'..."}
                className="w-full bg-transparent border-none outline-none text-xs font-mono text-[#ffffff] placeholder-[#5a5a5a] focus:ring-0 p-0"
              />
            </div>
            <div ref={terminalEndRef} />
          </>
        )}

        {activeTab === 'manifest' && (
          <pre className="text-[#4ade80] text-xs leading-relaxed font-mono">
{`{
  "organization": "HackIT Cybersecurity",
  "est": 2022,
  "motto": "Break, Build, Secure.",
  "active_members": 779,
  "pods": [
    "Red Team / Binary Exploitation",
    "Web Security & Cloud Auditing",
    "Reverse Engineering & Malware",
    "Applied Cryptography",
    "Blue Team Operations"
  ],
  "open_challenges": 14,
  "discord": "https://discord.gg/hackit-cyber"
}`}
          </pre>
        )}
      </div>

      {/* Functional Quick Action Buttons Footer */}
      <div className="px-4 py-2.5 bg-[#121212] border-t border-[#2a2a2a] flex items-center justify-between gap-2 overflow-x-auto text-[11px]">
        <span className="text-[#5a5a5a] uppercase font-semibold text-[10px] shrink-0">QUICK EXEC:</span>
        <div className="flex items-center gap-2">
          {[
            { label: 'status', cmd: 'status' },
            { label: 'tracks', cmd: 'tracks' },
            { label: 'events', cmd: 'events' },
            { label: 'join', cmd: 'join' }
          ].map((action) => (
            <button
              key={action.label}
              disabled={isExecuting || isTypingQuick}
              onClick={() => handleQuickRun(action.cmd)}
              className="px-2.5 py-1 bg-[#1a1a1a] hover:bg-[#242424] text-[#4ade80] hover:text-[#ffffff] border border-[#2a2a2a] hover:border-[#4ade80] rounded transition-colors shrink-0 font-semibold disabled:opacity-50"
              title={`Execute $ ${action.cmd}`}
            >
              $ {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TerminalMockup;
