'use client';
import React from 'react';
import { HiCode } from 'react-icons/hi';
import Link from 'next/link';
import { footerColumns } from '@/constants/Footer/FooterLinks';

const Footer: React.FC = () => {
  return (
    <footer className="border-2 rounded-xl py-3 px-6 bg-white/70 backdrop-blur-xs my-5 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
        
        {footerColumns.map((col, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3">{col.title}</h3>
            <ul className="space-y-2 text-gray-600">
              {col.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link href={link.href} className="hover:text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex items-start md:items-center justify-end md:justify-center">
          <HiCode size={50} className="transition-all cursor-pointer" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700/70 to-transparent" />
      <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Snippet-Labs. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Version 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
