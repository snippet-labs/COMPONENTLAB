// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Information from './Information';

// Mock : Children component
const MockComponent = () => <div data-testid="mock-component">Mock Component</div>;

// Mock : Component props
const mockProps = {
  variantTitle: 'Variant Title',
  variantDescription: 'This is the variant description.',
  variantTags: [{ name: 'tag1' }, { name: 'tag2' }],
  variantComponent: MockComponent,
  variantComponentProps: {},
  variantCode: 'console.log("Hello")',
  variantFileName: 'Hello.tsx',
  variantPropColumn: ['Prop', 'Type'],
  variantPropRow: [
    ['title', 'string'],
    ['id', 'number'],
  ],
};

// Render
const renderComponent = () => render(<Information {...mockProps} />);

// Cleanup
afterEach(() => cleanup());

// Test Suite
describe('Information Component', () => {
  it('should render the main "Information component"', () => {
    renderComponent();
    expect(screen.queryAllByTestId('information-component')[0]).not.toBeNull();
  });

  it('should render the "header title and description"', () => {
    renderComponent();
    const title = screen.queryAllByTestId('information-title')[0];
    const description = screen.queryAllByTestId('information-description')[0];
    expect(title.textContent).toBe(mockProps.variantTitle);
    expect(description.textContent).toBe(mockProps.variantDescription);
  });

  it('should render all passed on tags', () => {
    renderComponent();
    mockProps.variantTags.forEach((tag, idx) => {
      const tagElement = screen.queryAllByTestId(`tag-${idx}`)[0];
      expect(tagElement.textContent).toBe(tag.name);
    });
  });

  it('should render the "Demo section and child component"', () => {
    renderComponent();
    const demoLabel = screen.queryAllByTestId('demo-label')[0];
    const demoContainer = screen.queryAllByTestId('demo-container')[0];
    expect(demoLabel.textContent).toBe('Demo');
    expect(screen.queryAllByTestId('mock-component')[0]).not.toBeNull();
    expect(demoContainer).not.toBeNull();
  });

  it('should render the "Code section"', () => {
    renderComponent();
    const codeLabel = screen.queryAllByTestId('code-label')[0];
    const codeContainer = screen.queryAllByTestId('code-container')[0];
    expect(codeLabel.textContent).toBe('Code');
    expect(codeContainer).not.toBeNull();
  });

  it('should render the "Prop section with Table"', () => {
    renderComponent();
    const propLabel = screen.queryAllByTestId('prop-label')[0];
    const propContainer = screen.queryAllByTestId('prop-container')[0];
    expect(propLabel.textContent).toBe('Prop');
    expect(propContainer).not.toBeNull();
  });
});
