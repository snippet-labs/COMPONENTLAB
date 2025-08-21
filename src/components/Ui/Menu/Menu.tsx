'use client';

import { NavigationItems } from '@/constants/NavigationItems';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MenuProps } from './Menu.types';

const Menu: React.FC<MenuProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => (
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden z-[100] absolute top-full left-0 w-full bg-white shadow-md border-b-2 backdrop-blur-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-2">
          {NavigationItems.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Menu;
