// Modules
import fontMonoton from '@/helpers/font';
import Footer from '@/components/Ui/Footer/Footer';
import Pagination from '@/components/Ui/Pagination/Pagination';

const Errorpage: React.FC = () => {
  return (
    <div className="min-h-screen mt-25" data-testid="errorpage-container">
      <div>
        <h1
          className={`${fontMonoton.className} text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation`}
          data-testid="errorpage-heading"
        >
          404
        </h1>
        <p
          data-testid="errorpage-message"
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3"
        >
          Unfortunately page is not available <br /> Stay tuned!
        </p>
      </div>
      <Pagination
        data-testid="errorpage-pagination"
        paginationTitle="Take me to Home"
        previousRoute="/"
        previousRouteTitle="Home"
      />
      <Footer />
    </div>
  );
};

export default Errorpage;
