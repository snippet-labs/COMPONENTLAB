import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Sidebar from './Sidebar';

vi.mock('react-icons/io', () => ({
  IoMdArrowRoundBack: (props: any) => (
    <span data-testid="back-icon" {...props}>
      IoMdArrowRoundBack
    </span>
  ),
}));
vi.mock('react-icons/md', () => ({
  MdOutlineRadioButtonChecked: () => <span>MdOutlineRadioButtonChecked</span>,
}));
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));
vi.mock('next/link', () => ({
  default: ({ children, href, onClick }: any) => (
    <a href={href} onClick={onClick} data-testid={`link-${href}`}>
      {children}
    </a>
  ),
}));

const mockUseSidebarSearch = vi.fn();
vi.mock('@/hooks/useSidebarSearch', () => ({
  useSidebarSearch: () => mockUseSidebarSearch(),
}));

describe('Sidebar Component - Event Handling', () => {
  it('calls handler when back button is clicked', () => {
    const mockToggle = vi.fn();

    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [],
    });

    render(<Sidebar isSidebarOpen={true} handleToggleSidebar={mockToggle} />);

    const backButton = screen.getByTestId('back-icon');
    fireEvent.click(backButton);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('calls handler when parent link is clicked', () => {
    const mockToggle = vi.fn();

    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [{ path: '/docs', parentItemName: 'Docs', children: [] }],
    });

    render(<Sidebar isSidebarOpen={true} handleToggleSidebar={mockToggle} />);

    const link = screen.getByTestId('link-/docs');
    fireEvent.click(link);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('calls handler when child link is clicked', () => {
    const mockToggle = vi.fn();

    mockUseSidebarSearch.mockReturnValue({
      searchQuery: '',
      handleSearchChange: vi.fn(),
      filteredLinks: [
        {
          path: '/parent',
          parentItemName: 'Parent Link',
          children: [{ path: '/child-1', subItemName: 'Child One' }],
        },
      ],
    });

    
    render(<Sidebar isSidebarOpen={true} handleToggleSidebar={mockToggle} />);

    const childLink = screen.getByTestId('link-/child-1');
    fireEvent.click(childLink);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
