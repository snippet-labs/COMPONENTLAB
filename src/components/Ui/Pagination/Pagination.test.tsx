// Modules
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';
import { PaginationProps } from './Pagination.types';

// Mock : links
vi.mock('next/link', () => {
  return {
    default: ({
      href,
      children,
      className,
    }: {
      href: string;
      children: React.ReactNode;
      className?: string;
    }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
  };
});

// Suite
describe('Pagination Component', () => {
  const cards: PaginationProps['cards'] = [
    { label: 'Card 1', route: '/card-1' },
    { label: 'Card 2', route: '/card-2' },
  ];

  const renderComponent = (props?: Partial<PaginationProps>) =>
    render(
      <Pagination cards={cards} previousRoute={props?.previousRoute} nextRoute={props?.nextRoute} />
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render all card links', () => {
    renderComponent();

    const card1Links = screen.getAllByText('Card 1');
    const card2Links = screen.getAllByText('Card 2');

    expect(card1Links.length).toBeGreaterThan(0);
    expect(card2Links.length).toBeGreaterThan(0);

    expect(card1Links.some((el) => el.getAttribute('href') === '/card-1')).toBe(true);
    expect(card2Links.some((el) => el.getAttribute('href') === '/card-2')).toBe(true);
  });

  it('should render Previous button when prevRoute is provided', () => {
    renderComponent({ previousRoute: '/previous' });

    const prevLinks = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('href') === '/previous');

    expect(prevLinks.length).toBeGreaterThan(0);
  });

  it('should render Next button when nextRoute is provided', () => {
    renderComponent({ nextRoute: '/next' });

    const nextLinks = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('href') === '/next');

    expect(nextLinks.length).toBeGreaterThan(0);
  });

  it('should render both prev and next links for mobile and desktop layouts', () => {
    renderComponent({ previousRoute: '/previous', nextRoute: '/next' });

    const prevLinks = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('href') === '/previous');
    const nextLinks = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('href') === '/next');

    expect(prevLinks.length).toBeGreaterThanOrEqual(1);
    expect(nextLinks.length).toBeGreaterThanOrEqual(1);
  });
});
