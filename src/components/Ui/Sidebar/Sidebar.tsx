'use client';

// Modules
import { BiSolidErrorCircle } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { RiHome9Fill } from 'react-icons/ri';
import { useSidebarSearch } from '@/hooks/useSidebarSearch';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';
import { SidebarProps } from './Sidebar.types';

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleToggleSidebar }) => {
  const { searchQuery, handleSearchChange, filteredLinks } = useSidebarSearch();
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: isSidebarOpen ? 0 : -500 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 z-[400] w-80 h-screen bg-white shadow-md border-r-2 backdrop-blur-lg flex flex-col"
    >
      {/* HEADER */}
      <div className="bg-white">
        <div className="flex items-center justify-between pt-25 pb-4 bg-white">
          <div className="flex items-center ml-3 border-2 rounded-full">
            <IoMdArrowRoundBack
              onClick={handleToggleSidebar}
              size={28}
              className="border-1 border-transparent rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
            />
          </div>
          <div className="flex items-center mr-3 border-2 rounded-full px-0.5 py-0.5">
            <Link href="/">
              <RiHome9Fill
                size={28}
                className="border-1 border-transparent rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
              />
            </Link>
            <Link href="/team">
              <IoPeopleCircleOutline
                size={28}
                className="border-1 border-transparent rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
              />
            </Link>
          </div>
        </div>
        {/* SEARCH */}
        <ErrorBoundary errorComponent={FallSafeComponent}>
          <div className="px-3 pt-2 pb-4 bg-white">
            <input
              type="text"
              placeholder="Search components ..."
              data-testid="sidebar-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border-transparent rounded-full bg-gray-200 transition-all duration-200 placeholder:text-black"
            />
          </div>
        </ErrorBoundary>
      </div>

      {/* LINKS */}
      <div
        className="flex-1 mb-5 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white"
        onWheel={(event) => event.stopPropagation()}
      >
        <ErrorBoundary errorComponent={FallSafeComponent}>
          <nav className="px-4">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((parent, parentIndex) => (
                <div key={`${parent.path}-${parentIndex}`} className="mb-2">
                  <div className="flex items-center">
                    <MdOutlineRadioButtonChecked size={15} />
                    <Link
                      href={parent.path}
                      onClick={() => null}
                      className="flex items-center px-2 py-2 text-base font-medium group"
                    >
                      {parent.parentItemName}
                    </Link>
                    {pathname === parent.path && (
                      <FaCheck size={14} className="ml-auto mr-2 text-green-600" />
                    )}
                  </div>
                  {parent.children?.length > 0 && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2">
                      {parent.children.map((child, childIndex) => (
                        <div key={`${child.path}-${childIndex}`} className="flex items-center">
                          <Link
                            href={child.path}
                            onClick={() => null}
                            className="flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900 hover:ml-2 group transition-all duration-200"
                          >
                            {child.subItemName}
                          </Link>
                          {pathname === child.path && (
                            <FaCheck size={12} className="ml-auto mr-2 text-black" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <span className="animate animate-pulse">
                  <BiSolidErrorCircle
                    className="animate animate-pulse transition-all duration-200"
                    size={50}
                  />
                </span>
                <p className="px-2 mt-2 text-md text-gray-400">Search results not found</p>
              </div>
            )}
          </nav>
        </ErrorBoundary>
      </div>
    </motion.div>
  );
};

export default Sidebar;
