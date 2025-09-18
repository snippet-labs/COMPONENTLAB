// Modules
import Link from 'next/link';
import { StarterProps } from './Starter.types';

const Starter: React.FC<StarterProps> = ({
  starterTitle,
  starterDescription,
  starterVariantDescription,
  starterVariantCards,
}) => {
  return (
    <div>
      {/* STARTER-HEADER */}
      <div>
        <h1 className="ml-1 text-sm font-medium">COMPONENTLAB/</h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">{starterTitle}</h2>
        <p className="mt-10 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify">
          {starterDescription}
        </p>
      </div>
      {/* STARTER-VARIANTS */}
      <div className="mt-10">
        <p className="font-bold border-2 rounded-full bg-white px-3 py-1 inline">Variants</p>
        <div className="border-l-4 border-dotted mt-5">
          <div className="ml-5">
            <p className="text-justify">{starterVariantDescription}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-3 ml-5">
            {starterVariantCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[300px] h-[100px] md:w-[400px] md:h-[120px] 
             rounded-[20px] border bg-black/85 
             flex flex-col items-start justify-start 
             shadow-sm hover:shadow-md 
             transition-all duration-300 ease-out 
             hover:-translate-y-1 group overflow-hidden p-3 md:p-4 lg:p-6"
              >
                <span
                  className="relative text-gray-100 font-bold text-lg md:text-2xl lg:text-3xl
               transition-colors duration-300 group-hover:text-white"
                >
                  {card.label}
                </span>
                <span
                  className="relative text-gray-400 text-[12px] text-justify md:text-xs font-normal mt-1
               transition-colors duration-300 group-hover:text-gray-200"
                >
                  {card.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
