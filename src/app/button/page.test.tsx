// Modules
import { HEADER_QUICK_LINKS } from '@/constants/Header/QuickLinkItems';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { BUTTON_VARIANTS } from './ButtonVariants';
import ButtonStarterPage from './page';

// Render
const renderComponent = () => {
  render(<ButtonStarterPage />);
};

// Cleanup
afterEach(() => {
  cleanup();
});

// Test Suite
describe('ButtonStarterPage Component', () => {
  it('should render the ButtonStarterPage container', () => {
    renderComponent();
    expect(screen.queryAllByTestId('button-starter-page')[0]).not.toBeNull();
  });

  it('should render the Starter component', () => {
    renderComponent();
    expect(screen.queryAllByTestId('starter-component')[0]).not.toBeNull();
  });

  it('should render the Pagination component', () => {
    renderComponent();
    expect(screen.queryAllByTestId('pagination-component')[0]).not.toBeNull();
  });

  it('should render the Footer component', () => {
    renderComponent();
    expect(screen.queryAllByTestId('footer-component')[0]).not.toBeNull();
  });

  it('should render all Starter variant cards', () => {
    renderComponent();
    BUTTON_VARIANTS.forEach((_, idx) => {
      const card = screen.queryAllByTestId(`variant-card-${idx}`)[0];
      expect(card).not.toBeNull();
    });
  });

  it('should render correct number of Pagination cards', () => {
    renderComponent();
    const paginationCards = HEADER_QUICK_LINKS.map(
      (_, idx) => screen.queryAllByTestId(`pagination-card-${idx}`)[0]
    );
    expect(paginationCards.length).toBe(HEADER_QUICK_LINKS.length);
  });
});
