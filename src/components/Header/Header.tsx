import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';
import { HEADER_QUICKLINKS } from '@/constants/QuickLinkItems';
import Pagination from '../Ui/Pagination/Pagination';

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-col items-center lg:items-start" data-testid="header">
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-16 text-center lg:text-left"
          data-testid="header-brand"
        >
          COMPONENTLABS
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 sm:gap-8 w-full">
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              data-testid="header-title"
            >
              Components from our lab, made accessible
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3"
              data-testid="header-description"
            >
              Use our components which are inclusive and accessible to everyone.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="mt-6 flex justify-center lg:justify-start">
                <button
                  className="px-5 sm:px-6 py-3 bg-black text-white text-base sm:text-lg font-bold rounded-4xl shadow-md flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:px-8 sm:hover:px-10 lg:hover:px-12 xl:hover:px-16 group"
                  data-testid="header-button"
                >
                  Browse components
                  <FaArrowCircleRight
                    size={25}
                    data-testid="header-button-icon"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 sm:group-hover:translate-x-6"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex justify-center lg:justify-end"
            data-testid="header-icon-container"
          >
            <RxAccessibility
              className="text-black text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px]"
              data-testid="header-accessibility-icon"
            />
          </div>
        </div>
      </header>
      <Pagination cards={HEADER_QUICKLINKS} previousRoute="/" nextRoute="/" />
    </>
  );
};

export default Header;
