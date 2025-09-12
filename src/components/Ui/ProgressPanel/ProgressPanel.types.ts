// Modules
import { ProgressPanelSectionTypes } from '@/types';

export interface ProgressPanelProps {
  tableOfContents: ProgressPanelSectionTypes[];
  position?: 'left' | 'right';
}
