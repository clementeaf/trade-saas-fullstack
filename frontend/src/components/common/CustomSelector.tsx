import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectorProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  className?: string;
}

function CustomSelector({
  options,
  placeholder,
  value = '',
  onChange,
  name,
  required = false,
  className = '',
}: CustomSelectorProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string): void => {
    setSelectedValue(optionValue);
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === selectedValue);

  const baseClasses = 'relative w-full';
  const buttonClasses = 'w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left text-gray-900 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500';
  const combinedClassName = `${baseClasses} ${className}`.trim();

  return (
    <div ref={containerRef} className={combinedClassName}>
      <input type="hidden" name={name} value={selectedValue} required={required} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
      >
        <span className={selectedValue ? 'text-gray-900' : 'text-gray-400'}>
          {selectedOption ? selectedOption.label : placeholder || 'Seleccione una opción'}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                selectedValue === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedValue === option.value && (
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelector;
