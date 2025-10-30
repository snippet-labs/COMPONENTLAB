'use client';

// Modules
import React from 'react';
import { BsFan } from 'react-icons/bs';
import { ErrorComponentProps } from './ErrorBoundary.types';

const FallSafeComponent: React.FC<ErrorComponentProps> = ({ error, errorInfo, resetError }) => {
  return (
    <div className="flex flex-col items-center mt-5 mb-5" data-testid="fallsafe-wrapper">
      <div
        className="w-full bg-gray-100 rounded-xl border-dotted border-2 px-3 py-2"
        data-testid="fallsafe-container"
      >
        <div className="flex items-center justify-between" data-testid="fallsafe-header">
          <h1 className="text-2xl font-bold" data-testid="fallsafe-title">
            OOPS!
          </h1>
          <BsFan size={30} className="animate animate-spin" data-testid="fallsafe-icon" />
        </div>

        <p
          className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation"
          data-testid="fallsafe-message"
        >
          We are fixing this right up!
        </p>

        {error && <div data-testid="fallsafe-error"></div>}
        {resetError && <div data-testid="fallsafe-reset"></div>}
        {errorInfo && process.env.NODE_ENV === 'production' && (
          <div className="mt-5 p-2 border-2 rounded-xl" data-testid="fallsafe-error-info">
            <h2 className="text-sm font-semibold text-gray-800 mb-1">COMPONENT STACK</h2>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 max-h-64 overflow-auto">
              <pre className="text-gray-700 text-xs whitespace-pre-wrap">
                {errorInfo.componentStack}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FallSafeComponent;
