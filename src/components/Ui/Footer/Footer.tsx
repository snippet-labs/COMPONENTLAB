'use client';

// Modules
import React from 'react';
import { HiCode } from 'react-icons/hi';
import { footerColumns } from '@/constants/Footer/FooterLinks';
import Link from 'next/link';
import packageJson from '../../../../package.json';

const Footer: React.FC = () => {
  return (
    <footer className="border-2 rounded-xl py-3 px-6 bg-white/70 backdrop-blur-xs my-5 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
        {footerColumns.map((column, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-3">{column.title}</h3>
            <ul className="space-y-2 text-gray-600">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:ml-2 duration-300 transitional-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-start md:items-center justify-end md:justify-center">
          <HiCode
            size={50}
            className="cursor-pointer hover:scale-125 duration-300 transition-all"
          />
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-700/70 to-transparent" />
      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} SnippetLabs product. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">
          <span className="text-green-600 font-semibold">Version</span> {packageJson.version}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
