import searchIcon from "@/assets/icons/icon-search.svg";

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter = ({ value, onChange }: SearchFilterProps) => {
  return (
    <div className="relative w-64">
      <img
        src={searchIcon}
        alt=""
        aria-hidden
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Candidates"
        className="
          w-full rounded-lg border border-gray-300 bg-white
          py-2 pl-9 pr-3 text-sm text-gray-700
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-brand-500
        "
      />
    </div>
  );
};

export default SearchFilter;
