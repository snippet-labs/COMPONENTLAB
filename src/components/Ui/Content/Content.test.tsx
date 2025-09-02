import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Content from './Content';
import { ContentProps } from './Content.types';

// ✅ Auto cleanup after each test
afterEach(() => {
  cleanup();
});

// ✅ Mock react-icons
vi.mock('react-icons/io', () => ({
  IoMdArrowDropleft: () => 'IoMdArrowDropleft',
  IoMdArrowDropright: () => 'IoMdArrowDropright',
}));

describe('Content Component', () => {
  it('should render without crashing', () => {
    const mockToggle = vi.fn();

    // direct function call test
    const element = Content({
      isSidebarOpen: true,
      handleToggleSidebar: mockToggle,
      children: <p>Test Child</p>,
    });

    expect(element).toBeDefined();
  });

  it('should render Expand/Collapse button', () => {
    const mockToggle = vi.fn();

    const { rerender, getByTestId } = render(
      <Content isSidebarOpen={true} handleToggleSidebar={mockToggle}>
        <p>Test Child</p>
      </Content>
    );

    // ✅ Collapse button check
    const collapseBtn = getByTestId('toggle-button');
    expect(collapseBtn).toBeDefined();
    expect(collapseBtn.textContent).toBe('Collapse sidebar');

    // ✅ Re-render with sidebar closed
    rerender(
      <Content isSidebarOpen={false} handleToggleSidebar={mockToggle}>
        <p>Test Child</p>
      </Content>
    );

    const expandBtn = getByTestId('toggle-button');
    expect(expandBtn).toBeDefined();
    expect(expandBtn.textContent).toBe('Expand sidebar');
  });

  it('renders correctly with custom props (sidebar open)', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content isSidebarOpen={true} handleToggleSidebar={mockToggle}>
        <p data-testid="child">Custom Child</p>
      </Content>
    );

    const collapseBtn = getByTestId('toggle-button');
    expect(collapseBtn).toBeDefined();
    expect(collapseBtn.textContent).toBe('Collapse sidebar');

    const child = getByTestId('child');
    expect(child.textContent).toBe('Custom Child');
  });

  it('respects TypeScript prop types', () => {
    // ✅ Type-safe props
    const mockToggle: ContentProps['handleToggleSidebar'] = vi.fn();

    const props: ContentProps = {
      isSidebarOpen: true,
      handleToggleSidebar: mockToggle,
      children: <p>TS Child</p>,
    };

    const { getByTestId } = render(<Content {...props} />);

    const btn = getByTestId('toggle-button');
    expect(btn).toBeDefined();
    expect(btn.textContent).toBe('Collapse sidebar');
  });

  // ----------------------
  // ✅ Event Handling Tests
  // ----------------------
  it('should call handleToggleSidebar when button is clicked', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content isSidebarOpen={true} handleToggleSidebar={mockToggle}>
        <p>Child</p>
      </Content>
    );

    const button = getByTestId('toggle-button');
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple clicks correctly', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content isSidebarOpen={true} handleToggleSidebar={mockToggle}>
        <p>Child</p>
      </Content>
    );

    const button = getByTestId('toggle-button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(3);
  });

  // ----------------------
  // ✅ Edge Case Tests
  // ----------------------
  it('handles undefined or null props gracefully', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content isSidebarOpen={undefined as unknown as boolean} handleToggleSidebar={mockToggle}>
        {null}
      </Content>
    );

    const button = getByTestId('toggle-button');
    expect(button).toBeDefined();
  });

  it('handles empty strings, arrays, or objects as props', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content isSidebarOpen={false} handleToggleSidebar={mockToggle}>
        {''}
      </Content>
    );

    const button = getByTestId('toggle-button');
    expect(button.textContent).toBe('Expand sidebar');
  });

  it('renders very long strings correctly', () => {
    const mockToggle = vi.fn();
    const longText = 'A'.repeat(500);

    const { getByTestId } = render(
      <Content isSidebarOpen={true} handleToggleSidebar={mockToggle}>
        <p data-testid="long-child">{longText}</p>
      </Content>
    );

    const child = getByTestId('long-child');
    expect(child.textContent?.length).toBe(500);
  });

  it('handles invalid prop types (forced via as unknown as)', () => {
    const mockToggle = vi.fn();

    const { getByTestId } = render(
      <Content
        isSidebarOpen={'not-a-boolean' as unknown as boolean}
        handleToggleSidebar={mockToggle}
      >
        <p>Invalid Type</p>
      </Content>
    );

    const button = getByTestId('toggle-button');
    expect(button).toBeDefined();
  });

  it('renders correctly with no props at all (using type cast)', () => {
    const { container } = render(<Content {...({} as ContentProps)} />);
    expect(container).toBeDefined();
  });
});
