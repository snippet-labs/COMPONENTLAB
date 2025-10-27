// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import DropdownAccessibleButtonVariantPage from './page';

// Render
const renderComponent = () => render(<DropdownAccessibleButtonVariantPage />);

// Test Suite
describe('DropdownAccessibleButtonVariantPage Component', () => {
  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render Information section', () => {
    const infoSection = screen.queryAllByTestId('information-section')[0];
    expect(infoSection).toBeTruthy();
  });

  it('should render ProgressPanel', () => {
    const progressPanel = screen.queryAllByTestId('progress-panel')[0];
    expect(progressPanel).toBeTruthy();
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
