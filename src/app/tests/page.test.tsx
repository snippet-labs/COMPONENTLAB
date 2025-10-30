// Modules
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { cleanup, render, screen } from '@testing-library/react';
import { MockInstance, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Index from '../page';

// Mock : Component
vi.mock('@/components/Pages/Header/Header', () => ({
  default: () => <div data-testid="mocked-header-component">Mocked Header</div>,
}));

// Mock : Feature flag hook
vi.mock('@/hooks/useFeatureFlag', () => ({
  useFeatureFlag: vi.fn(),
}));

// Render
const renderComponent = () => render(<Index />);

// Suite
describe('Index Page', () => {
  beforeEach(() => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(true);
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the Header component', () => {
    renderComponent();
    expect(screen.queryAllByTestId('mocked-header-component')[0]).not.toBeNull();
  });

  it('should render the fall-back under-development page when the page is not-available', () => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(false);

    cleanup();
    renderComponent();

    const underDevelopmentPage = screen.queryAllByTestId('underdevelopment-page')[0];
    expect(underDevelopmentPage).toBeTruthy();
  });
});
