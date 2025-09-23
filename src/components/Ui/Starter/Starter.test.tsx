// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Starter from './Starter';
import { StarterProps } from './Starter.types';

// Mock : Starter props
const mockProps: StarterProps = {
  starterTitle: 'Starter Title',
  starterDescription: 'This is the starter description.',
  starterVariantDescription: 'This is the variant description.',
  starterVariantCards: [
    { label: 'Card 1', description: 'Card 1 desc', path: '/card1' },
    { label: 'Card 2', description: 'Card 2 desc', path: '/card2' },
  ],
};

// Render
const renderComponent = (props: StarterProps = mockProps) => {
  render(<Starter {...props} />);
};

// Cleanup
afterEach(() => {
  cleanup();
});

// Test Suite
describe('Starter Component', () => {
  it('should render the "starter" component', () => {
    renderComponent();
    expect(screen.queryAllByTestId('starter-component')[0]).not.toBeNull();
  });

  it('should render the "starter title"', () => {
    renderComponent();
    const title = screen.queryAllByTestId('starter-title')[0];
    expect(title.textContent).toBe(mockProps.starterTitle);
  });

  it('should render the "starter description"', () => {
    renderComponent();
    const description = screen.queryAllByTestId('starter-description')[0];
    expect(description.textContent).toBe(mockProps.starterDescription);
  });

  it('should render the variant label', () => {
    renderComponent();
    const label = screen.queryAllByTestId('variants-label')[0];
    expect(label.textContent).toBe('Variants');
  });

  it('should render the variant description', () => {
    renderComponent();
    const variantDesc = screen.queryAllByTestId('variant-description')[0];
    expect(variantDesc.textContent).toBe(mockProps.starterVariantDescription);
  });

  it('should render the correct number of variant cards', () => {
    renderComponent();
    const cards = mockProps.starterVariantCards.map(
      (_, idx) => screen.queryAllByTestId(`variant-card-${idx}`)[0]
    );
    expect(cards.length).toBe(mockProps.starterVariantCards.length);
  });

  it('should render variant card labels and descriptions correctly', () => {
    renderComponent();
    mockProps.starterVariantCards.forEach((card, idx) => {
      const label = screen.queryAllByTestId(`variant-card-label-${idx}`)[0];
      const desc = screen.queryAllByTestId(`variant-card-description-${idx}`)[0];
      expect(label.textContent).toBe(card.label);
      expect(desc.textContent).toBe(card.description);
    });
  });
});
