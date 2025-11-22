// Modules
import { GLOBAL_PAGINATION_LINKS } from '@/constants/GlobalPaginationLinks';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { cleanup, render, screen } from '@testing-library/react';
import { MockInstance, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CHECKBOX_VARIANTS } from './CheckboxVariant';
import CheckboxStarterPage from './page';

// Mock feature flag hook
vi.mock('@/hooks/useFeatureFlag', () => ({
  useFeatureFlag: vi.fn(),
}));

// Render
const renderComponent = () => {
  render(<CheckboxStarterPage />);
};

// Test Suite
describe('CheckboxStarterPage Component', () => {
  beforeEach(() => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(true);
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });
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
    const paginationCards = GLOBAL_PAGINATION_LINKS.map(
      (_, idx) => screen.queryAllByTestId(`pagination-card-${idx}`)[0]
    );
    expect(paginationCards.length).toBe(GLOBAL_PAGINATION_LINKS.length);
  });

  it('should render the fall-back under-development page when the page is not-available', () => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(false);

    cleanup();
    renderComponent();

    const underDevelopmentPage = screen.queryAllByTestId('underdevelopment-page')[0];
    expect(underDevelopmentPage).toBeTruthy();
  });
});
