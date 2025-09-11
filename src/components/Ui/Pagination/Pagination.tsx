'use client';

import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { PaginationProps } from './Pagination.types';

const Pagination: React.FC<PaginationProps> = ({ cards, prevRoute, nextRoute }) => {
  return (
    <div className="w-full mt-15 py-6">
      <div className="w-full h-[1px] mb-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="relative w-full min-h-[150px] hidden sm:flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Quick Links</h3>
          <div className="flex gap-3 flex-wrap">
            {cards.map((card, idx) => (
              <Link
                key={idx}
                href={card.route}
                className="relative w-[200px] h-[120px] px-6 py-10 rounded-[17px] shadow-md border text-md font-bold 
                 bg-black text-gray-300 flex items-center justify-center text-center 
                 transform transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-2xl hover:text-white

                 before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                 before:bg-[radial-gradient(circle_at_left_bottom,rgba(255,255,255,0.9),transparent_70%)] 
                 before:opacity-0 before:blur-3xl 
                 before:transition-opacity before:duration-700 before:ease-in-out 
                 hover:before:opacity-100 
                 overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-500">{card.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-6">
          {prevRoute && (
            <Link
              href={prevRoute}
              className="flex items-center justify-center gap-2 w-28 px-4 py-2 rounded-full border shadow-md text-sm font-semibold bg-white text-gray-700 hover:bg-black hover:text-white transition-colors"
            >
              <FiArrowLeft size={18} />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          )}

          {nextRoute && (
            <Link
              href={nextRoute}
              className="flex items-center justify-center gap-2 w-28 px-4 py-2 rounded-full border shadow-md text-sm font-semibold bg-white text-gray-700 hover:bg-black hover:text-white transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <FiArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {prevRoute && (
            <Link
              href={prevRoute}
              className="flex items-center justify-center w-10 h-10 rounded-full border shadow-md bg-white text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FiArrowLeft size={20} />
            </Link>
          )}

          {nextRoute && (
            <Link
              href={nextRoute}
              className="flex items-center justify-center w-10 h-10 rounded-full border shadow-md bg-white text-gray-700 hover:bg-gray-100 transition-colors ml-auto"
            >
              <FiArrowRight size={20} />
            </Link>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <div className="flex gap-3 flex-wrap">
            {cards.map((card, idx) => (
              <Link
                key={idx}
                href={card.route}
                className="px-4 py-2 rounded-xl shadow-md border text-sm font-semibold bg-black text-gray-300 hover:bg-gray-100  hover:border-1 hover:border-black hover:text-black hover:scale-105 duration-300 ease-in transition-all"
              >
                {card.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
