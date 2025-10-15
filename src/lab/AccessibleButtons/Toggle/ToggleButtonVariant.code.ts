export const TOGGLE_BUTTON_VARIABLE_CODE = `// Modules
import React from 'react';

interface StandardButtonVariantProps {
  title?: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const StandardButtonVariant: React.FC<StandardButtonVariantProps> = ({
  title = 'Button',
  ariaLabel,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || title}
      className={\`px-7 py-1 rounded-xl border-dotted border-2 font-medium text-lg transition-all duration-300 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 
        \${
          disabled
            ? 'bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white border-black text-black hover:bg-black hover:text-white hover:cursor-pointer'
        }\`}
    >
      {title}
    </button>
  );
};

export default StandardButtonVariant;

`;
