// Modules
import { div } from 'motion/react-client';
import React from 'react';
import { useState } from 'react';


interface ToggleButtonVariantProps {
  title: string;
  ariaLabel?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ToggleButtonVariant: React.FC<ToggleButtonVariantProps> = ({
  title = 'Toggle',
  ariaLabel,
  onClick,
  disabled = false,
}) => {

    const [isOn, setIsOn] = useState(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsOn(!isOn);
      console.log('Three');
      onClick(event);
    };

return (

  <div className='flex items-center justify-center gap-3'>
    {title}
    <button
      onClick={(event)=>{
        handleToggle(event);
        console.log("One");
      }}
      aria-pressed={isOn}
      className={`relative w-14.5 h-8 flex items-center border-dotted border-2 rounded-full transition-colors duration-300 ${
        isOn ? "bg-black" : "bg-gray-300"
      }`}
    >
      <span
        className={`px-2 absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  </div>
  );}

export default ToggleButtonVariant;