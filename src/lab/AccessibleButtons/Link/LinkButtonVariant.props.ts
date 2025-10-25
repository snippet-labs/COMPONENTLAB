// Modules
import { Column, DataRow } from '@/types';

// Standard-button-variant-props-details
export const columns: Column[] = ['Prop', 'Type', 'Optional'];
export const rows: DataRow[] = [
  ['title', 'string', 'No'],
  ['url', 'string', 'No'],
  ['target', 'string', 'Yes'],
  ['ariaLabel', 'string', 'Yes'],
  ['disabled', 'boolean', 'Yes'],
];