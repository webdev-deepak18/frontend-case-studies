import { Candidate } from "@/types/candidate";

export default function OverviewTab({
  candidate,
}: {
  candidate: Candidate;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-8">
      {/* Summary */}
      <section>
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          Summary
        </h3>

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2 text-sm">
          <Info label="Email" value={candidate.email} />
          <Info label="Phone" value={candidate.phone} />
          <Info label="Role" value={candidate.role} />

          <div>
            <p className="mb-1 text-gray-500">Current Stage</p>
            <span className="inline-flex rounded-md bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
              {candidate.stage}
            </span>
          </div>

          <Info
            label="Score"
            value={
              candidate.score !== undefined
                ? `${candidate.score}/100`
                : "—"
            }
            bold
          />

          <Info
            label="Last Updated"
            value={candidate.lastUpdated}
          />
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="mb-4 text-lg font-medium text-gray-900">
          Skills
        </h3>

        {candidate.skills?.length ? (
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            No skills have been added for this candidate.
          </p>
        )}
      </section>
    </div>
  );
}

function Info({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div>
      <p className="mb-1 text-gray-500">{label}</p>
      <p className={`text-gray-900 ${bold ? "font-medium" : ""}`}>
        {value}
      </p>
    </div>
  );
}
