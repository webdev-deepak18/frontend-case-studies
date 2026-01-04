interface Props {
  activeTab: "overview" | "interviews" | "notes";
  onChange: (tab: Props["activeTab"]) => void;
}

export default function CandidateTabs({ activeTab, onChange }: Props) {
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "interviews", label: "Interviews" },
    { key: "notes", label: "Notes" },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-6 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key as any)}
            className={`pb-3 font-medium transition ${activeTab === tab.key
                ? "border-b-2 border-brand-600 text-brand-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
