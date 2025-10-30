// Modules
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { cleanup, render, screen } from '@testing-library/react';
import { MockInstance, afterEach, describe, expect, it } from 'vitest';
import Header from './Header';

// Mock feature flag hook
vi.mock('@/hooks/useFeatureFlag', () => ({
  useFeatureFlag: vi.fn(),
}));

// Render
const renderComponent = () => render(<Header />);

// Suite
describe('Header Component', () => {
  beforeEach(() => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(true);
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the header component', async () => {
    renderComponent();
    const header = await screen.findByTestId('header');
    expect(header).not.toBeNull();
  });

  it('should render the brand heading', async () => {
    renderComponent();
    const brand = await screen.findByTestId('header-brand');
    expect(brand).not.toBeNull();
    expect(brand.textContent).toBe('COMPONENTLAB');
  });

  it('should render the heading', async () => {
    renderComponent();
    const heading = await screen.findByTestId('header-title');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Components from our lab, made accessible');
  });

  it('should render the description', async () => {
    renderComponent();
    const description = await screen.findByTestId('header-description');
    expect(description).not.toBeNull();
    expect(description.textContent).toBe(
      'Use our components which are inclusive and accessible to everyone.'
    );
  });

  it('should render the button with text and icon', async () => {
    renderComponent();
    const button = await screen.findByTestId('header-button');
    expect(button).not.toBeNull();
    expect(button.textContent?.includes('Browse components')).toBe(true);

    const icon = await screen.findByTestId('header-button-icon');
    expect(icon).not.toBeNull();
  });

  it('should render the accessibility icon', async () => {
    renderComponent();
    const icon = await screen.findByTestId('header-accessibility-icon');
    expect(icon).not.toBeNull();
  });

  it('should render the fall-back under-development page when the page is not-available', () => {
    (useFeatureFlag as unknown as MockInstance).mockReturnValue(false);

    cleanup();
    renderComponent();

    const underDevelopmentPage = screen.queryAllByTestId('underdevelopment-page')[0];
    expect(underDevelopmentPage).toBeTruthy();
  });
});
