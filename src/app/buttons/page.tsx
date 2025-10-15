// Modules
import { HEADER_PAGINATION_LINKS } from '@/constants/Header/HeaderPaginationLinks';
import Pagination from '@/components/Ui/Pagination/Pagination';
import Footer from '../../components/Ui/Footer/Footer';
import Starter from '../../components/Ui/Starter/Starter';
import { BUTTON_VARIANTS } from './ButtonVariants';


const AccessibleButtonStarterPage = () => {
  return (
    <div className="min-h-screen" data-testid="button-starter-page">
      <Starter
        starterTitle="Accessible Buttons"
        starterDescription="A button is a fundamental interactive element in web development used to trigger actions — such as submitting forms, opening dialogs, or performing navigation. Buttons provide users with clear, actionable controls that drive interaction within a website or application.
        Ensuring that buttons are accessible is crucial, as they must be usable by everyone, including people who rely on screen readers, keyboard navigation, or assistive technologies. Proper accessibility involves using semantic HTML (<button>), clear labeling, focus states, and ARIA attributes where necessary. This not only improves usability but also enhances the overall inclusiveness and user experience of the application."
        starterVariantDescription="Here are all the button variants we have so far"
        starterVariantCards={BUTTON_VARIANTS}
        data-testid="starter-component"
      />
      <Pagination
        cards={HEADER_PAGINATION_LINKS}
        nextRoute="/buttons/standard"
        nextRouteTitle="Standard"
        previousRoute="/installation"
        previousRouteTitle="Installation"
        data-testid="pagination-component"
        isExternalLink={false}
      />
      <Footer data-testid="footer-component" />
    </div>
  );
};

export default AccessibleButtonStarterPage;
