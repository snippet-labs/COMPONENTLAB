// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import FallSafeComponent from './FallSafeComponent';

// Test Suite
describe('FallSafeComponent', () => {
  const mockError = new Error('Something went wrong');
  const mockErrorInfo = { componentStack: 'in App\nin Component' };
  const mockReset = () => {};

  //  Before-After-each
  beforeEach(() => {
    render(
      <FallSafeComponent error={mockError} errorInfo={mockErrorInfo} resetError={mockReset} />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the wrapper', () => {
    const wrapper = screen.queryAllByTestId('fallsafe-wrapper')[0];
    expect(wrapper).toBeTruthy();
  });

  it('should render the container', () => {
    const container = screen.queryAllByTestId('fallsafe-container')[0];
    expect(container).toBeTruthy();
  });

  it('should render the header section', () => {
    const header = screen.queryAllByTestId('fallsafe-header')[0];
    expect(header).toBeTruthy();
  });

  it('should render the title text', () => {
    const title = screen.queryAllByTestId('fallsafe-title')[0];
    expect(title).toBeTruthy();
  });

  it('should render the icon', () => {
    const icon = screen.queryAllByTestId('fallsafe-icon')[0];
    expect(icon).toBeTruthy();
  });

  it('should render the message text', () => {
    const message = screen.queryAllByTestId('fallsafe-message')[0];
    expect(message).toBeTruthy();
  });

  it('should render optional error and reset placeholders', () => {
    const errorDiv = screen.queryAllByTestId('fallsafe-error')[0];
    const resetDiv = screen.queryAllByTestId('fallsafe-reset')[0];
    expect(errorDiv).toBeTruthy();
    expect(resetDiv).toBeTruthy();
  });

  it('does not render error info section when not in production mode', () => {
    const errorInfo = screen.queryAllByTestId('fallsafe-error-info')[0];
    expect(errorInfo).toBeFalsy();
  });
});
