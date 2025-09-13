// Modules
import type { ProgressPanelSectionTypes } from '@/types';
import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useScrollSpy } from '../useScrollSpy';

// Suite
describe('useScrollSpy Hook', () => {
  let tableOfContents: ProgressPanelSectionTypes[];

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="section1" style="height: 500px;"></div>
      <div id="section2" style="height: 500px;"></div>
      <div id="sub1" style="height: 500px;"></div>
    `;

    tableOfContents = [
      { id: 'section1', title: 'Section 1' },
      {
        id: 'section2',
        title: 'Section 2',
        subsections: [{ id: 'sub1', title: 'Subsection 1' }],
      },
    ];

    window.scrollTo(0, 0);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should return initial section correctly', () => {
    const { result } = renderHook(() => useScrollSpy(tableOfContents));
    expect(result.current).toBe('sub1');
  });

  it('should update activeSection on scroll', () => {
    const { result } = renderHook(() => useScrollSpy(tableOfContents));

    window.scrollY = 550;
    window.dispatchEvent(new Event('scroll'));

    expect(result.current).toBe('sub1');

    window.scrollY = 600;
    window.dispatchEvent(new Event('scroll'));
    expect(result.current).toBe('sub1');
  });

  it('should handle no sections gracefully', () => {
    const { result } = renderHook(() => useScrollSpy([]));
    expect(result.current).toBe('');
  });

  it('should remove scroll event listener on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useScrollSpy(tableOfContents));

    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('should set the last visible section if multiple are above scroll', () => {
    const { result } = renderHook(() => useScrollSpy(tableOfContents));

    window.scrollY = 350;
    window.dispatchEvent(new Event('scroll'));

    expect(result.current).toBe('sub1');
  });
});
