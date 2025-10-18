'use client';

import React from 'react';

interface SubmitButtonVariantProps {
  title?: string;
  ariaLabel?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
}

const SubmitButtonVariant: React.FC<SubmitButtonVariantProps> = ({
  title = 'Submit',
  ariaLabel,
  onClick,
  loading = false,
}) => {
  const isDisabled = loading;

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel || title}
      aria-disabled={isDisabled}
      aria-busy={loading ? 'true' : 'false'}
      className={`px-7 py-1 rounded-xl border-dotted border-2 font-medium text-lg transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 
        ${
          isDisabled
            ? 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white border-black text-black hover:bg-black hover:text-white hover:cursor-pointer'
        }`}
    >
      <span className="flex items-center justify-center gap-2">
        {loading && (
          <svg
            className="animate-spin h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role="status"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
            />
          </svg>
        )}
        <span>{loading ? 'Submitting...' : title}</span>
      </span>
      <span className="sr-only" aria-live="polite">
        {loading ? 'Submitting' : 'Submitted'}
      </span>
    </button>
  );
};

export default SubmitButtonVariant;
