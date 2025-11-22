// Modules
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Table } from './Table';

// Test Suite
describe('Table Component', () => {
  // Mock
  const mockColumns = ['Name', 'Age', 'Role'];
  const mockRows = [
    ['Alice', '25', 'Engineer'],
    ['Bob', '30', 'Designer'],
  ];

  // Before-After-Each
  beforeEach(() => {
    render(<Table columns={mockColumns} rows={mockRows} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render table wrapper', () => {
    const tableWrapper = screen.queryAllByTestId('table-wrapper')[0];
    expect(tableWrapper).toBeTruthy();
  });

  it('should render table element', () => {
    const tableElement = screen.queryAllByTestId('table-element')[0];
    expect(tableElement).toBeTruthy();
  });

  it('should render table header section', () => {
    const tableHeader = screen.queryAllByTestId('table-header')[0];
    expect(tableHeader).toBeTruthy();
  });

  it('should render table body section', () => {
    const tableBody = screen.queryAllByTestId('table-body')[0];
    expect(tableBody).toBeTruthy();
  });

  it('should render correct number of header cells', () => {
    const headerCells = screen.queryAllByTestId('table-header-cell');
    expect(headerCells.length).toBe(mockColumns.length);
  });

  it('should render correct number of body rows', () => {
    const bodyRows = screen.queryAllByTestId('table-body-row');
    expect(bodyRows.length).toBe(mockRows.length);
  });

  it('should render correct number of body cells', () => {
    const bodyCells = screen.queryAllByTestId('table-body-cell');
    expect(bodyCells.length).toBe(mockColumns.length * mockRows.length);
  });
});
