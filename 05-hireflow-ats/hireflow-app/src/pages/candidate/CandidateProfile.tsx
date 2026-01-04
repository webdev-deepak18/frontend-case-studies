import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Candidate } from "@/types/candidate";
import { candidates as mockCandidates } from "@/data/candidate";
import CandidateHeader from "@/components/candidate/CandidateHeader";
import OverviewTab from "@/components/candidate/OverviewTab";
import InterviewsTab from "@/components/candidate/InterviewTabs";
import NotesTab from "@/components/candidate/NotesTab";
import CandidateTabs from "@/components/candidate/CandidateTabs";


const LOCAL_STORAGE_KEY = "hireflow_candidates";

export default function CandidateProfile() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [activeTab, setActiveTab] =
    useState<"overview" | "interviews" | "notes">("overview");

  useEffect(() => {
    const stored = localStorage.getItem("hireflow_candidates");
    const storedCandidates = stored ? JSON.parse(stored) : [];
    const allCandidates = [...mockCandidates, ...storedCandidates];
    const found = allCandidates.find((c) => c.id === id);
    setCandidate(found || null);
  }, [id]);

  if (!candidate) {
    return <div className="p-6">Candidate not found</div>;
  }

  return (
    <div className="space-y-6">
      <CandidateHeader candidate={candidate} />

      <CandidateTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "overview" && (
        <OverviewTab candidate={candidate} />
      )}

      {activeTab === "interviews" && (
        <InterviewsTab />
      )}

      {activeTab === "notes" && (
        <NotesTab />
      )}
    </div>
  );
}

