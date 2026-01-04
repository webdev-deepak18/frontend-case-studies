export default function InterviewsTab() {
  return (
    <div className="rounded-xl border bg-white p-8">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          📅
        </div>

        {/* Content */}
        <div>
          <h3 className="text-base font-medium text-gray-900">
            Interviews
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            This section will display scheduled interviews, interviewers,
            outcomes, and feedback for this candidate.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            Feature coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
