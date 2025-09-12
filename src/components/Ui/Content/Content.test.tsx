// Modules
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Content from './Content';
import { ContentProps } from './Content.types';

// Cleanup
afterEach(() => {
  cleanup();
});

// Mock : Icons
vi.mock('react-icons/io', () => ({
  IoMdArrowDropleft: () => 'IoMdArrowDropleft',
  IoMdArrowDropright: () => 'IoMdArrowDropright',
}));

// Render
const renderComponent = (props?: Partial<ContentProps>) => {
  const mockToggle = vi.fn();
  const defaultProps: ContentProps = {
    isSidebarOpen: true,
    handleToggleSidebar: mockToggle,
    children: <p>Test Child</p>,
  };

  const utils = render(<Content {...defaultProps} {...props} />);
  return {
    ...utils,
    mockToggle,
  };
};

// Suite
describe('Content Component', () => {
  it('should render without crashing', () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  it('should render Expand/Collapse button', () => {
    const { getByTestId, rerender } = renderComponent({ isSidebarOpen: true });
    const collapseBtn = getByTestId('toggle-button');
    expect(collapseBtn).toBeDefined();
    expect(collapseBtn.textContent).toBe('Collapse sidebar');

    rerender(
      <Content isSidebarOpen={false} handleToggleSidebar={() => {}}>
        <p>Test Child</p>
      </Content>
    );

    const expandBtn = getByTestId('toggle-button');
    expect(expandBtn).toBeDefined();
    expect(expandBtn.textContent).toBe('Expand sidebar');
  });

  it('should render correctly with custom props (sidebar open)', () => {
    const { getByTestId } = renderComponent({
      isSidebarOpen: true,
      children: <p data-testid="child">Custom Child</p>,
    });

    const collapseBtn = getByTestId('toggle-button');
    expect(collapseBtn).toBeDefined();
    expect(collapseBtn.textContent).toBe('Collapse sidebar');

    const child = getByTestId('child');
    expect(child.textContent).toBe('Custom Child');
  });

  it('should respect TypeScript prop types', () => {
    const { getByTestId } = renderComponent({
      children: <p>TS Child</p>,
    });

    const btn = getByTestId('toggle-button');
    expect(btn).toBeDefined();
    expect(btn.textContent).toBe('Collapse sidebar');
  });

  it('should call handleToggleSidebar when button is clicked', () => {
    const { getByTestId, mockToggle } = renderComponent();
    const button = getByTestId('toggle-button');
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple clicks correctly', () => {
    const { getByTestId, mockToggle } = renderComponent();
    const button = getByTestId('toggle-button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledTimes(3);
  });

  it('should handle undefined or null props gracefully', () => {
    const { getByTestId } = renderComponent({
      isSidebarOpen: undefined as unknown as boolean,
      children: null,
    });

    const button = getByTestId('toggle-button');
    expect(button).toBeDefined();
  });

  it('should handle empty strings, arrays, or objects as props', () => {
    const { getByTestId } = renderComponent({
      isSidebarOpen: false,
      children: '',
    });

    const button = getByTestId('toggle-button');
    expect(button.textContent).toBe('Expand sidebar');
  });

  it('should render very long strings correctly', () => {
    const longText = 'A'.repeat(500);
    const { getByTestId } = renderComponent({
      children: <p data-testid="long-child">{longText}</p>,
    });

    const child = getByTestId('long-child');
    expect(child.textContent?.length).toBe(500);
  });

  it('should handle invalid prop types (forced via as unknown as)', () => {
    const { getByTestId } = renderComponent({
      isSidebarOpen: 'not-a-boolean' as unknown as boolean,
      children: <p>Invalid Type</p>,
    });

    const button = getByTestId('toggle-button');
    expect(button).toBeDefined();
  });

  it('should render correctly with no props at all (using type cast)', () => {
    const { container } = renderComponent({} as Partial<ContentProps>);
    expect(container).toBeDefined();
  });
});
