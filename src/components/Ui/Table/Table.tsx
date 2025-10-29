'use client';

// Modules
import React from 'react';
import { TableTypes } from '@/types';
import { ErrorBoundary } from '@/components/Error';
import FallSafeComponent from '@/components/Error/FallSafeComponent';

export const Table: React.FC<TableTypes> = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto border-2 rounded-xl" data-testid="table-wrapper">
      <ErrorBoundary errorComponent={FallSafeComponent}>
        <table className="min-w-full divide-y divide-gray-200" data-testid="table-element">
          <thead className="bg-black" data-testid="table-header">
            <ErrorBoundary errorComponent={FallSafeComponent}>
              <tr data-testid="table-header-row">
                {columns.map((data, idx) => (
                  <th
                    key={idx}
                    data-testid="table-header-cell"
                    scope="col"
                    className="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </ErrorBoundary>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200" data-testid="table-body">
            <ErrorBoundary errorComponent={FallSafeComponent}>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  data-testid="table-body-row"
                  className={`${
                    rowIndex % 2 === 0 ? 'bg-gray-50' : ''
                  } hover:bg-gray-100 hover:cursor-pointer transition-colors border-b border-gray-300`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      data-testid="table-body-cell"
                      className="px-6 py-4 text-md text-black whitespace-nowrap"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </ErrorBoundary>
          </tbody>
        </table>
      </ErrorBoundary>
    </div>
  );
};
