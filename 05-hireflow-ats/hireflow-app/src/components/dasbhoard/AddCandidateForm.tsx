import { useState } from "react";
import toast from "react-hot-toast";
import { CandidateStage, NewCandidatePayload } from "@/types/candidate";

interface AddCandidateFormProps {
  onCancel: () => void;
  onSubmit: (candidate: NewCandidatePayload) => void;
}

const ROLES = [
  "Frontend Developer",
  "UI Designer",
  "Product Manager",
  "Sales Executive",
  "Backend Developer",
  "Data Analyst",
  "DevOps Engineer",
  "Marketing Manager",
  "Full Stack Developer",
  "UX Researcher",
  "Product Designer",
  "QA Engineer",
];

const STAGES: CandidateStage[] = [
  "Applied",
  "Screening",
  "Interview",
  "Offer",
  "Hired",
  "Rejected",
];

const AddCandidateForm = ({ onCancel, onSubmit }: AddCandidateFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Select a role");
  const [stage, setStage] = useState<CandidateStage | "">("");

  const validate = () => {
    if (name.trim().length < 3 || name.trim().length > 50) {
      toast.error("Name must be between 3 and 50 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (role === "Select a role") {
      toast.error("Please select a role");
      return false;
    }

    if (!stage) {
      toast.error("Please select a stage");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    // 🔒 Type narrowing — after validate(), stage CANNOT be ""
    if (!stage) return;

    onSubmit({
      name,
      email,
      phone,
      role,
      stage, // ✅ now inferred as CandidateStage
    });

    toast.success("Candidate added successfully");
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        >
          <option>Select a role</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Stage</label>
        <select
          value={stage}
          onChange={(e) => setStage(e.target.value as CandidateStage)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        >
          <option value="">Select stage</option>
          {STAGES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border px-4 py-2 text-sm"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white"
        >
          Add Candidate
        </button>
      </div>
    </form>
  );
};

export default AddCandidateForm;
