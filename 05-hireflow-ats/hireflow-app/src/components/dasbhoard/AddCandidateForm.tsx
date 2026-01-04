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
  const [role, setRole] = useState("");
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

    if (!role) {
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
    if (!stage) return;

    onSubmit({ name, email, phone, role, stage });
    toast.success("Candidate added successfully");
  };

  return (
    <form className="space-y-4 ">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        >
          <option value="">Select a role</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Stage
        </label>
        <select
          value={stage}
          onChange={(e) => setStage(e.target.value as CandidateStage)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
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
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Add Candidate
        </button>
      </div>
    </form>
  );
};

export default AddCandidateForm;
