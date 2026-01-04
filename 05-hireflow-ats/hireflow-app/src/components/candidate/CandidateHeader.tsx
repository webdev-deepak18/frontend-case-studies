import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Candidate } from "@/types/candidate";
import Modal from "@/components/ui/Modal";

export default function CandidateHeader({
  candidate,
}: {
  candidate: Candidate;
}) {
  const navigate = useNavigate();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border bg-white p-6 space-y-4">
        <div className="flex items-start justify-between">
          {/* Left: Candidate Info */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-medium">
              {candidate.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {candidate.name}
              </h2>
              <p className="text-sm text-gray-500">
                {candidate.role}
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setIsScheduleOpen(true)}
              className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
            >
              + Schedule Interview
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Interview Modal */}
      <Modal
        isOpen={isScheduleOpen}
        title="Schedule Interview"
        onClose={() => setIsScheduleOpen(false)}
      >
        <div className="space-y-4 text-sm text-gray-600">
          <p className="font-medium text-gray-800">
            Feature coming soon 🚀
          </p>

          <p>
            Interview scheduling is not available in this portfolio demo.
            This section is intentionally left as a preview of future
            functionality.
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => setIsScheduleOpen(false)}
              className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
            >
              Got it
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
