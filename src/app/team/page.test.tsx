// Modules
import TeamPage from '@/app/team/page';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

// Render
const renderComponent = () => render(<TeamPage />);

// Test Suite
describe('TeamPage Component', () => {
  beforeEach(() => {
    renderComponent();
  });

  afterEach(() => {
    cleanup();
  });

  it('should render header title correctly', () => {
    const headerTitle = screen.queryAllByTestId('team-header-title')[0];
    expect(headerTitle.textContent).toBe('COMPONENTLAB/');
  });

  it('should render subtitle correctly', () => {
    const subtitle = screen.queryAllByTestId('team-subtitle')[0];
    expect(subtitle.textContent).toBe('Read our team conversation');
  });

  it('should render chat section', () => {
    const chatSection = screen.queryAllByTestId('chat-section')[0];
    expect(chatSection).toBeTruthy();
  });

  it('should render multiple ChatBubble components', () => {
    const chatBubbles = screen.queryAllByTestId('chatbubble');
    expect(chatBubbles).toBeTruthy();
  });

  it('should render pagination section', () => {
    const paginationSection = screen.queryAllByTestId('pagination-section')[0];
    expect(paginationSection).toBeTruthy();
  });

  it('should render footer section', () => {
    const footerSection = screen.queryAllByTestId('footer-section')[0];
    expect(footerSection).toBeTruthy();
  });
});
