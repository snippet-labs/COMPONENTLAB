import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';

const Header: React.FC = () => {
  return (
    <header className="max-w-6xl mx-auto min-h-screen flex items-center px-4" data-testid="header">
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
            <button
              className="px-5 sm:px-6 py-3 bg-black text-white text-base sm:text-lg font-bold rounded-4xl shadow-md hover:bg-gray-700 transition-colors flex items-center gap-2"
              data-testid="header-button"
            >
              Browse components
              <FaArrowCircleRight size={25} data-testid="header-button-icon" />
            </button>
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
  );
};

export default Header;
