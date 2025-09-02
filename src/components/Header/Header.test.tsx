import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

const renderHeader = () => render(<Header />);

describe('Header Component', () => {
  it('should render the header wrapper', () => {
    renderHeader();
    const header = screen.queryAllByTestId('header')[0];
    expect(header).not.toBeNull();
  });

  it('should render the brand heading', () => {
    renderHeader();
    const brand = screen.queryAllByTestId('header-brand')[0];
    expect(brand).not.toBeNull();
    expect(brand.textContent).toBe('COMPONENTLABS');
  });

  it('should render the heading', () => {
    renderHeader();
    const heading = screen.queryAllByTestId('header-title')[0];
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Components from our lab, made accessible');
  });

  it('should render the description', () => {
    renderHeader();
    const description = screen.queryAllByTestId('header-description')[0];
    expect(description).not.toBeNull();
    expect(description.textContent).toBe(
      'Use our components which are inclusive and accessible to everyone.'
    );
  });

  it('should render the button with text and icon', () => {
    renderHeader();
    const button = screen.queryAllByTestId('header-button')[0];
    expect(button).not.toBeNull();
    expect(button.textContent?.includes('Browse components')).toBe(true);

    const icon = screen.queryAllByTestId('header-button-icon')[0];
    expect(icon).not.toBeNull();
  });

  it('should render the accessibility icon', () => {
    renderHeader();
    const icon = screen.queryAllByTestId('header-accessibility-icon')[0];
    expect(icon).not.toBeNull();
  });
});
