// Modules
import { ProgressPanelSectionTypes } from '@/types';

export interface ProgressPanelProps {
  isSidebarOpen?: boolean;
  tableOfContents: ProgressPanelSectionTypes[];
  position?: 'left' | 'right';
}
