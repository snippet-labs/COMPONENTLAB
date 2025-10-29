// Modules
import { HEADER_PAGINATION_LINKS } from '@/constants/Header/HeaderPaginationLinks';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import Starter from '@/components/Ui/Starter/Starter';
import { CHECKBOX_STARTER_PAGE_PROGRESS_ITEMS } from './Checkbox.progress';
import { CHECKBOX_VARIANTS } from './CheckboxVariant';

const CheckboxStarterPage = () => {
  return (
    <div className="min-h-screen" data-testid="checkbox-starter-page">
      <ProgressPanel tableOfContents={CHECKBOX_STARTER_PAGE_PROGRESS_ITEMS} position="right" />
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div className="checkboxes">
          <Starter
            starterTitle="Accessible Checkboxes"
            starterDescription='A checkbox is an interactive form element used to select one or multiple options from a set. It represents a binary choice — checked or unchecked — and is commonly used for preferences, settings, and selections. Ensuring checkboxes are accessible means using semantic HTML (`<input type="checkbox">`) with clear labels, proper grouping for related options, visible focus states, and accurate ARIA attributes when customized. Accessible checkboxes ensure all users, including those using assistive technologies, can easily understand and interact with them.'
            starterVariantDescription="Here are all the checkboxes variants we have so far"
            starterVariantCards={CHECKBOX_VARIANTS}
            data-testid="starter-component"
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <Pagination
            cards={HEADER_PAGINATION_LINKS}
            nextRoute="/checkboxes/basic"
            nextRouteTitle="Basic"
            previousRoute="/buttons"
            previousRouteTitle="Buttons"
            data-testid="pagination-component"
            isExternalLink={false}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="know-me">
          <Footer data-testid="footer-component" />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default CheckboxStarterPage;
