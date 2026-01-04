import { useState } from "react";

interface SelectFilterProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  width?: string;
}

const SelectFilter = ({
  value,
  options,
  placeholder,
  onChange,
  width = "w-40",
}: SelectFilterProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${width}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm text-gray-700"
      >
        <span>{value || placeholder}</span>
        <span className="text-gray-400">▾</span>
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-lg border bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 ${value === option ? "bg-gray-50" : ""
                }`}
            >
              <span>{option}</span>
              {value === option && (
                <span className="text-purple-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
