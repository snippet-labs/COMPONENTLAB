'use client';

// Modules
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { useSidebarSearch } from '@/hooks/useSidebarSearch';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SidebarProps } from './Sidebar.types';

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleToggleSidebar }) => {
  const { searchQuery, handleSearchChange, filteredLinks } = useSidebarSearch();

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isSidebarOpen ? 0 : -300 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 z-[400] left-0 w-70 h-screen bg-white shadow-md border-r-2 backdrop-blur-lg "
    >
      <div className="bg-white z-10">
        {/* HEADER */}
        <div className="flex items-center justify-between pt-25 pb-4 bg-white">
          <div className="flex items-center ml-3 border-2 rounded-full">
            <IoMdArrowRoundBack
              onClick={handleToggleSidebar}
              size={28}
              className="border-1 border-transparent rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-75"
            />
          </div>
        </div>

        {/* SEARCH */}
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
      </div>
      {/* LINKS */}
      <div className="overflow-y-auto h-[calc(100vh-220px)]">
        <nav className="px-4 mt-1">
          {filteredLinks.length > 0 ? (
            filteredLinks.map((parent, parentIndex) => (
              <div key={`${parent.path}-${parentIndex}`} className="mb-2">
                <div className="flex items-center">
                  <MdOutlineRadioButtonChecked size={15} />
                  <Link
                    href={parent.path}
                    onClick={handleToggleSidebar}
                    className="flex items-center px-2 py-2 text-base font-medium group"
                  >
                    {parent.parentItemName}
                  </Link>
                </div>
                {parent.children?.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2">
                    {parent.children.map((child, childIndex) => (
                      <Link
                        key={`${child.path}-${childIndex}`}
                        href={child.path}
                        onClick={handleToggleSidebar}
                        className="flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900 hover:ml-2 group transition-all duration-200"
                      >
                        {child.subItemName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <p className="px-2 mt-2 text-sm text-gray-400">Search results not found</p>
            </div>
          )}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
