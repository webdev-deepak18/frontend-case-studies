export default function NotesTab() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          📝
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-900">
            Notes
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Recruiters will be able to add internal notes and
            collaboration comments here.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            Feature coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
