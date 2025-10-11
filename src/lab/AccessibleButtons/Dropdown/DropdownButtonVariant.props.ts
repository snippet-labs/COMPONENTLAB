// Modules
import { Column, DataRow } from '@/types';

// Dropdown-variant-props-details
export const columns: Column[] = ['Prop', 'Type', 'Optional'];
export const rows: DataRow[] = [
  ['label', 'string', 'No'],
  ['options', '{ value: string | number; label: string; disabled?: boolean }[]', 'No'],
  ['defaultValue', 'string | number', 'Yes'],
  ['onChange', '(value: string | number) => void', 'No'],
  ['placeholder', 'string', 'Yes'],
];
