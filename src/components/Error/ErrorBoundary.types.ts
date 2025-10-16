import { ComponentType, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  errorComponent: ComponentType<ErrorComponentProps>;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface ErrorComponentProps {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  resetError?: () => void;
}
