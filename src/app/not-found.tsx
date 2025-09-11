// Modules
import { monotonFont } from '@/helpers/font';
import Pagination from '@/components/Ui/Pagination/Pagination';

const Errorpage: React.FC = () => {
  return (
    <div className="mt-25">
      <div>
        <h1
          className={`${monotonFont.className} text-7xl md:text-8xl lg:text-9xl overflow-hidden duration-200 transition-all`}
        >
          404
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3">
          Unfortunately page is not available <br /> Stay tuned!
        </p>
      </div>
      <Pagination paginationTitle="Take me to Home" previousRoute="/" previousRouteTitle="Home" />
    </div>
  );
};

export default Errorpage;
