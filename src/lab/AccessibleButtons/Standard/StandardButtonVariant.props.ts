// Modules
import { Column, DataRow } from '@/types';

// Standard-button-variant-props-details
export const columns: Column[] = ['Prop', 'Type', 'Optional'];
export const rows: DataRow[] = [
  ['title', 'string', 'Yes'],
  ['ariaLabel', 'string', 'Yes'],
  ['onClick', 'MouseEvent', 'Yes'],
  ['disabled', 'boolean', 'Yes'],
];
