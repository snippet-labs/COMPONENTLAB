// Modules
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Navigation from './Navigation';

// Mock
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Render
const renderComponent = () => {
  const user = userEvent.setup();
  render(<Navigation />);
  return { user };
};

// Suite
describe('Navigation Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    ({ user } = renderComponent());
  });

  it('should render the navigation component properly', () => {
    const nav = screen.queryAllByTestId('navigation')[0];
    expect(nav).not.toBeNull();
  });

  it('should render the "company-logo"', () => {
    const logoButton = screen.queryAllByTestId('logo-button')[0];
    expect(logoButton).not.toBeNull();
  });

  it('should navigate to "GitHub" when the GitHub link is clicked', async () => {
    const githubLink = screen.queryAllByTestId('desktop-nav-item-GitHub')[0];
    expect(githubLink.querySelector('a')?.getAttribute('href')).toBe(
      'https://github.com/snippet-labs/COMPONENTLAB'
    );
    await user.click(githubLink);
    expect(githubLink).not.toBeNull();
  });

  it('should open the "mobile menu" open when hamburger menu is clicked', async () => {
    const mobileToggleOpen = screen.queryAllByTestId('mobile-menu-toggle')[0];
    await user.click(mobileToggleOpen);
    expect(screen.queryAllByTestId('mobile-navigation')[0]).not.toBeNull();
  });

  it('should change the toggle button icon when clicked', async () => {
    const mobileToggle = screen.queryAllByTestId('mobile-menu-toggle')[0];
    const initialPath = mobileToggle.querySelector('path')?.getAttribute('d');
    expect(initialPath).toBeTruthy();
    await user.click(mobileToggle);
    const afterClickPath = mobileToggle.querySelector('path')?.getAttribute('d');
    expect(afterClickPath).toBeTruthy();
    expect(afterClickPath).not.toBe(initialPath);
    await user.click(mobileToggle);
    const revertedPath = mobileToggle.querySelector('path')?.getAttribute('d');
    expect(revertedPath).toBe(initialPath);
  });
});
