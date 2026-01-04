// DashboardKPISection.tsx
import KPICard from "./KPICard";

import peopleIcon from "../../assets/icons/icon-people.svg";
import filterIcon from "../../assets/icons/icon-filter.svg";
import calendarIcon from "../../assets/icons/icon-calendar.svg";
import tickIcon from "../../assets/icons/icon-tick.svg";

interface DashboardKPISectionProps {
  total: number;
  inReview: number;
  interviewing: number;
  hired: number;
}

const DashboardKPISection = ({
  total,
  inReview,
  interviewing,
  hired,
}: DashboardKPISectionProps) => {
  return (
    <section className="w-full">
      <div className="max-w-6xl grid grid-cols-4 gap-6">
        <KPICard label="Total Candidates" value={total} icon={peopleIcon} />
        <KPICard label="In Review" value={inReview} icon={filterIcon} />
        <KPICard label="Interviewing" value={interviewing} icon={calendarIcon} />
        <KPICard label="Hired" value={hired} icon={tickIcon} />
      </div>
    </section>
  );
};

export default DashboardKPISection;
