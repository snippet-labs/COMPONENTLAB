'use client';

// Modules
import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { Highlight, themes } from 'prism-react-renderer';
import { CodeBlockProps } from './CodeBlock.types';

const CodeBlock: React.FC<CodeBlockProps> = ({ codes }) => {
  // STATES
  const [copied, setCopied] = useState(false);
  // HANDLER
  const handleCodeBlockCopyFunctionality = async () => {
    try {
      await navigator.clipboard.writeText(codes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (copyFunctionalityError) {
      console.error('FAILED TO COPY CODEBLOCK: ', copyFunctionalityError);
    }
  };

  return (
    <div className="mt-5 relative group">
      <button
        onClick={handleCodeBlockCopyFunctionality}
        className="absolute top-2 right-2 flex items-center gap-1 bg-gray-100  px-2 py-1 rounded-md text-black opacity-80 hover:opacity-100 hover:cursor-pointer transition-all duration-200"
      >
        {copied ? (
          <>
            <FiCheck size={15} />
          </>
        ) : (
          <>
            <FiCopy size={15} />
          </>
        )}
      </button>

      <Highlight theme={themes.oneLight} code={codes} language="tsx">
        {({ tokens, getTokenProps }) => (
          <pre
            className="border-2 p-3 rounded-xl bg-gray-100 overflow-auto max-h-[500px] custom-scrollbar"
            style={{ scrollbarWidth: 'thin' }}
          >
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
  );
};

export default CodeBlock;
