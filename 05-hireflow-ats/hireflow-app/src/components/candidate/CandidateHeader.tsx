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
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold">
              {candidate.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {candidate.name}
              </h2>
              <p className="text-sm text-gray-500">
                {candidate.role}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setIsScheduleOpen(true)}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              + Schedule Interview
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isScheduleOpen}
        title="Schedule Interview"
        onClose={() => setIsScheduleOpen(false)}
      >
        <div className="space-y-4 text-sm text-gray-600">
          <p className="font-medium text-gray-900">
            Feature coming soon 🚀
          </p>
          <p>
            Interview scheduling is not available in this portfolio demo.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setIsScheduleOpen(false)}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm text-white hover:bg-brand-700"
            >
              Got it
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
