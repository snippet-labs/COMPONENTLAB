// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import InstallationGuidePage from './page';

// Render
const renderComponent = () => render(<InstallationGuidePage />);

// Cleanup
afterEach(() => {
  cleanup();
});

// Suite
describe('InstallationGuidePage Component', () => {
  it('should render the main title', () => {
    renderComponent();
    const title = screen.queryAllByText('Getting Started')[0];
    expect(title).not.toBeNull();
  });

  it('should render the introduction paragraph', () => {
    renderComponent();
    const intro = screen.queryAllByText(/ComponentLAB is designed with low dependency/i)[0];
    expect(intro).not.toBeNull();
  });

  it('should render installation heading', () => {
    renderComponent();
    const heading = screen.queryAllByText('Installation')[0];
    expect(heading).not.toBeNull();
  });

  it('should render STEP 1 section with React Icons description', () => {
    renderComponent();
    const step1 = screen.queryAllByText('STEP 1')[0];
    const reactIcons = screen.queryAllByText(/React Icons is a popular library/i)[0];
    expect(step1).not.toBeNull();
    expect(reactIcons).not.toBeNull();
  });

  it('should render STEP 2 section with Tailwind CSS description', () => {
    renderComponent();
    const step2 = screen.queryAllByText('STEP 2')[0];
    const tailwind = screen.queryAllByText(/Tailwind CSS is a utility-first CSS framework/i)[0];
    expect(step2).not.toBeNull();
    expect(tailwind).not.toBeNull();
  });

  it('should render STEP 3 section with folder creation text', () => {
    renderComponent();
    const step3 = screen.queryAllByText('STEP 3')[0];
    const folderText = screen.queryAllByText(
      /Now when we are set with all the required dependencies/i
    )[0];
    expect(step3).not.toBeNull();
    expect(folderText).not.toBeNull();
  });

  it('should render the final congratulatory message', () => {
    renderComponent();
    const message = screen.queryAllByText(/There you go, Well done/i)[0];
    expect(message).not.toBeNull();
  });

  it('should render the pagination component', () => {
    renderComponent();
    const paginationTitle = screen.queryAllByText('Official installation guide')[0];
    expect(paginationTitle).not.toBeNull();
  });

  it('should render the footer component', () => {
    renderComponent();
    const footer = screen.getByRole('contentinfo');
    expect(footer).not.toBeNull();
  });
});
