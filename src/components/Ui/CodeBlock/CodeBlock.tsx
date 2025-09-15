'use client';

// Modules
import { useState } from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdFileCopy } from 'react-icons/md';
import { Highlight, themes } from 'prism-react-renderer';
import { CodeBlockProps } from './CodeBlock.types';

const CodeBlock: React.FC<CodeBlockProps> = ({ codes, codeLanguage, fileName }) => {
  const [copied, setCopied] = useState(false);

  const handleCodeBlockCopyFunctionality = async () => {
    try {
      await navigator.clipboard.writeText(codes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('FAILED TO COPY CODEBLOCK: ', error);
    }
  };

  return (
    <div className="mt-5 relative group">
      <div className="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-xl border-b border-gray-300">
        <span className="text-sm font-medium text-gray-800">{fileName || ''}</span>
        <button
          onClick={handleCodeBlockCopyFunctionality}
          className="flex items-center justify-center text-gray-700 hover:text-gray-900 hover:cursor-pointer transition-all duration-150"
        >
          {copied ? <IoMdCheckmarkCircle size={16} /> : <MdFileCopy size={16} />}
        </button>
      </div>

      <Highlight theme={themes.oneLight} code={codes} language={codeLanguage}>
        {({ tokens, getTokenProps }) => (
          <pre className="border-2 border-t-0 p-3 rounded-b-xl bg-gray-100 overflow-auto max-h-[500px]">
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
