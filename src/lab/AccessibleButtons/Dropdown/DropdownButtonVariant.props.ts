// Modules
import { Column, DataRow } from '@/types';

// Dropdown-variant-props-details
export const columns: Column[] = ['Prop', 'Type'];
export const rows: DataRow[] = [
  ['label', 'string'], // Text for screen reader label
  ['options', '{ value: string | number; label: string; disabled?: boolean }[]'], // Dropdown options
  ['defaultValue', 'string | number'], // Default selected value
  ['onChange', '(value: string | number) => void'], // Callback when selection changes
  ['placeholder', 'string'], // Placeholder text when no selection
];