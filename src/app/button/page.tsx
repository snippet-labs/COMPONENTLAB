// Modules
import { HEADER_QUICK_LINKS } from '@/constants/Header/QuickLinkItems';
import Pagination from '@/components/Ui/Pagination/Pagination';
import Footer from '../../components/Ui/Footer/Footer';
import Starter from '../../components/Ui/Starter/Starter';
import { BUTTON_VARIANTS } from './ButtonVariants';

const AccessibleButtonStarterPage = () => {
  return (
    <div className="min-h-screen" data-testid="button-starter-page">
      <Starter
        starterTitle="Starter"
        starterDescription="Starter parent accessible component description goes here"
        starterVariantDescription="Starter variant description goes here"
        starterVariantCards={BUTTON_VARIANTS}
        data-testid="starter-component"
      />
      <Pagination
        cards={HEADER_QUICK_LINKS}
        nextRoute="/"
        nextRouteTitle="home"
        previousRoute="/"
        previousRouteTitle="previous"
        data-testid="pagination-component"
      />
      <Footer data-testid="footer-component" />
    </div>
  );
};

export default AccessibleButtonStarterPage;
