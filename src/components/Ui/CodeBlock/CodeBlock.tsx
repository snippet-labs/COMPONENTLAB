'use client';

// Modules
import React, { useEffect, useRef, useState } from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdFileCopy } from 'react-icons/md';
import { Highlight, themes } from 'prism-react-renderer';
import { CodeBlockProps } from './CodeBlock.types';

const CodeBlock: React.FC<CodeBlockProps> = ({ codes, codeLanguage, fileName }) => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCodeBlockCopyFunctionality = async () => {
    try {
      await navigator.clipboard.writeText(codes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('FAILED TO COPY CODEBLOCK: ', error);
    }
  };

  // Side effect
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const onPointerDown = () => element.focus();
    element.addEventListener('pointerdown', onPointerDown);
    return () => element.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // Handle scroll chaining
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const delta = event.deltaY;
    const atTop = element.scrollTop === 0;
    const atBottom = element.scrollHeight - element.clientHeight - element.scrollTop <= 1;

    const canScroll = (delta > 0 && !atBottom) || (delta < 0 && !atTop);

    // Only stop propagation if we actually have something to scroll
    if (canScroll) {
      event.stopPropagation();
    }
    // If we’re fully at top or bottom, the scroll will bubble to the parent
  };

  return (
    <div className="mt-5 relative group">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-xl border-b border-gray-300">
        <span className="text-sm font-medium text-gray-800">{fileName || ''}</span>
        <button
          onClick={handleCodeBlockCopyFunctionality}
          className="flex items-center justify-center text-gray-700 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
          aria-label="Copy code to clipboard"
        >
          {copied ? <IoMdCheckmarkCircle size={16} /> : <MdFileCopy size={16} />}
        </button>
      </div>

      {/* Scrollable Code Area */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        tabIndex={0}
        role="region"
        aria-label={`${fileName || 'Code'} code block`}
        className="relative rounded-b-xl border border-t-0 border-gray-300 bg-gray-100 max-h-[500px] overflow-y-auto scroll-smooth"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'auto',
          touchAction: 'pan-y',
        }}
      >
        {/* Scrollbar styling */}
        <style jsx>{`
          .code-scroll::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          .code-scroll::-webkit-scrollbar-track {
            background: #f3f4f6;
          }
          .code-scroll::-webkit-scrollbar-thumb {
            background: #9ca3af;
            border-radius: 9999px;
            border: 2px solid transparent;
            background-clip: content-box;
          }
          .code-scroll {
            scrollbar-width: thin;
            scrollbar-color: #9ca3af #f3f4f6;
          }
        `}</style>

        <div className="p-3 text-sm font-mono text-gray-800 whitespace-pre-wrap break-words code-scroll">
          <Highlight theme={themes.oneLight} code={codes} language={codeLanguage}>
            {({ tokens, getTokenProps }) => (
              <pre className="m-0">
                {tokens.map((line, i) => (
                  <div key={i}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
