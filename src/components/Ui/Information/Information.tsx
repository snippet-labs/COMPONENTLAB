'use client';

// Modules
import CodeBlock from '../CodeBlock/CodeBlock';
import { Table } from '../Table/Table';
import { InformationProps } from './Information.types';

// Modules
const Information: React.FC<InformationProps> = ({
  variantTitle,
  variantDescription,
  variantComponent: Component,
  variantCode,
  variantFileName,
  variantPropColumn,
  variantPropRow,
}) => {
  return (
    <div>
      <div>
        <h1 className="ml-1 text-sm font-medium">COMPONENTLAB/</h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">{variantTitle}</h2>
        <p className="mt-10 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify">
          {variantDescription}
        </p>
      </div>
      <div>
        {/* Demo */}
        <div className="mt-10">
          <p className="font-bold border-2 rounded-full bg-white px-3 py-1 inline">Demo</p>
          <div className="border-l-4 border-dotted mt-5">
            <div className="ml-5">
              <div className="flex items-center justify-center border-2 p-5 rounded-xl bg-white h-auto">
                <Component />
              </div>
            </div>
          </div>
        </div>
        {/* Code */}
        <div className="mt-10">
          <p className="font-bold border-2 rounded-full bg-white px-3 py-1 inline">Code</p>
          <div className="border-l-4 border-dotted mt-5">
            <div className="ml-5">
              <CodeBlock codes={variantCode} codeLanguage="tsx" fileName={variantFileName} />
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="mt-10">
          <p className="font-bold border-2 rounded-full bg-white px-3 py-1 inline">Prop</p>
          <div className="border-l-4 border-dotted mt-5">
            <div className="ml-5">
              <Table columns={variantPropColumn} rows={variantPropRow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
