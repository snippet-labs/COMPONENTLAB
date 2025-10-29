// Modules
import { SidebarItems } from '@/constants/SidebarItems';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useSidebarSearch } from '../useSidebarSearch';

// Suite
describe('useSidebarSearch Hook', () => {
  it('should initialize with empty search query and all sidebar items', () => {
    const { result } = renderHook(() => useSidebarSearch());

    expect(result.current.searchQuery).toBe('');
    expect(result.current.filteredLinks).toEqual(SidebarItems);
  });

  it('should update searchQuery when setSearchQuery is called for "Buttons"', () => {
    const { result } = renderHook(() => useSidebarSearch());

    act(() => {
      result.current.setSearchQuery('button');
    });

    expect(result.current.searchQuery).toBe('button');
    expect(result.current.filteredLinks).toEqual([
      {
        parentItemName: 'Buttons',
        path: '/buttons',
        children: [
          { subItemName: 'Standard', path: '/buttons/standard' },
          { subItemName: 'Submit', path: '/buttons/submit' },
          { subItemName: 'Reset', path: '/buttons/reset' },
          { subItemName: 'Toggle', path: '/buttons/toggle' },
          { subItemName: 'Link', path: '/buttons/link' },
          { subItemName: 'Loading', path: '/buttons/loading' },
          { subItemName: 'Dropdown', path: '/buttons/dropdown' },
        ],
      },
    ]);
  });

  it('should update searchQuery when handleSearchChange is called for "Forms"', () => {
    const { result } = renderHook(() => useSidebarSearch());

    const mockEvent = { target: { value: 'forms' } };
    act(() => {
      result.current.handleSearchChange(mockEvent);
    });

    expect(result.current.searchQuery).toBe('forms');
    expect(result.current.filteredLinks).toEqual([
      {
        parentItemName: 'Forms',
        path: '/forms',
        children: [
          { subItemName: 'Login', path: '/forms/login' },
          { subItemName: 'Register', path: '/forms/register' },
          { subItemName: 'Contact', path: '/forms/contact' },
        ],
      },
    ]);
  });

  it('should return empty array if no parentItemName matches searchQuery', () => {
    const { result } = renderHook(() => useSidebarSearch());

    act(() => {
      result.current.setSearchQuery('non-existent');
    });

    expect(result.current.searchQuery).toBe('non-existent');
    expect(result.current.filteredLinks).toEqual([]);
  });

  it('should be case-insensitive when filtering', () => {
    const { result } = renderHook(() => useSidebarSearch());

    act(() => {
      result.current.setSearchQuery('CheCkBoxes');
    });

    expect(result.current.filteredLinks).toEqual([
      {
        parentItemName: 'Checkboxes',
        path: '/checkboxes',
        children: [
          { subItemName: 'Basic', path: '/checkboxes/basic' },
          { subItemName: 'Group', path: '/checkboxes/group' },
          { subItemName: 'Controlled', path: '/checkboxes/controlled' },
        ],
      },
    ]);
  });
});
