// Modules
import { AccessibleComponentTags, DataRow } from '@/types';

export interface InformationProps<T extends Record<string, unknown>> {
  variantTitle: string;
  variantDescription: string;
  variantTags: AccessibleComponentTags[];
  variantComponent: React.ComponentType<T>;
  variantComponentProps: T;
  variantCode: string;
  variantFileName: string;
  variantPropColumn: string[];
  variantPropRow: DataRow[];
}
