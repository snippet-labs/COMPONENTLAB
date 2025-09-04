import { QuickLinkCards } from '@/types';

export interface PaginationProps {
  cards: QuickLinkCards[];
  prevRoute?: string;
  nextRoute?: string;
}
