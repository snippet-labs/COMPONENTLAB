'use client';

// Modules
import { useState } from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdFileCopy } from 'react-icons/md';
import { Highlight, themes } from 'prism-react-renderer';
import { CodeBlockProps } from './CodeBlock.types';

const CodeBlock: React.FC<CodeBlockProps> = ({ codes, codeLanguage }) => {
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
            <IoMdCheckmarkCircle size={15} />
          </>
        ) : (
          <>
            <MdFileCopy size={15} />
          </>
        )}
      </button>

      <Highlight theme={themes.oneLight} code={codes} language={codeLanguage}>
        {({ tokens, getTokenProps }) => (
          <pre
            className="border-2 p-3 rounded-xl bg-gray-100 overflow-auto"
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
