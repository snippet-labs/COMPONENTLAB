import { QuickLinkCardsProps } from '@/types';

export interface PaginationProps {
  paginationHeader?: string;
  cards?: QuickLinkCardsProps[];
  prevRoute?: string;
  nextRoute?: string;
}
