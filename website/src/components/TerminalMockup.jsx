import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function TerminalMockup({ onOpenJoin }) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTypingQuick, setIsTypingQuick] = useState(false);

  const checkReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const isReducedMotion = checkReducedMotion();

  // Initial command history showcasing whoami by default for authentic storytelling
  const [history, setHistory] = useState([
    { type: 'command', text: 'whoami' },
    { 
      type: 'output', 
      text: `hackit\nCybersecurity and technology community at SGGSIE&T.` 
    }
  ]);

  const [isExecuting, setIsExecuting] = useState(false);
  const terminalContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isExecuting, inputVal]);

  const executeCommandAction = (rawCmd) => {
    const lower = rawCmd.toLowerCase().trim();
    let responseText = '';

    if (lower === 'help') {
      responseText = `Available Commands:
  whoami     - Community identity
  mission    - Core philosophy
  focus      - Key technical domains
  milestones - Major achievements
  join       - Recruitment & membership info
  clear      - Reset terminal screen`;
    } else if (lower === 'whoami') {
      responseText = `hackit\nCybersecurity and technology community at SGGSIE&T.`;
    } else if (lower === 'mission') {
      responseText = `Learn through practice.\nBuild through collaboration.\nCompete through challenges.`;
    } else if (lower === 'focus') {
      responseText = `* Cybersecurity\n* CTFs\n* Open-source projects\n* Workshops\n* Hackathons`;
    } else if (lower === 'milestones') {
      responseText = `* HackIT × Swayambhu Quiz Competition\n* SIH 2025 Internal Round\n* Code Clash 2.0`;
    } else if (lower === 'join') {
      responseText = `Recruitment for the 2026-27 academic year is now open.`;
      if (onOpenJoin) {
        setTimeout(() => onOpenJoin(), 400);
      }
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'events') {
      responseText = `Navigating to Milestones & Operations...`;
      navigate('/events');
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
    }, 120);
  };

  const handleQuickRun = (cmd) => {
    if (isExecuting || isTypingQuick) return;

    if (isReducedMotion) {
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
        }, 60);
      }
    }, 20);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const copyTerminalContent = () => {
    const textToCopy = history
      .map((item) => (item.type === 'command' ? `$ ${item.text}` : item.text))
      .join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#121212] border border-[#262626] rounded-sm shadow-2xl font-mono text-xs text-white overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-[#262626] select-none">
        {/* Host identifier */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block opacity-80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block opacity-80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block opacity-80"></span>
          </div>
          <span className="ml-2 text-xs text-[#00FF41] font-bold tracking-wide">
            hackit@sggs
          </span>
        </div>

        {/* Right action button */}
        <button
          onClick={copyTerminalContent}
          className="text-[10px] px-2 py-0.5 border border-[#262626] text-[#00FF41] font-bold uppercase transition-colors hover:bg-[#00FF41] hover:text-[#003907] rounded-sm"
        >
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>

      {/* Terminal Viewport */}
      <div
        ref={terminalContainerRef}
        className="p-4 sm:p-5 bg-[#0a0a0a] min-h-[250px] max-h-[300px] overflow-y-auto space-y-3 leading-relaxed"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'command' && (
              <div className="flex items-center text-[#00FF41] gap-2 font-bold font-mono">
                <span className="text-[#84967e]">&gt;</span>
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <div className="text-[#e5e2e1] pl-3 border-l-2 border-[#262626] py-1 text-xs whitespace-pre-wrap font-mono leading-relaxed bg-[#121212]/50">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Execution Status */}
        {(isExecuting || isTypingQuick) && (
          <div className="text-[#00FF41] text-xs font-mono animate-pulse pt-1">
            [QUERYING] ...
          </div>
        )}

        {/* Interactive Prompt Line */}
        <div className="flex items-center gap-2 text-[#00FF41] pt-2 border-t border-[#1a1a1a]">
          <span className="text-[#00FF41] shrink-0 font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isExecuting || isTypingQuick}
            placeholder={
              isExecuting || isTypingQuick
                ? 'executing...'
                : "type 'whoami', 'mission', 'focus', 'milestones', 'join'..."
            }
            className="w-full bg-transparent border-none outline-none font-mono text-xs text-white placeholder-[#525252] p-0 focus:ring-0"
          />
        </div>
      </div>

      {/* Quick Commands Footer */}
      <div className="px-4 py-3 bg-[#141414] border-t border-[#262626] flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-[#84967e] uppercase font-bold text-[10px] shrink-0">
          STORY COMMANDS:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { label: 'whoami', cmd: 'whoami' },
            { label: 'mission', cmd: 'mission' },
            { label: 'focus', cmd: 'focus' },
            { label: 'milestones', cmd: 'milestones' },
            { label: 'join', cmd: 'join' }
          ].map((action) => (
            <button
              key={action.label}
              disabled={isExecuting || isTypingQuick}
              onClick={() => handleQuickRun(action.cmd)}
              className="px-2.5 py-1 bg-[#1a1a1a] hover:bg-[#00FF41] hover:text-[#003907] text-[#00FF41] border border-[#262626] hover:border-[#00FF41] font-mono text-[11px] font-semibold uppercase transition-all duration-150 disabled:opacity-50 rounded-sm"
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
