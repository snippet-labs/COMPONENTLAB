// Modules
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CodeBlock from './CodeBlock';

// Mock : Navigator
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

const sampleCode = `console.log('Hello World');`;
const sampleLanguage = 'javascript';
const sampleFileName = 'App.js';

// Render
const renderComponent = (props = {}) =>
  render(
    <CodeBlock
      codes={sampleCode}
      codeLanguage={sampleLanguage}
      fileName={sampleFileName}
      {...props}
    />
  );

// Test Suite
describe('CodeBlock Component', () => {
  it('should render the main container', () => {
    renderComponent();
    const container = screen.queryAllByTestId('codeblock-container')[0];
    expect(container).not.toBeNull();
  });

  it('should render the header and filename', () => {
    renderComponent();
    const header = screen.queryAllByTestId('codeblock-header')[0];
    const fileName = screen.queryAllByTestId('codeblock-filename')[0];
    expect(header).not.toBeNull();
    expect(fileName.textContent).toBe(sampleFileName);
  });

  it('should render the copy button and default icon', () => {
    renderComponent();
    const button = screen.queryAllByTestId('codeblock-copy-button')[0];
    const icon = screen.queryAllByTestId('codeblock-copy-icon')[0];
    expect(button).not.toBeNull();
    expect(icon).not.toBeNull();
  });

  it('should show copied icon after clicking the copy button', () => {
    renderComponent();
    const button = screen.queryAllByTestId('codeblock-copy-button')[0];
    userEvent.click(button);
    const copiedIcon = screen.queryAllByTestId('codeblock-copied-icon')[0];
    expect(copiedIcon).not.toBeNull();
  });

  it('should revert to copy icon after 2 seconds', () => {
    vi.useFakeTimers();
    renderComponent();
    const button = screen.queryAllByTestId('codeblock-copy-button')[0];
    userEvent.click(button);
    const copiedIcon = screen.queryAllByTestId('codeblock-copied-icon')[0];
    expect(copiedIcon).not.toBeNull();
    vi.advanceTimersByTime(2000);
    const copyIcon = screen.queryAllByTestId('codeblock-copy-icon')[0];
    expect(copyIcon).not.toBeNull();
    vi.useRealTimers();
  });

  it('should copy code to clipboard when button is clicked', () => {
    renderComponent();
    const button = screen.queryAllByTestId('codeblock-copy-button')[0];
    // Trigger click directly
    button.click();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(sampleCode);
  });

  it('should log error if clipboard copy fails', () => {
    const mockError = vi.spyOn(console, 'error').mockImplementation(() => {});
    // Force clipboard to fail
    (navigator.clipboard.writeText as unknown) = vi.fn(() => {
      throw new Error('Copy failed');
    });

    renderComponent();
    const button = screen.queryAllByTestId('codeblock-copy-button')[0];
    // Trigger click directly
    button.click();

    expect(mockError).toHaveBeenCalledWith(
      expect.stringContaining('FAILED TO COPY CODEBLOCK:'),
      expect.any(Error)
    );

    mockError.mockRestore();
  });

  it('should render scrollable code area and code block', () => {
    renderComponent();
    const scrollContainer = screen.queryAllByTestId('codeblock-scroll-container')[0];
    const code = screen.queryAllByTestId('codeblock-code')[0];
    expect(scrollContainer).not.toBeNull();
    expect(code).not.toBeNull();
  });

  it('should render <pre> tag with code lines', () => {
    renderComponent();
    const pre = screen.queryAllByTestId('codeblock-pre')[0];
    expect(pre).not.toBeNull();
  });

  it('should focus the scroll container on pointerdown', () => {
    renderComponent();
    const container = screen.queryAllByTestId('codeblock-scroll-container')[0] as HTMLElement;
    const focusSpy = vi.spyOn(container, 'focus');
    const event = new Event('pointerdown');
    container.dispatchEvent(event);
    expect(focusSpy).toHaveBeenCalledTimes(1);
  });
});
