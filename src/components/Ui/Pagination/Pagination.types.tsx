import { QuickLinkCardsProps } from '@/types';

export interface PaginationProps {
  paginationTitle?: string;
  cards?: QuickLinkCardsProps[];
  previousRoute?: string;
  previousRouteTitle?: string;
  nextRoute?: string;
  nextRouteTitle?: string;
}
