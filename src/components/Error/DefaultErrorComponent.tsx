import React from 'react';
import { ErrorComponentProps } from './ErrorBoundary.types';

const DefaultErrorComponent: React.FC<ErrorComponentProps> = ({
  error,
  errorInfo,
  resetError,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-700 mb-6">
          We are sorry, but something unexpected happened. Please try again.
        </p>

        {error && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Error Details:
            </h2>
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-red-800 font-mono text-sm break-all">
                {error.toString()}
              </p>
            </div>
          </div>
        )}

        {errorInfo && process.env.NODE_ENV === 'development' && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Component Stack:
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 max-h-64 overflow-auto">
              <pre className="text-gray-700 text-xs whitespace-pre-wrap">
                {errorInfo.componentStack}
              </pre>
            </div>
          </div>
        )}

        {resetError && (
          <button
            onClick={resetError}
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default DefaultErrorComponent;
