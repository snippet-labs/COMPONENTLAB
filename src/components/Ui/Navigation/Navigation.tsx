'use client';

// Modules
import { useState } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { HiCode } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { VscGithub } from 'react-icons/vsc';
import { NavigationItems } from '@/constants/NavigationItems';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const Navigation: React.FC = () => {
  // STATES
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // HANDLER
  const toggleMobileMenu = () => setIsMobileMenuOpen((previous) => !previous);

  return (
    <nav className="fixed top-0 w-full z-[500] border-b-2 bg-white" data-testid="navigation">
      <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* LOGO */}
          <div className="flex items-center backdrop-blur-3xl">
            <button data-testid="logo-button">
              <HiCode size={35} className="transition-all cursor-pointer" />
            </button>
            <h1 className="ml-3 text-2xl font-bold font-cursive" data-testid="logo-title"></h1>
          </div>

          {/* DESKTOP : Navigation */}
          <div className="hidden sm:flex space-x-3" data-testid="desktop-navigation">
            {NavigationItems.map(({ name, path }) => (
              <ul key={name} className="flex items-center justify-center">
                <li className="text-lg">
                  <div
                    className="flex items-center justify-center gap-2 border-2 px-2 py-1 rounded-full hover:cursor-pointer hover:bg-black hover:text-white duration-200 ease-in transition-all"
                    data-testid={`desktop-nav-item-${name}`}
                  >
                    <VscGithub size={25} />
                    <Link href={path} target="_blank">
                      {name}
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </div>

          {/* MOBILE : Menu Button */}
          <div className="flex z-[500] items-center space-x-4 sm:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-toggle"
              className="border-2 rounded-full p-1 hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-75"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <IoClose size={25} /> : <CgMenuLeft size={25} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE : Navigation menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md border-b-2 backdrop-blur-lg"
            data-testid="mobile-navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              {NavigationItems.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
                  onClick={toggleMobileMenu}
                  data-testid={`mobile-nav-item-${name}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
