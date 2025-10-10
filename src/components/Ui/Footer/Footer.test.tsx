// Modules
import { FOOTER_LINKS } from '@/constants/Footer/FooterPaginationLinks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Footer from './Footer';

// Mock : Package details
vi.mock('../../../../package.json', () => ({
  default: { version: '1.2.3' },
}));

// Render
const renderComponent = () => render(<Footer />);

// Suite
describe('Footer Component', () => {
  it('should render the footer container', () => {
    renderComponent();
    const footer = screen.queryAllByTestId('footer-container')[0];
    expect(footer).not.toBeNull();
  });

  it('should render the correct number of columns', () => {
    renderComponent();
    FOOTER_LINKS.forEach((_, idx) => {
      const column = screen.queryAllByTestId(`footer-column-${idx}`)[0];
      expect(column).not.toBeNull();
    });
  });

  it('should render each column title correctly', () => {
    renderComponent();
    FOOTER_LINKS.forEach((col, idx) => {
      const titleEl = screen.queryAllByTestId(`footer-column-title-${idx}`)[0];
      expect(titleEl).not.toBeNull();
      expect(titleEl.textContent?.trim()).toBe(col.title);
    });
  });

  it('should render all links with correct labels', () => {
    renderComponent();
    FOOTER_LINKS.forEach((col, idx) => {
      col.links.forEach((link, linkIdx) => {
        const linkEl = screen.queryAllByTestId(`footer-link-${idx}-${linkIdx}`)[0];
        expect(linkEl).not.toBeNull();
        expect(linkEl.textContent?.trim()).toBe(link.label);
      });
    });
  });

  it('should render the code icon', () => {
    renderComponent();
    const icon = screen.queryAllByTestId('footer-code-icon')[0];
    expect(icon).not.toBeNull();
  });

  it('should render the divider line', () => {
    renderComponent();
    const divider = screen.queryAllByTestId('footer-divider')[0];
    expect(divider).not.toBeNull();
  });

  it('should render the version correctly from package.json', () => {
    renderComponent();
    const versionEl = screen.queryAllByTestId('footer-version')[0];
    expect(versionEl).not.toBeNull();
    expect(versionEl.textContent?.includes('1.2.3')).toBe(true);
  });

  it('should render copyright with current year', () => {
    renderComponent();
    const year = new Date().getFullYear().toString();
    const copyEl = screen.queryAllByTestId('footer-copyright')[0];
    expect(copyEl).not.toBeNull();
    expect(copyEl.textContent?.includes(year)).toBe(true);
  });

  it('should allow clicking on links', async () => {
    renderComponent();
    const user = userEvent.setup();
    const firstLinkLi = screen.queryAllByTestId('footer-link-0-0')[0];
    expect(firstLinkLi).not.toBeNull();

    const firstLink = firstLinkLi.querySelector('a');
    expect(firstLink).not.toBeNull();
    expect(firstLink?.getAttribute('href')).toBe('/');

    await user.click(firstLink!);
  });

  it('should respond to icon interaction (hover/click)', async () => {
    renderComponent();
    const user = userEvent.setup();
    const icon = screen.queryAllByTestId('footer-code-icon')[0];

    expect(icon).not.toBeNull();
    await user.hover(icon!);
    await user.click(icon!);
  });
});
