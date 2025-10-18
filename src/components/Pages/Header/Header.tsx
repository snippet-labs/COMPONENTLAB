'use client';

// Modules
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';
import { HEADER_PAGINATION_LINKS } from '@/constants/Header/HeaderPaginationLinks';
import fontMonoton from '@/helpers/font';
import Link from 'next/link';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import Footer from '@/components/Ui/Footer/Footer';
import ProgressPanel from '@/components/Ui/ProgressPanel/ProgressPanel';
import Pagination from '../../Ui/Pagination/Pagination';
import { HEADER_PROGRESS_ITEMS } from './Header.progress';

const Header: React.FC = () => {
  return (
    <>
      <ProgressPanel tableOfContents={HEADER_PROGRESS_ITEMS} position="right" />
      <header
        className="flex flex-col items-center lg:items-start transition-all duration-300"
        data-testid="header"
      >
        <h1
          id="introduction"
          className={`${fontMonoton.className} text-3xl md:text-6xl lg:text-7xl  mt-5 mb-16 lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation`}
          data-testid="header-brand"
        >
          COMPONENTLAB
        </h1>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 sm:gap-8 w-full">
          <div id="motto" className="flex-1 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              data-testid="header-title"
            >
              Components from our lab, made accessible
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3"
              data-testid="header-description"
            >
              Use our components which are inclusive and accessible to everyone.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="mt-6 flex justify-center lg:justify-start">
                <ErrorBoundary errorComponent={FallSafeComponent}>
                  <Link href="/buttons">
                    <button
                      id="browse"
                      className="px-5 sm:px-6 py-4 bg-black text-white text-base sm:text-lg font-bold rounded-4xl shadow-md flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 group"
                      data-testid="header-button"
                    >
                      Browse components
                      <FaArrowCircleRight
                        size={25}
                        data-testid="header-button-icon"
                        className="duration-300 ease-in-out group-hover:translate-x-6 transition-all"
                      />
                    </button>
                  </Link>
                </ErrorBoundary>
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
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <div id="quick-links">
          <Pagination
            cards={HEADER_PAGINATION_LINKS}
            previousRoute="/"
            nextRoute="/installation"
            isExternalLink={false}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Header;
