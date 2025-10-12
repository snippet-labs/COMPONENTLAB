import { LinkCardsTypes } from '@/types';

export interface PaginationProps {
  paginationTitle?: string;
  cards?: LinkCardsTypes[];
  previousRoute?: string;
  previousRouteTitle?: string;
  nextRoute?: string;
  nextRouteTitle?: string;
  isExternalLink: boolean;
}
