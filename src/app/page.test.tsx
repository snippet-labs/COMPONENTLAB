// Imports
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Index from './page';

describe('Index Component', () => {
  it("should render the heading text 'ComponentLAB'", () => {
    render(<Index />);
    const headingText = screen.getByText('ComponentLAB');
    expect(headingText).not.toBeNull();
  });
});
