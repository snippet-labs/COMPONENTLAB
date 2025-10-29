// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import SubmitAccessibleButtonVariantPage from './page';

// Test Suite
describe('SubmitAccessibleButtonVariantPage Component', () => {
  beforeEach(() => {
    render(<SubmitAccessibleButtonVariantPage />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render ProgressPanel', () => {
    const progressPanel = screen.queryAllByTestId('progress-panel')[0];
    expect(progressPanel).toBeTruthy();
  });

  it('should render Information section', () => {
    const informationSection = screen.queryAllByTestId('information-section')[0];
    expect(informationSection).toBeTruthy();
  });

  it('should render Pagination section', () => {
    const paginationSection = screen.queryAllByTestId('pagination-section')[0];
    expect(paginationSection).toBeTruthy();
  });

  it('should render Footer section', () => {
    const footerSection = screen.queryAllByTestId('footer-section')[0];
    expect(footerSection).toBeTruthy();
  });
});
