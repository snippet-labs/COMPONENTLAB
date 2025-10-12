'use client';

// Modules
import { useEffect, useRef, useState } from 'react';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface DropdownVariantProps {
  label: string;
  options: DropdownOption[];
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const DropdownButtonVariant: React.FC<DropdownVariantProps> = ({
  label,
  options,
  defaultValue,
  onChange,
  placeholder = 'Select...',
}) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(defaultValue);
  const [liveMessage, setLiveMessage] = useState<string>(
    selectedValue
      ? `Selected ${options.find((option) => option.value === selectedValue)?.label}`
      : 'No option selected'
  );

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((option) => option.value === selectedValue);

  useEffect(() => {
    setLiveMessage(selectedOption ? `Selected ${selectedOption.label}` : 'No option selected');
  }, [selectedOption]);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.focus();
      const selectedIndex = options.findIndex((option) => option.value === selectedValue);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setHighlightedIndex(-1);
    }
  }, [open, selectedValue, options]);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      let nextIndex = highlightedIndex + 1;
      if (nextIndex >= options.length) nextIndex = 0;
      while (options[nextIndex]?.disabled) {
        nextIndex = (nextIndex + 1) % options.length;
      }
      setHighlightedIndex(nextIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      let prevIndex = highlightedIndex - 1;
      if (prevIndex < 0) prevIndex = options.length - 1;
      while (options[prevIndex]?.disabled) {
        prevIndex = (prevIndex - 1 + options.length) % options.length;
      }
      setHighlightedIndex(prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        const option = options[highlightedIndex];
        if (!option.disabled) {
          setSelectedValue(option.value);
          setOpen(false);
          buttonRef.current?.focus();
          onChange?.(option.value);
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const optionEl = listRef.current.children[highlightedIndex] as HTMLElement;
      optionEl?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  const handleButtonFocus = () => {
    setLiveMessage(selectedOption ? `Selected ${selectedOption.label}` : 'No option selected');
  };

  const handleOptionSelect = (value: string | number) => {
    setSelectedValue(value);
    setOpen(false);
    buttonRef.current?.focus();
    onChange?.(value);
  };

  return (
    <div className="relative inline-block text-left">
      <label className="sr-only" id="dropdown-label">
        {label}
      </label>

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="dropdown-label"
        aria-label={`${label}, selected: ${selectedOption?.label || placeholder}`}
        onClick={() => setOpen((prev) => !prev)}
        onFocus={handleButtonFocus}
        className={`px-4 py-1 rounded-xl border-dotted border-2 font-medium text-lg transition-all duration-300 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 
          flex justify-between items-center min-w-[15rem]
          bg-white border-black text-black hover:bg-black hover:text-white hover:cursor-pointer`}
      >
        {selectedOption ? selectedOption.label : placeholder}
        {open ? (
          <MdOutlineArrowDropDownCircle
            aria-hidden="true"
            className="transition-all duration-200"
          />
        ) : (
          <MdOutlineArrowDropDownCircle
            aria-hidden="true"
            className="rotate-180 transition-all duration-200"
          />
        )}
      </button>

      {open && (
        <ul
          ref={listRef}
          tabIndex={0}
          role="listbox"
          aria-labelledby="dropdown-label"
          aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
          className="relative mt-2 w-full max-h-48 overflow-auto rounded-xl border-dotted border-2 bg-white py-1 text-sm shadow-lg focus:outline-none z-10 transition-all duration-200"
          onKeyDown={handleKeyNavigation}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              role="option"
              aria-selected={option.value === selectedValue}
              aria-disabled={option.disabled || undefined}
              className={`px-7 py-1 rounded-xl cursor-pointer transition-all duration-200
                ${highlightedIndex === index ? 'bg-slate-200' : ''}
                ${option.disabled ? 'opacity-50 pointer-events-none' : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => !option.disabled && handleOptionSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>
    </div>
  );
};

export default DropdownButtonVariant;
