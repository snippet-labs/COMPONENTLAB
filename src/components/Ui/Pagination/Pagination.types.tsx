import { QuickLinkCardsTypes } from '@/types';

export interface PaginationProps {
<<<<<<< HEAD
  paginationTitle?: string;
  cards?: QuickLinkCardsProps[];
  previousRoute?: string;
  previousRouteTitle?: string;
=======
  cards: QuickLinkCardsTypes[];
  prevRoute?: string;
>>>>>>> origin/main
  nextRoute?: string;
  nextRouteTitle?: string;
}
