// Modules
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Errorpage from '../not-found';

// Mock : Component
type MockPaginationProps = {
  paginationTitle: string;
  previousRoute: string;
  previousRouteTitle: string;
};
vi.mock('@/components/Ui/Pagination/Pagination', () => ({
  default: ({ paginationTitle, previousRoute, previousRouteTitle }: MockPaginationProps) => (
    <div data-testid="mock-pagination">
      {paginationTitle} | {previousRoute} | {previousRouteTitle}
    </div>
  ),
}));

// Suite
describe('Errorpage Component', () => {
  it('should render the 404 heading', () => {
    render(<Errorpage />);
    const heading = screen.getByRole('heading', { name: '404' });
    expect(heading).toBeDefined();
    expect(heading.tagName).toBe('H1');
  });

  it('should render the error message paragraph', () => {
    render(<Errorpage />);
    const paragraph = screen.queryAllByTestId('errorpage-message')[0];
    expect(paragraph).toBeDefined();
  });

  it('should render the "Pagination component" with correct props', () => {
    render(<Errorpage />);
    const pagination = screen.queryAllByTestId('mock-pagination')[0];
    expect(pagination).toBeDefined();
    expect(pagination.textContent).toContain('Take me to Home');
    expect(pagination.textContent).toContain('/');
    expect(pagination.textContent).toContain('Home');
  });
});
