// Modules
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Index from '../page';

// Mock : Component
vi.mock('@/components/Pages/Header/Header', () => ({
  default: () => <div>Mocked Header</div>,
}));

// Suite
describe('Index Page', () => {
  it('should render the Header component', () => {
    render(<Index />);
    expect(screen.getByText('Mocked Header')).not.toBeNull();
  });
});
