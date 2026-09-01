import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroTerminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'HackIT SGGSIE&T Terminal' },
    { type: 'output', text: 'Type "/help" or click suggestions below to execute commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    if (trimmed === '/help' || trimmed === 'help') {
      newHistory.push({
        type: 'output',
        text: 'Available commands: /events, /team, /community, /status, /clear'
      });
    } else if (trimmed === '/events' || trimmed === 'events') {
      newHistory.push({ type: 'output', text: 'Navigating to /events...' });
      setTimeout(() => navigate('/events'), 600);
    } else if (trimmed === '/team' || trimmed === 'team') {
      newHistory.push({ type: 'output', text: 'Navigating to /team...' });
      setTimeout(() => navigate('/team'), 600);
    } else if (trimmed === '/community' || trimmed === 'community') {
      newHistory.push({ type: 'output', text: 'Navigating to /community...' });
      setTimeout(() => navigate('/community'), 600);
    } else if (trimmed === '/status' || trimmed === 'status') {
      newHistory.push({
        type: 'output',
        text: 'STATUS: ACTIVE | RECRUITMENT: CLOSED'
      });
    } else if (trimmed === '/clear' || trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (trimmed !== '') {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "/help" for list.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="bg-surface/90 border border-border shadow-soft rounded-2xl overflow-hidden font-mono text-xs w-full">
      {/* Header */}
      <div className="bg-surface-secondary/90 px-4 py-2.5 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="ml-2 text-[10px] font-semibold text-text-secondary uppercase tracking-widest">
            terminal.hackit.sh
          </span>
        </div>
        <span className="text-[10px] text-accent font-bold px-2 py-0.5 rounded bg-accent-subtle uppercase">
          CLI
        </span>
      </div>

      {/* Output Console */}
      <div className="p-4 h-48 sm:h-56 overflow-y-auto space-y-2 text-text-primary scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'input' && (
              <span className="text-accent font-bold">{item.text}</span>
            )}
            {item.type === 'output' && (
              <span className="text-text-secondary">{item.text}</span>
            )}
            {item.type === 'error' && (
              <span className="text-accent">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Suggestions */}
      <div className="px-4 py-2 bg-surface-secondary/40 border-t border-border flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-text-secondary uppercase tracking-wider mr-1">Quick:</span>
        {['/help', '/events', '/team', '/status', '/clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 bg-surface hover:bg-accent-subtle border border-border hover:border-accent/40 text-text-secondary hover:text-accent rounded text-[10px] transition-all"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Line */}
      <form onSubmit={handleSubmit} className="px-4 py-2.5 bg-surface border-t border-border flex items-center gap-2">
        <span className="text-accent font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type /help or command..."
          className="bg-transparent border-none outline-none focus:outline-none w-full text-text-primary text-xs font-mono placeholder:text-text-secondary/50"
        />
        <button type="submit" className="text-xs text-accent font-bold hover:underline shrink-0">
          Run ↵
        </button>
      </form>
    </div>
  );
}

export default HeroTerminal;
