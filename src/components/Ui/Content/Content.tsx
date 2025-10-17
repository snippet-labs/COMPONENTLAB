'use client';

// Modules
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import { ContentProps } from './Content.types';

const Content: React.FC<ContentProps> = ({ isSidebarOpen, handleToggleSidebar, children }) => {
  return (
    <div
      data-testid="content-root"
      className={`flex-1 w-full  min-h-screen px-4 pt-16 overflow-x-hidden overflow-y-auto transition-all duration-300 md:px-9 lg:px-25 lg:pr-72 ${
        isSidebarOpen ? 'lg:ml-64' : ''
      }`}
    >
      <div
        data-testid="content-inner"
        className="mt-6 md:mt-4 lg:mt-4 overflow-x-hidden max-w-[100vw]"
      >
        <ErrorBoundary errorComponent={FallSafeComponent}>
          <button
            onClick={handleToggleSidebar}
            className="z-[200] fixed bg-white items-center flex border-2 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-black hover:text-white duration-200 ease-in transition-all "
          >
            {isSidebarOpen ? <IoMdArrowDropleft size={25} /> : <IoMdArrowDropright size={25} />}
            <span className="flex items-center justify-center" data-testid="toggle-button">
              {isSidebarOpen ? 'Collapse' : 'Expand'} sidebar
            </span>
          </button>
        </ErrorBoundary>
        {/* MAIN */}
        <div
          data-testid="content-main"
          className="w-full mt-15 p-1 overflow-x-hidden text-black max-w-[79rem]"
        >
          <ErrorBoundary errorComponent={FallSafeComponent}>{children}</ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default Content;
