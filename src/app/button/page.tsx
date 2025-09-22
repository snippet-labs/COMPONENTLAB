// Modules
import { HEADER_QUICK_LINKS } from '@/constants/Header/QuickLinkItems';
import Pagination from '@/components/Ui/Pagination/Pagination';
import Footer from '../../components/Ui/Footer/Footer';
import Starter from '../../components/Ui/Starter/Starter';
import { BUTTON_VARIANTS } from './ButtonVariants';

const ButtonStarterPage = () => {
  return (
    <div className="min-h-screen">
      <Starter
        starterTitle="Starter"
        starterDescription="Starter parent accessible component description goes here"
        starterVariantDescription="Starter variant description goes here"
        starterVariantCards={BUTTON_VARIANTS}
      />
      <Pagination
        cards={HEADER_QUICK_LINKS}
        nextRoute="/"
        nextRouteTitle="home"
        previousRoute="/"
        previousRouteTitle="previous"
      />
      <Footer />
    </div>
  );
};

export default ButtonStarterPage;
