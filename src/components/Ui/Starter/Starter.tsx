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
    <div data-testid="starter-component">
      {/* STARTER-HEADER */}
      <div data-testid="starter-header">
        <h1 className="ml-1 text-sm font-medium" data-testid="starter-prefix">
          COMPONENTLAB/
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl" data-testid="starter-title">
          {starterTitle}
        </h2>
        <p
          className="mt-10 text-sm md:text-lg lg:text-lg text-gray-600 font-medium text-justify"
          data-testid="starter-description"
        >
          {starterDescription}
        </p>
      </div>
      {/* STARTER-VARIANTS */}
      <div className="mt-10" data-testid="starter-variants">
        <p
          className="font-bold border-2 rounded-full bg-white px-3 py-1 inline"
          data-testid="variants-label"
        >
          Variants
        </p>
        <div className="border-l-4 border-dotted mt-5" data-testid="variants-container">
          <div className="ml-5">
            <p data-testid="variant-description" className="text-justify">
              {starterVariantDescription}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 mt-3 ml-5" data-testid="variant-cards">
            {starterVariantCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.path}
                rel="noopener noreferrer"
                className="relative w-[300px] h-[100px] md:w-[400px] md:h-[120px] 
                 rounded-[20px] border bg-black/85 
                 flex flex-col items-start justify-start 
                 shadow-sm hover:shadow-md 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-1 group overflow-hidden p-3 md:p-4 lg:p-6"
                data-testid={`variant-card-${idx}`}
              >
                <span
                  className="relative text-gray-100 font-bold text-lg md:text-2xl lg:text-3xl
                   transition-colors duration-300 group-hover:text-white"
                  data-testid={`variant-card-label-${idx}`}
                >
                  {card.label}
                </span>
                <span
                  className="relative text-gray-400 text-[12px] text-justify md:text-xs font-normal mt-1
                   transition-colors duration-300 group-hover:text-gray-200"
                  data-testid={`variant-card-description-${idx}`}
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
