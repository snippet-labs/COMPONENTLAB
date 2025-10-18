// Modules
import fontMonoton from '@/helpers/font';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import { NOT_FOUND_PROGRESS_ITEMS } from './NotFound.progress';

const Errorpage: React.FC = () => {
  return (
    <div className="min-h-screen" data-testid="errorpage-container">
      <ProgressPanel tableOfContents={NOT_FOUND_PROGRESS_ITEMS} position="right" />
      <div id="error">
        <h1 className="ml-1 text-sm font-medium" data-testid="information-prefix">
          COMPONENTLAB/
        </h1>
        <h2
          className={`${fontMonoton.className} text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation`}
          data-testid="errorpage-heading"
        >
          404
        </h2>
        <p
          data-testid="errorpage-message"
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3"
        >
          Unfortunately page is not available <br /> Stay tuned!
        </p>
      </div>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <Pagination
            data-testid="errorpage-pagination"
            paginationTitle="Take me to Home"
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

export default Errorpage;
