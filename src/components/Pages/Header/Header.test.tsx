// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Header from './Header';

// Render
const renderComponent = () => render(<Header />);

// Suite
describe('Header Component', () => {
  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the header component', async () => {
    const header = await screen.findByTestId('header');
    expect(header).not.toBeNull();
  });

  it('should render the brand heading', async () => {
    const brand = await screen.findByTestId('header-brand');
    expect(brand).not.toBeNull();
    expect(brand.textContent).toBe('COMPONENTLAB');
  });

  it('should render the heading', async () => {
    const heading = await screen.findByTestId('header-title');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Components from our lab, made accessible');
  });

  it('should render the description', async () => {
    const description = await screen.findByTestId('header-description');
    expect(description).not.toBeNull();
    expect(description.textContent).toBe(
      'Use our components which are inclusive and accessible to everyone.'
    );
  });

  it('should render the button with text and icon', async () => {
    const button = await screen.findByTestId('header-button');
    expect(button).not.toBeNull();
    expect(button.textContent?.includes('Browse components')).toBe(true);

    const icon = await screen.findByTestId('header-button-icon');
    expect(icon).not.toBeNull();
  });

  it('should render the accessibility icon', async () => {
    const icon = await screen.findByTestId('header-accessibility-icon');
    expect(icon).not.toBeNull();
  });
});
