import { useState } from "react";
import chevronIcon from "@/assets/icons/icon-down.svg";

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
        onClick={() => setOpen((v) => !v)}
        className="
          flex w-full items-center justify-between
          rounded-lg border border-gray-300 bg-white
          px-3 py-2 text-sm text-gray-700
          focus:outline-none focus:ring-2 focus:ring-brand-500
        "
      >
        <span>{value || placeholder}</span>
        <img src={chevronIcon} alt="" aria-hidden className="h-3 w-3 opacity-60" />
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-md">
          {options.map((option) => {
            const active = value === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`
                  flex w-full items-center justify-between px-3 py-2 text-sm
                  hover:bg-gray-50
                  ${active ? "bg-gray-50 font-medium" : ""}
                `}
              >
                <span>{option}</span>
                {active && (
                  <span className="text-brand-600">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
