import { useScrollSpy } from '@/hooks/useScrollSpy';
import { fireEvent, render, screen } from '@testing-library/react';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import ProgressPanel from './ProgressPanel';

vi.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: vi.fn(),
}));

vi.mock('next/link', () => {
  return {
    default: ({ href, children, onClick }: any) => (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    ),
  };
});

describe('ProgressPanel', () => {
  const tableOfContents = [
    {
      id: 'intro',
      title: 'Introduction',
      subsections: [
        { id: 'intro-sub1', title: 'Intro Subsection 1' },
        { id: 'intro-sub2', title: 'Intro Subsection 2' },
      ],
    },
    { id: 'setup', title: 'Setup', subsections: [] },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    Element.prototype.scrollIntoView = vi.fn();

    vi.spyOn(document, 'getElementById').mockImplementation(() => {
      return document.createElement('div');
    });
  });

  it('should render all sections and subsections', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    render(<ProgressPanel tableOfContents={tableOfContents} />);

    expect(screen.queryAllByText('Introduction')[0]).not.toBeNull();
    expect(screen.queryAllByText('Setup')[0]).not.toBeNull();
    expect(screen.queryAllByText('Intro Subsection 1')[0]).not.toBeNull();
    expect(screen.queryAllByText('Intro Subsection 2')[0]).not.toBeNull();
  });

  it('should call scrollIntoView when clicking a section link', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    render(<ProgressPanel tableOfContents={tableOfContents} />);

    const link = screen.queryAllByText('Introduction')[0];
    fireEvent.click(link);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should call scrollIntoView when clicking a subsection link', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    render(<ProgressPanel tableOfContents={tableOfContents} />);

    const subLink = screen.queryAllByText('Intro Subsection 1')[0];
    fireEvent.click(subLink);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
