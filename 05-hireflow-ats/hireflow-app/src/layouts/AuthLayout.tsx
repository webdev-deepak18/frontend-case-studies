import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function AuthLayout() {
  const { user } = useAuth();

  // derive auth state safely
  const isAuthenticated = !!user;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Auth content */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Right: Purple marketing panel */}
      <div className="hidden lg:flex bg-[#9E77ED] text-white items-center px-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Hire Better, Faster
          </h1>
          <p className="mb-6 text-white/90">
            Join thousands of recruiters who streamline their hiring
            process with HireFlow. Track candidates, schedule interviews,
            and build amazing teams.
          </p>
          <ul className="space-y-3 text-white/90">
            <li>• Intuitive candidate pipeline</li>
            <li>• Collaborative hiring tools</li>
            <li>• Data-driven decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
