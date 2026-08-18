import { useState, useEffect } from 'react';
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
    navigator.clipboard.writeText(resource.codeSnippet || resource.fullWriteup || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/90 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-3xl bg-[#131313] border border-[#e5e2e1] overflow-hidden text-[#e5e2e1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] border-b border-[#e5e2e1]">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#00FF41] font-bold uppercase">
            <span>{resource.tag || 'DOCUMENT'}</span>
            <span className="text-[#e5e2e1]">/</span>
            <span className="text-white">{resource.id || '#000'}</span>
          </div>
          <button 
            onClick={onClose}
            className="font-code-sm text-xs text-[#e5e2e1] hover:text-[#00FF41] transition-colors px-2 py-1 border border-[#e5e2e1] hover:border-[#00FF41]"
            aria-label="Close modal"
          >
            [ESC]
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#b9ccb2] mb-2 font-code-sm uppercase">
              <span>By {resource.author}</span>
              <span>•</span>
              <span>{resource.date || '2024'}</span>
            </div>
            <h2 className="font-display-lg text-headline-md text-white font-extrabold uppercase leading-tight">
              {resource.title}
            </h2>
            <p className="font-body-base text-sm text-[#c6c6c7] mt-3 leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Code snippet block */}
          {(resource.codeSnippet || resource.fullWriteup) && (
            <div className="bg-[#0e0e0e] border border-[#e5e2e1] overflow-hidden font-code-sm text-xs">
              <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#e5e2e1] text-[#b9ccb2] font-label-caps uppercase font-bold">
                <span>Payload / Code Excerpt</span>
                <button
                  onClick={copyCode}
                  className="px-3 py-1 bg-white text-[#0a0a0a] hover:bg-[#00FF41] font-label-caps text-[11px] font-bold uppercase transition-colors"
                >
                  {copied ? "COPIED" : "COPY CODE"}
                </button>
              </div>
              <pre className="p-4 text-[#00FF41] overflow-x-auto whitespace-pre leading-relaxed font-mono">
                <code>{resource.codeSnippet || resource.fullWriteup}</code>
              </pre>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#e5e2e1]">
            <a
              href={resource.externalLink || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-caps text-xs text-[#00FF41] hover:underline uppercase font-bold"
            >
              &gt; View Repository on GitHub
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
