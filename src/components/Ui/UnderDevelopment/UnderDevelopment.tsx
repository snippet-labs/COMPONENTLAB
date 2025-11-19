// Modules
import fontMonoton from '@/helpers/font';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import { GLOBAL_PAGINATION_LINKS } from '../../../constants/GlobalPaginationLinks';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/Pagination';
import ProgressPanel from '../ProgressPanel/ProgressPanel';
import { UNDER_DEVELOPMENT_PROGRESS_ITEMS } from './UnderDevelopment.progress';

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen" data-testid="errorpage-container">
      <ProgressPanel tableOfContents={UNDER_DEVELOPMENT_PROGRESS_ITEMS} position="right" />
      <div id="error">
        <h1 className="ml-1 text-sm font-medium" data-testid="information-prefix">
          COMPONENTLAB/
        </h1>
        <h2
          className={`${fontMonoton.className} text-3xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation`}
          data-testid="errorpage-heading"
        >
          UNDER <br /> DEVELOPMENT
        </h2>
        <p
          data-testid="errorpage-message"
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3"
        >
          We are doing our best to make this possible <br /> Stay tuned!
        </p>
      </div>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <Pagination
            cards={GLOBAL_PAGINATION_LINKS}
            data-testid="errorpage-pagination"
            paginationTitle="Explore our available components"
            previousRoute="/"
            previousRouteTitle="Home"
            isExternalLink={false}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="know-more">
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default UnderDevelopment;
