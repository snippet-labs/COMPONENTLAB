// Modules
import TeamPage from '@/app/team/page';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// Render
const renderComponent = () => render(<TeamPage />);

// Test suite
describe('TeamPage Component', () => {
  it('should render the header title correctly', () => {
    renderComponent();
    const headerTitle = screen.queryAllByTestId('team-header-title')[0];
    expect(headerTitle.textContent).toBe('COMPONENTLAB/');
  });

  it('should render the subtitle correctly', () => {
    renderComponent();
    const subtitle = screen.queryAllByTestId('team-subtitle')[0];
    expect(subtitle.textContent).toBe('Read our team conversation');
  });

  it('should render the chat section', () => {
    renderComponent();
    const chatSection = screen.queryAllByTestId('chat-section')[0];
    expect(chatSection).toBeTruthy();
  });

  it('should render chat bubbles', () => {
    renderComponent();
    const chatBubbles = screen.queryAllByTestId('chatbubble');
    expect(chatBubbles).toBeTruthy();
  });

  it('should render the pagination section', () => {
    renderComponent();
    const paginationSection = screen.queryAllByTestId('pagination-section')[0];
    expect(paginationSection).toBeTruthy();
  });

  it('should render the footer section', () => {
    renderComponent();
    const footerSection = screen.queryAllByTestId('footer-section')[0];
    expect(footerSection).toBeTruthy();
  });
});
