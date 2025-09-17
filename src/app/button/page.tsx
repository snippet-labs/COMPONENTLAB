import { HEADER_QUICK_LINKS } from '@/constants/Header/QuickLinkItems';
import Pagination from '@/components/Ui/Pagination/Pagination';
import Footer from '../../components/Ui/Footer/Footer';
import Starter from '../../components/Ui/Starter/Starter';
import { ButtonVarients } from './ButtonVarients';

const ButtonStarterPage = () => {
  return (
    <div>
      <Starter starterTitle='Buttons' starterDescription='Hellow World' starterVarientCards={ButtonVarients} />
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
