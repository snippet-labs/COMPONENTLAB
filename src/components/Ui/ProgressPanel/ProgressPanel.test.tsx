// Modules
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import ProgressPanel from './ProgressPanel';

// Mock : Hook
vi.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: vi.fn(),
}));

// Mock : Links
vi.mock('next/link', () => {
  return {
    default: ({
      href,
      children,
      onClick,
    }: React.PropsWithChildren<{
      href: string;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }>) => (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    ),
  };
});

describe('ProgressPanel Component', () => {
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

  const renderComponent = (props = {}) =>
    render(<ProgressPanel tableOfContents={tableOfContents} {...props} />);

  beforeEach(() => {
    vi.clearAllMocks();
    Element.prototype.scrollIntoView = vi.fn();
    vi.spyOn(document, 'getElementById').mockImplementation(() => document.createElement('div'));
  });

  it('should render all sections and subsections', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    renderComponent();

    expect(screen.queryAllByText('Introduction')[0]).not.toBeNull();
    expect(screen.queryAllByText('Setup')[0]).not.toBeNull();
    expect(screen.queryAllByText('Intro Subsection 1')[0]).not.toBeNull();
    expect(screen.queryAllByText('Intro Subsection 2')[0]).not.toBeNull();
  });

  it('should call scrollIntoView when clicking a section link', async () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    renderComponent();

    await userEvent.click(screen.queryAllByText('Introduction')[0]);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should call scrollIntoView when clicking a subsection link', async () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    renderComponent();

    await userEvent.click(screen.queryAllByText('Intro Subsection 1')[0]);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('should render with left position when position="left"', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    renderComponent({ position: 'left' });

    expect(screen.queryAllByText('Introduction')[0]).not.toBeNull();
  });

  it('should render with right position when position="right"', () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    renderComponent({ position: 'right' });

    expect(screen.queryAllByText('Introduction')[0]).not.toBeNull();
  });

  it('should not throw if target element does not exist when clicking a section link', async () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    renderComponent();
    await userEvent.click(screen.queryAllByText('Introduction')[0]);

    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  });

  it('should not throw if target element does not exist when clicking a subsection link', async () => {
    (useScrollSpy as Mock).mockReturnValue('intro');
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    renderComponent();
    await userEvent.click(screen.queryAllByText('Intro Subsection 1')[0]);

    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  });

  it('should render sections with empty subsections array', () => {
    (useScrollSpy as Mock).mockReturnValue('setup');

    const tableWithEmptySubsections = [{ id: 'setup', title: 'Setup', subsections: [] }];
    renderComponent({ tableOfContents: tableWithEmptySubsections });

    expect(screen.queryAllByText('Setup')[0]).not.toBeNull();
  });

  it('should handle sections without subsections property', () => {
    (useScrollSpy as Mock).mockReturnValue('config');

    const tableWithoutSubsections = [{ id: 'config', title: 'Configuration' }];
    renderComponent({ tableOfContents: tableWithoutSubsections });

    expect(screen.queryAllByText('Configuration')[0]).not.toBeNull();
  });
});
