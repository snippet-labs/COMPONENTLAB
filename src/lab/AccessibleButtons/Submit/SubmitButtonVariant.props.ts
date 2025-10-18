// Modules
import { Column, DataRow } from '@/types';

export const columns: Column[] = ['Prop', 'Type', 'Optional'];
export const rows: DataRow[] = [
  ['title', 'string', 'Yes'],
  ['ariaLabel', 'string', 'Yes'],
  ['onClick', 'MouseEvent', 'No'],
  ['loading', 'boolean', 'No'],
];
