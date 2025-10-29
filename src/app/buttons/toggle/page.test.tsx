import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import ToogleAccessibleButtonVariantPage from './page';

describe('ToogleAccessibleButtonVariantPage Component', () => {
  beforeEach(() => {
    render(<ToogleAccessibleButtonVariantPage />);
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
});
