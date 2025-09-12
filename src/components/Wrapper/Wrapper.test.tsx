// Modules
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Wrapper from './Wrapper';

// Render
const renderComponent = () => render(<Wrapper>{null}</Wrapper>);

vi.mock('@/components/Ui/Navigation/Navigation', () => ({
  default: ({ handleToggleSidebar }: { handleToggleSidebar: () => void }) => (
    <div>MockNavigation</div>
  ),
}));

// Mock : Sidebar
vi.mock('@/components/Ui/Sidebar/Sidebar', () => ({
  default: ({
    isSidebarOpen,
    handleToggleSidebar,
  }: {
    isSidebarOpen: boolean;
    handleToggleSidebar: () => void;
  }) => <div>MockSidebar</div>,
}));

// Mock : ProgressPanel
vi.mock('@/components/Ui/ProgessPanel/ProgressPanel', () => ({
  default: ({ tableOfContents, position }: { tableOfContents: string; position: string }) => (
    <div>MockProgressPanel</div>
  ),
}));

// Mock : Content
vi.mock('@/components/Ui/Content/Content', () => ({
  default: ({
    children,
    isSidebarOpen,
    handleToggleSidebar,
  }: {
    children: React.ReactNode;
    isSidebarOpen: boolean;
    handleToggleSidebar: () => void;
  }) => (
    <div>
      MockContent
      <div>{children}</div>
    </div>
  ),
}));

// Suite
describe('Wrapper Component', () => {
  it('should render Navigation component', () => {
    renderComponent();
    const nav = screen.queryAllByText('MockNavigation')[0];
    expect(nav).not.toBeNull();
  });

  it('should render Sidebar component', () => {
    renderComponent();
    const sidebar = screen.queryAllByText('MockSidebar')[0];
    expect(sidebar).not.toBeNull();
  });

  it('should render ProgressPanel component', () => {
    renderComponent();
    const progress = screen.queryAllByText('MockProgressPanel')[0];
    expect(progress).not.toBeNull();
  });

  it('should render Content component', () => {
    renderComponent();
    const content = screen.queryAllByText('MockContent')[0];
    expect(content).not.toBeNull();
  });
});
