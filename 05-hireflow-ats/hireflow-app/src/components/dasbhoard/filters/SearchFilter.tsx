interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter = ({ value, onChange }: SearchFilterProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search candidates"
      className="w-64 rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default SearchFilter;
