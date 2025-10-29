// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import StandardAccessibleButtonVariantPage from './page';

// Render
const renderComponent = () => render(<StandardAccessibleButtonVariantPage />);

// Test Suite
describe('StandardAccessibleButtonVariantPage Component', () => {
  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the main container', () => {
    const mainContainer = screen.queryAllByTestId('standard-accessible-page')[0];
    expect(mainContainer).toBeTruthy();
  });

  it('should render the progress panel', () => {
    const progressPanel = screen.queryAllByTestId('progress-panel')[0];
    expect(progressPanel).toBeTruthy();
  });

  it('should render the information section', () => {
    const infoSection = screen.queryAllByTestId('information-section')[0];
    expect(infoSection).toBeTruthy();
  });

  it('should render the pagination section', () => {
    const paginationSection = screen.queryAllByTestId('pagination-section')[0];
    expect(paginationSection).toBeTruthy();
  });

  it('should render the footer section', () => {
    const footerSection = screen.queryAllByTestId('footer-section')[0];
    expect(footerSection).toBeTruthy();
  });
});
