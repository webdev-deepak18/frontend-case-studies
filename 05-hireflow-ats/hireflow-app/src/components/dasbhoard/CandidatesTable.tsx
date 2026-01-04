import { Candidate } from "../../types/candidate";

interface CandidatesTableProps {
  candidates: Candidate[];
  onView: (id: string) => void;
}

const stageStyles: Record<string, string> = {
  Applied: "bg-gray-100 text-gray-700",
  Screening: "bg-sky-100 text-sky-700",
  Interview: "bg-purple-100 text-purple-700",
  Offer: "bg-ambernber-100 text-amber-700",
  Hired: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
};

const GRID_COLS =
  "grid-cols-[2.2fr_1.6fr_1fr_0.6fr_1fr_0.6fr]";

const CandidatesTable = ({ candidates, onView }: CandidatesTableProps) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white">


      {/* Header */}
      <div
        className={`grid ${GRID_COLS} gap-4 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase text-gray-500 rounded-t-xl`}
      >

        <div>Candidate</div>
        <div>Role</div>
        <div>Stage</div>
        <div>Score</div>
        <div>Last Updated</div>
        <div>Actions</div>
      </div>

      {/* Empty State */}
      {candidates.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-sm text-gray-500">
          No candidates found
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {candidates.map((candidate) => {
            const initial =
              candidate.name?.charAt(0).toUpperCase() || "?";

            return (
              <div
                key={candidate.id}
                className={`grid ${GRID_COLS} gap-4 px-6 py-4 text-sm transition hover:bg-gray-50`}
              >
                {/* Candidate */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-gray-200 text-xs font-semibold text-gray-700 flex items-center justify-center">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-gray-800 truncate">
                      {candidate.name}
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {candidate.email}
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="text-gray-700 truncate">
                  {candidate.role}
                </div>

                {/* Stage */}
                <div>
                  <span
                    className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${stageStyles[candidate.stage] ||
                      "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {candidate.stage}
                  </span>
                </div>

                {/* Score */}
                <div className="text-gray-800">
                  {candidate.score ?? "-"}
                </div>

                {/* Last Updated */}
                <div className="text-gray-600">
                  {candidate.lastUpdated}
                </div>

                {/* Actions */}
                <div>
                  <button
                    onClick={() => onView(candidate.id)}
                    className="rounded-md border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CandidatesTable;
