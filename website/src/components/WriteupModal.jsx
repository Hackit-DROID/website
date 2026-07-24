import { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, FileCode, Star, BookOpen } from 'lucide-react';
import Button from './Button';

export function WriteupModal({ resource, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !resource) return null;

  const copyCode = () => {
    navigator.clipboard.writeText(resource.codeSnippet || resource.fullWriteup);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-3xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden text-[#ffffff]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#888888]">
            <BookOpen className="w-4 h-4 text-[#4ade80]" />
            <span className="text-[#4ade80]">{resource.category}</span>
            <span>/</span>
            <span>{resource.tag}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#888888] hover:text-[#ffffff] transition-colors p-1 rounded-md hover:bg-[#242424]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#888888] mb-2 font-mono">
              <span>By {resource.author}</span>
              <span>•</span>
              <span>{resource.date}</span>
              <span>•</span>
              <span>{resource.readTime}</span>
              <span className="flex items-center gap-1 text-[#4ade80] ml-auto">
                <Star className="w-3.5 h-3.5 fill-[#4ade80]" />
                {resource.stars}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#ffffff] leading-tight">
              {resource.title}
            </h2>
            <p className="text-sm text-[#cccccc] mt-2 leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Code snippet block */}
          {resource.codeSnippet && (
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2 bg-[#121212] border-b border-[#2a2a2a] text-[#888888]">
                <span className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#4ade80]" />
                  Payload / Code Excerpt
                </span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] px-2 py-1 bg-[#1a1a1a] hover:bg-[#242424] text-[#ffffff] border border-[#2a2a2a] rounded transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-[#4ade80]" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
              <pre className="p-4 text-[#4ade80] overflow-x-auto whitespace-pre leading-relaxed">
                <code>{resource.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Full Writeup markdown simulation */}
          <div className="prose prose-invert max-w-none text-sm text-[#cccccc] space-y-3 border-t border-[#2a2a2a] pt-4 font-mono">
            {resource.fullWriteup.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-lg font-bold text-[#ffffff] pt-2">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('#### ')) {
                return <h4 key={idx} className="text-base font-semibold text-[#4ade80] pt-1">{paragraph.replace('#### ', '')}</h4>;
              }
              return <p key={idx} className="leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
            <a
              href={resource.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#4ade80] hover:underline font-mono"
            >
              <ExternalLink className="w-4 h-4" />
              View full repository on GitHub
            </a>
            <Button variant="primary" onClick={onClose} size="sm">
              Close Viewer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteupModal;
