import { Candidate } from "@/types/candidate";

export default function OverviewTab({
  candidate,
}: {
  candidate: Candidate;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 space-y-8">
      {/* Summary */}
      <section>
        <h3 className="text-lg font-medium mb-4">Summary</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Email</p>
            <p className="text-gray-900">{candidate.email}</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Phone</p>
            <p className="text-gray-900">{candidate.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Role</p>
            <p className="text-gray-900">{candidate.role}</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Current Stage</p>
            <span className="inline-block rounded-md bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
              {candidate.stage}
            </span>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Score</p>
            <p className="text-gray-900 font-medium">
              {candidate.score !== undefined
                ? `${candidate.score}/100`
                : "—"}
            </p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Last Updated</p>
            <p className="text-gray-900">{candidate.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-lg font-medium mb-4">Skills</h3>

        {candidate.skills && candidate.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700"
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
