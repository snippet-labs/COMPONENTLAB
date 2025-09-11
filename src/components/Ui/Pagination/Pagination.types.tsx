import { QuickLinkCardsTypes } from '@/types';

export interface PaginationProps {
  cards: QuickLinkCardsTypes[];
  prevRoute?: string;
  nextRoute?: string;
}
