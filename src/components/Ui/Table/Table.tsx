'use client';

// Modules
import React from 'react';
import { TableTypes } from '@/types';

export const Table: React.FC<TableTypes> = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto border-2 rounded-xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-black">
          <tr>
            {columns.map((data, idx) => (
              <th
                key={idx}
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? 'bg-gray-50' : ''
              } hover:bg-gray-100 hover:cursor-pointer transition-colors border-b border-gray-300`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-md text-black whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
