import { QuickLinkCardsTypes } from '@/types';

export interface PaginationProps {
  paginationTitle?: string;
  cards?: QuickLinkCardsTypes[];
  previousRoute?: string;
  previousRouteTitle?: string;
  nextRoute?: string;
  nextRouteTitle?: string;
}
