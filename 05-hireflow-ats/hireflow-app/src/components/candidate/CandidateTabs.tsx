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
    <div className="flex gap-6 border-b text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key as any)}
          className={`pb-3 ${activeTab === tab.key
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
