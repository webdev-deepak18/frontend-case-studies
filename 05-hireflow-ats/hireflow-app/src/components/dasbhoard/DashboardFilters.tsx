import SearchFilter from "./filters/SearchFilter";
import SelectFilter from "./filters/SelectFilter";
import Button from "../ui/Button";

interface DashboardFiltersProps {
  search: string;
  stage: string;
  role: string;
  roleOptions: string[];
  onSearchChange: (value: string) => void;
  onStageChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onAddCandidate: () => void;
}


const STAGES = [
  "All Stages",
  "Applied",
  "Screening",
  "Interview",
  "Offer",
  "Hired",
  "Rejected",
];

const ROLES = [
  "All Roles",
  "Frontend Developer",
  "UI Designer",
  "Product Manager",
  "Sales Executive",
  "Backend Developer",
  "Data Analyst",
  "DevOps Engineer",
  "Marketing Manager",
  "Full Stack Developer",
  "UX Researcher",
  "Product Designer",
  "QA Engineer",
];

const DashboardFilters = ({
  search,
  stage,
  role,
  onSearchChange,
  onStageChange,
  onRoleChange,
  onAddCandidate,
}: DashboardFiltersProps) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <SearchFilter value={search} onChange={onSearchChange} />

        <SelectFilter
          value={stage}
          placeholder="All Stages"
          options={STAGES}
          onChange={onStageChange}
        />

        <SelectFilter
          value={role}
          placeholder="All Roles"
          options={ROLES}
          onChange={onRoleChange}
        />


        <button
          onClick={() => {
            onSearchChange("");
            onStageChange("All Stages");
            onRoleChange("All Roles");
          }}
          className="text-sm text-gray-500"
        >
          Clear Filters
        </button>
      </div>

      <Button onClick={onAddCandidate} style={{ backgroundColor: "purple" }}>
        + Add Candidate
      </Button>
    </section>
  );
};

export default DashboardFilters;
