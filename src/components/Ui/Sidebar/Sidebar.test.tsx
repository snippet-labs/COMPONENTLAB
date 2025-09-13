// Modules
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Sidebar from './Sidebar';

// Mock : Icons
vi.mock('react-icons/io', () => ({
  IoMdArrowRoundBack: () => <span>IoMdArrowRoundBack</span>,
}));
vi.mock('react-icons/md', () => ({
  MdOutlineRadioButtonChecked: () => <span>MdOutlineRadioButtonChecked</span>,
}));
// Mock : Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children?: React.ReactNode }) => <div>{children}</div>, // mock <motion.div>
  },
}));
// Mock : Links
vi.mock('next/link', () => ({
  default: ({ children, href }: { children?: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock : Hook
const mockUseSidebarSearch = vi.fn();
vi.mock('@/hooks/useSidebarSearch', () => ({
  useSidebarSearch: () => mockUseSidebarSearch(),
}));

// Render
const renderComponent = (isSidebarOpen = true, handleToggleSidebar = vi.fn()) => {
  return <Sidebar isSidebarOpen={isSidebarOpen} handleToggleSidebar={handleToggleSidebar} />;
};

// Suite
describe('Sidebar Component', () => {
  it('Should render empty state when no results found', () => {
    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [],
    });

    const html = ReactDOMServer.renderToString(renderComponent());

    expect(html).toContain('Search results not found');
    expect(html).toContain('Search components ...');
  });

  it('should render parent links without children', () => {
    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [{ path: '/installation', parentItemName: 'Installation', children: [] }],
    });

    const html = ReactDOMServer.renderToString(renderComponent());

    expect(html).toContain('Installation');
    expect(html).toContain('href="/installation"');
  });

  it('should render parent links with children', () => {
    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [
        {
          path: '/parent',
          parentItemName: 'Parent Link',
          children: [
            { path: '/child-1', subItemName: 'Child One' },
            { path: '/child-2', subItemName: 'Child Two' },
          ],
        },
      ],
    });

    const html = ReactDOMServer.renderToString(renderComponent());

    expect(html).toContain('Parent Link');
    expect(html).toContain('Child One');
    expect(html).toContain('Child Two');
    expect(html).toContain('href="/child-1"');
    expect(html).toContain('href="/child-2"');
  });

  it('should maintain isSidebarOpen prop (open vs closed)', () => {
    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [],
    });

    const openHtml = ReactDOMServer.renderToString(renderComponent(true));
    const closedHtml = ReactDOMServer.renderToString(renderComponent(false));

    expect(openHtml).toContain('Search results not found');
    expect(closedHtml).toContain('Search results not found');
  });

  it('should update search input and shows results when found', async () => {
    const user = userEvent.setup();
    const mockHandleSearchChange = vi.fn();

    mockUseSidebarSearch.mockReturnValue({
      searchQuery: 'doc',
      handleSearchChange: mockHandleSearchChange,
      filteredLinks: [{ path: '/docs', parentItemName: 'Docs', children: [] }],
    });

    render(renderComponent());

    const searchInput = screen.getByPlaceholderText('Search components ...');
    await user.type(searchInput, 'button');

    expect(mockHandleSearchChange).toHaveBeenCalled();
    expect(screen.getByText('Docs')).not.toBeNull();
  });

  it('should show "not found" message when search yields no results', () => {
    mockUseSidebarSearch.mockReturnValue({
      searchQuery: 'xyz',
      handleSearchChange: vi.fn(),
      filteredLinks: [],
    });

    render(renderComponent());

    const notFoundMsg = screen.queryByText('Search results not found');
    expect(notFoundMsg).not.toBeNull();
  });
});
