// Index.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Index from './page';

// Mock Header to avoid depending on its internals
vi.mock('@/components/Header/Header', () => ({
  default: () => <div>Mocked Header</div>,
}));

describe('Index Page', () => {
  it('should render the Header component', () => {
    render(<Index />);
    // Check if our mocked header is in the document
    expect(screen.getByText('Mocked Header')).not.toBeNull();
  });
});
