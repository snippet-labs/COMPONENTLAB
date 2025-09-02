import { ProgressPanelSection } from '@/types';

export interface ProgressPanelProps {
  tableOfContents: ProgressPanelSection[];
  position?: 'left' | 'right';
}
