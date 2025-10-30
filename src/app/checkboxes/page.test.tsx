// Modules
import { HEADER_PAGINATION_LINKS } from '@/constants/Header/HeaderPaginationLinks';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CHECKBOX_VARIANTS } from './CheckboxVariant';
import CheckboxStarterPage from './page';


// Render
const renderComponent = () => {
  render(<CheckboxStarterPage />);
};

// Cleanup
afterEach(() => {
  cleanup();
});

// Test Suite
describe('CheckboxStarterPage Component', () => {
  it('should render the CheckboxStarterPage container', () => {
    renderComponent();
    expect(screen.queryAllByTestId('checkbox-starter-page')[0]).not.toBeNull();
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
    CHECKBOX_VARIANTS.forEach((_, idx) => {
      const card = screen.queryAllByTestId(`variant-card-${idx}`)[0];
      expect(card).not.toBeNull();
    });
  });

  it('should render correct number of Pagination cards', () => {
    renderComponent();
    const paginationCards = HEADER_PAGINATION_LINKS.map(
      (_, idx) => screen.queryAllByTestId(`pagination-card-${idx}`)[0]
    );
    expect(paginationCards.length).toBe(HEADER_PAGINATION_LINKS.length);
  });
});