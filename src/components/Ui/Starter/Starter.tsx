import { FaArrowRightLong } from 'react-icons/fa6';
import fontMonoton from '@/helpers/font';
import { StarterProps } from './Starter.types';

const Starter: React.FC<StarterProps> = ({
  starterTitle,
  starterDescription,
  starterVarientCards,
}) => {
  return (
    <>
      <div className="flex flex-col justify-items-start lg:items-start">
        <h4>COMPONENTLAB/</h4>
        <h2
          className={`text-3xl pt-2 md:text-6xl lg:text-7xl text-black mb-14  lg:text-left ${fontMonoton.className}`}
        >
          {starterTitle}
        </h2>
      </div>
      <div className="bg-amber-200 text-gray-600 mt-2 mb-10 rounded-xl">
        {starterDescription}
      </div>
      <div className=" flex flex-col justify-items-start">
        <h2 className=" inline-block w-max text-black mt-5 text-md font-bold border-2 border-black py-2 px-4 rounded-2xl ">
          Varients
        </h2>
        <div className=" border-l-4 border-black border-dotted p-4 mt-4 flex gap-3 flex-wrap ">
          <div
            className="relative w-[200px] h-[120px] px-6 py-10 rounded-[17px] border-2 border-black shadow-md text-md font-bold 
                  text-gray-600 flex flex-col items-center justify-center text-center 
                 transform transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-2xl hover:text-black  before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                 before:bg-[radial-gradient(circle_at_left_bottom,rgba(0,0,0,0.9),transparent_70%)] 
                 before:opacity-0 before:blur-3xl 
                 before:transition-opacity before:duration-700 before:ease-in-out 
                 hover:before:opacity-100 
                 overflow-hidden"
          >
            <p className="bg-amber-300">Link 1</p>
            <FaArrowRightLong size={25} className="bg-amber-600" />
          </div>

          {/* 
                <Link
                  key={idx}
                  href={card.route}
                  className="relative w-[200px] h-[120px] px-6 py-10 rounded-[17px] border-2 border-black shadow-md text-md font-bold 
                  text-gray-600 flex items-center justify-center text-center 
                 transform transition-all duration-300 ease-in-out 
                 hover:scale-105 hover:shadow-2xl hover:text-black  before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                 before:bg-[radial-gradient(circle_at_left_bottom,rgba(0,0,0,0.9),transparent_70%)] 
                 before:opacity-0 before:blur-3xl 
                 before:transition-opacity before:duration-700 before:ease-in-out 
                 hover:before:opacity-100 
                 overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-500">{card.label}</span>
                </Link>
              ))} */}
        </div>
      </div>
    </>
  );
};

export default Starter;
