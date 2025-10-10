'use client';

// Modules
import React from 'react';
import Link from 'next/link';
import CodeBlock from '../CodeBlock/CodeBlock';
import { Table } from '../Table/Table';
import { InformationProps } from './Information.types';

function Information<T extends Record<string, unknown>>({
  variantTitle,
  variantDescription,
  variantTags,
  variantComponent: Component,
  variantComponentProps,
  variantCode,
  variantFileName,
  variantPropColumn,
  variantPropRow,
}: InformationProps<T>) {
  return (
    <div data-testid="information-component">
      {/* Header */}
      <div data-testid="information-header">
        <h1 className="ml-1 text-sm font-medium" data-testid="information-prefix">
          COMPONENTLAB/
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="information-title">
          {variantTitle}
        </h2>
        <p
          className="mt-10 mb-3 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify"
          data-testid="information-description"
        >
          {variantDescription}
        </p>

        {/* Tags */}
        <div className="mt-1 flex flex-wrap items-center gap-2" data-testid="information-tags">
          {variantTags.map((item, idx) => (
            <ul key={idx}>
              <li
                className="text-sm font-bold border-2 border-orange-400 px-2 rounded-xl bg-orange-300 text-black"
                data-testid={`tag-${idx}`}
              >
                {item.name}
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <div data-testid="information-demo" className="mt-10">
        <p
          className="font-bold border-2 rounded-full bg-white px-3 py-1 inline"
          data-testid="demo-label"
        >
          Demo
        </p>
        <div className="border-l-4 border-dotted mt-5">
          <div className="ml-5">
            <p className="mb-5 text-justify">
              The preview section demonstrates how the accessible component appears and behaves.
            </p>
            <div
              className="flex items-center justify-center border-2 p-5 rounded-xl bg-gray-100 h-auto"
              data-testid="demo-container"
            >
              <Component {...variantComponentProps} />
            </div>
          </div>
        </div>
      </div>

      {/* Code Section */}
      <div className="mt-10" data-testid="information-code">
        <p
          className="font-bold border-2 rounded-full bg-white px-3 py-1 inline"
          data-testid="code-label"
        >
          Code
        </p>
        <div className="border-l-4 border-dotted mt-5">
          <div className="ml-5" data-testid="code-container">
            <p className="text-justify">
              The complete code-block for the accessible component is provided below. Simply copy
              the code-block and use it in your project structure. Check STEP 3 of our{' '}
              <Link href="/installation">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 gradient-shift-animation">
                  Installation guide
                </span>
              </Link>{' '}
              to understand how to use the component locally.
            </p>
            <CodeBlock codes={variantCode} codeLanguage="tsx" fileName={variantFileName} />
          </div>
        </div>
      </div>

      {/* Props Table Section */}
      <div className="mt-10" data-testid="information-props">
        <p
          className="font-bold border-2 rounded-full bg-white px-3 py-1 inline"
          data-testid="prop-label"
        >
          Prop
        </p>
        <div className="border-l-4 border-dotted mt-5">
          <div className="ml-5" data-testid="prop-container">
            <p className="mb-5 text-justify">
              A comprehensive overview of the component&apos;s props, including their types and the
              properties they define.
            </p>
            <Table columns={variantPropColumn} rows={variantPropRow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
