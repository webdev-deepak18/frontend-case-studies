import { useEffect, useMemo, useState, useCallback } from "react";
import { candidates as mockCandidates } from "../../data/candidate";
import { Candidate, NewCandidatePayload } from "../../types/candidate";

import Modal from "@/components/ui/Modal";
import DashboardFilters from "@/components/dasbhoard/DashboardFilters";
import DashboardKPISection from "@/components/dasbhoard/DashboardKPISection";
import CandidatesTable from "@/components/dasbhoard/CandidatesTable";
import AddCandidateForm from "@/components/dasbhoard/AddCandidateForm";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "hireflow_candidates";

const Dashboard = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("All Stages");
  const [role, setRole] = useState("All Roles");

  const navigate = useNavigate();

  // Load candidates (mock + localStorage)
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const storedCandidates: Candidate[] = stored
      ? JSON.parse(stored)
      : [];

    setCandidates([...mockCandidates, ...storedCandidates]);
  }, []);

  // Add candidate handler
  const handleAddCandidate = useCallback(
    (data: NewCandidatePayload) => {
      const newCandidate: Candidate = {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        stage: data.stage,
        lastUpdated: "Just now",

        avatar: "",
        skills: [],
        interviews: [],
        notes: [],
      };

      const updated = [...candidates, newCandidate];
      setCandidates(updated);

      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      const storedCandidates = stored ? JSON.parse(stored) : [];

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...storedCandidates, newCandidate])
      );

      setIsAddCandidateOpen(false);
    },
    [candidates]
  );

  // Dynamic role options
  const roleOptions = useMemo(() => {
    const roles = candidates.map((c) => c.role);
    return ["All Roles", ...Array.from(new Set(roles))];
  }, [candidates]);

  // Filters
  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const matchesSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.role.toLowerCase().includes(search.toLowerCase());

      const matchesStage =
        stage === "All Stages" || c.stage === stage;

      const matchesRole =
        role === "All Roles" || c.role === role;

      return matchesSearch && matchesStage && matchesRole;
    });
  }, [candidates, search, stage, role]);

  // KPI counts
  const kpiCounts = useMemo(() => {
    return {
      total: candidates.length,
      inReview: candidates.filter(
        (c) => c.stage === "Applied" || c.stage === "Screening"
      ).length,
      interviewing: candidates.filter((c) => c.stage === "Interview").length,
      hired: candidates.filter((c) => c.stage === "Hired").length,
    };
  }, [candidates]);

  return (
    <div className="flex h-full flex-col gap-6">
      <DashboardKPISection {...kpiCounts} />

      <DashboardFilters
        search={search}
        stage={stage}
        role={role}
        roleOptions={roleOptions}
        onSearchChange={setSearch}
        onStageChange={setStage}
        onRoleChange={setRole}
        onAddCandidate={() => setIsAddCandidateOpen(true)}
      />

      <CandidatesTable
        candidates={filteredCandidates}
        onView={(id) => navigate(`/candidate/${id}`)}
      />

      <Modal
        isOpen={isAddCandidateOpen}
        title="Add New Candidate"
        onClose={() => setIsAddCandidateOpen(false)}
      >
        <AddCandidateForm
          onCancel={() => setIsAddCandidateOpen(false)}
          onSubmit={handleAddCandidate}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
