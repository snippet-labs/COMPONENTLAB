// Code
export const DROPDOWN_BUTTON_VARIANT_CODE = `// Modules
import React, { useState } from 'react';

interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface DropdownVariantProps {
  label: string;
  options: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
}

const DropdownVariant: React.FC<DropdownVariantProps> = ({
  label,
  options,
  value,
  onChange = () => {},
  placeholder = 'Select...',
}) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="relative inline-block text-left">
      <label className="sr-only">{label}</label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="bg-white border-2 px-5 py-1 rounded-xl hover:cursor-pointer hover:bg-black hover:text-white duration-300 transition-all min-w-[12rem] flex justify-between items-center"
      >
        {selectedOption ? selectedOption.label : placeholder}
        <svg className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute mt-2 w-full max-h-48 overflow-auto rounded-md border bg-white py-1 text-sm shadow-lg focus:outline-none z-10"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              aria-disabled={opt.disabled || undefined}
              className={\`px-3 py-2 cursor-pointer hover:bg-slate-100 \${opt.disabled ? 'opacity-50 pointer-events-none' : ''}\`}
              onClick={() => {
                if (!opt.disabled) {
                  onChange(opt.value);
                  setOpen(false);
                }
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownVariant;
`;
