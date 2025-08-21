'use client';

// Modules
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { ContentProps } from './Content.types';

const Content: React.FC<ContentProps> = ({ isSidebarOpen, handleToggleSidebar, children }) => {
  return (
    <div
      className={`flex-1 w-full min-h-screen px-4 pt-16 overflow-x-hidden overflow-y-auto transition-all duration-300 md:px-9 lg:px-12 lg:pr-72 ${
        isSidebarOpen ? 'lg:ml-64' : ''
      }`}
    >
      <div className="mt-6 md:mt-4 lg:mt-4 overflow-x-hidden max-w-[100vw]">
        <button
          onClick={handleToggleSidebar}
          className="items-center flex border-2 rounded-full px-2 py-1 hover:cursor-pointer hover:bg-black hover:text-white hover:border-white transition-all duration-75 fixed bg-white"
        >
          {isSidebarOpen ? <IoMdArrowDropleft size={25} /> : <IoMdArrowDropright size={25} />}
          <span className="flex items-center justify-center">
            {isSidebarOpen ? 'Collapse' : 'Expand'} sidebar
          </span>
        </button>

        {/* MAIN */}
        <div className="w-full mt-15 p-1 overflow-x-hidden text-black max-w-[79rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
