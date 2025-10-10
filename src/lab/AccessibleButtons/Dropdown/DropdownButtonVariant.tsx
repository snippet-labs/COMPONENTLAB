'use client';

import React, { useEffect, useRef, useState } from 'react';

interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface DropdownVariantProps {
  label: string;
  options: DropdownOption[];
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
}

const DropdownButtonVariant: React.FC<DropdownVariantProps> = ({
  label,
  options,
  defaultValue,
  onChange = () => {},
  placeholder = 'Select...',
}) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(defaultValue);
  const [liveMessage, setLiveMessage] = useState<string>(
    selectedValue
      ? `Selected ${options.find((o) => o.value === selectedValue)?.label}`
      : 'No option selected'
  );

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((o) => o.value === selectedValue);

  // Update live region when selection changes
  useEffect(() => {
    setLiveMessage(selectedOption ? `Selected ${selectedOption.label}` : 'No option selected');
  }, [selectedOption]);

  // Focus the listbox when opened and highlight selected/default
  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.focus();
      const selectedIndex = options.findIndex((o) => o.value === selectedValue);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setHighlightedIndex(-1);
    }
  }, [open, selectedValue, options]);

  // Handle keyboard navigation
  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      let nextIndex = highlightedIndex + 1;
      while (options[nextIndex % options.length]?.disabled) {
        nextIndex++;
      }
      setHighlightedIndex(nextIndex % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      let prevIndex = highlightedIndex - 1 + options.length;
      while (options[prevIndex % options.length]?.disabled) {
        prevIndex--;
      }
      setHighlightedIndex((prevIndex + options.length) % options.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstEnabled = options.findIndex((o) => !o.disabled);
      setHighlightedIndex(firstEnabled);
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastEnabled = options.length - 1 - [...options].reverse().findIndex((o) => !o.disabled);
      setHighlightedIndex(lastEnabled);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        const opt = options[highlightedIndex];
        if (!opt.disabled) {
          setSelectedValue(opt.value);
          onChange(opt.value);
          setOpen(false);
          buttonRef.current?.focus();
        }
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const optionEl = listRef.current.children[highlightedIndex] as HTMLElement;
      optionEl?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  // Announce default selection on button focus
  const handleButtonFocus = () => {
    setLiveMessage(selectedOption ? `Selected ${selectedOption.label}` : 'No option selected');
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
          ref={listRef}
          tabIndex={0}
          role="listbox"
          aria-labelledby="dropdown-label"
          aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
          className="relative mt-2 w-full max-h-48 overflow-auto rounded-md border bg-white py-1 text-sm shadow-lg focus:outline-none z-10"
          onKeyDown={handleKeyNavigation}
        >
          {options.map((opt, index) => (
            <li
              key={opt.value}
              id={`option-${index}`}
              role="option"
              aria-selected={opt.value === selectedValue}
              aria-disabled={opt.disabled || undefined}
              className={`px-3 py-2 cursor-pointer hover:bg-slate-100 ${
                highlightedIndex === index ? 'bg-slate-100' : ''
              } ${opt.disabled ? 'opacity-50 pointer-events-none' : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                if (!opt.disabled) {
                  setSelectedValue(opt.value);
                  onChange(opt.value);
                  setOpen(false);
                  buttonRef.current?.focus();
                }
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* Live region */}
      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>
    </div>
  );
};

export default DropdownButtonVariant;
