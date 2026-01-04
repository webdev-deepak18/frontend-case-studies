
import { Candidate } from "../../types/candidate";


interface CandidatesTableProps {
  candidates: Candidate[];
  onView: (id: string) => void;
}

const CandidatesTable = ({ candidates, onView }: CandidatesTableProps) => {

  return (
    <section className="flex-1 overflow-hidden rounded-xl border bg-white">
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 border-b bg-gray-50 px-6 py-3 text-xs font-medium text-gray-500">
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
        <div className="divide-y">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="grid grid-cols-6 gap-4 px-6 py-4 text-sm"
            >
              <div>
                <div className="font-medium text-gray-800">
                  {candidate.name}
                </div>
                <div className="text-xs text-gray-400">
                  {candidate.email}
                </div>
              </div>

              <div>{candidate.role}</div>
              <div>{candidate.stage}</div>
              <div>{candidate.score ?? "-"}</div>
              <div>{candidate.lastUpdated}</div>

              <div>
                <button
                  onClick={() => onView(candidate.id)}
                  className="rounded-md border px-3 py-1 text-xs"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CandidatesTable;
