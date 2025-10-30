import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { cleanup, render, screen } from '@testing-library/react';
import { MockInstance, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ToggleAccessibleButtonVariantPage from './page';

// Mock feature flag hook
vi.mock('@/hooks/useFeatureFlag', () => ({
  useFeatureFlag: vi.fn(),
}));

// Render
const renderComponent = () => {
  render(<ToggleAccessibleButtonVariantPage />);
};

describe('ToggleAccessibleButtonVariantPage Component', () => {
  beforeEach(() => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(true);
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders ProgressPanel', () => {
    const progressPanel = screen.queryAllByTestId('progress-panel')[0];
    expect(progressPanel).toBeTruthy();
  });

  it('renders Information section', () => {
    const informationSection = screen.queryAllByTestId('information-section')[0];
    expect(informationSection).toBeTruthy();
  });

  it('renders Pagination section', () => {
    const paginationSection = screen.queryAllByTestId('pagination-section')[0];
    expect(paginationSection).toBeTruthy();
  });

  it('renders Footer section', () => {
    const footerSection = screen.queryAllByTestId('footer-section')[0];
    expect(footerSection).toBeTruthy();
  });

  it('should render the fall-back under-development page when the page is not-available', () => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(false);

    cleanup();
    renderComponent();

    const underDevelopmentPage = screen.queryAllByTestId('underdevelopment-page')[0];
    expect(underDevelopmentPage).toBeTruthy();
  });
});
