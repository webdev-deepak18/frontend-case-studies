import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import HireflowLogo from "@/assets/icons/hireflow-logo.svg";

export default function AuthLayout() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left column */}
      <div className="relative flex items-center justify-center px-8">
        {/* Logo */}
        <div className="absolute top-16 left-16">
          <img
            src={HireflowLogo}
            alt="HireFlow"
            className="h-10 w-auto"
          />
        </div>

        {/* Auth form */}
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Right column – Brand panel */}
      <div className="hidden lg:flex bg-[#7C5CDE] text-white">
        <div className="flex flex-col justify-center items-start text-left w-full px-24">
          <div className="max-w-lg">
            {/* Title */}
            <h1 className="text-[56px] leading-tight font-extrabold mb-6">
              Hire Better, Faster
            </h1>

            {/* Description */}
            <p className="text-white/85 text-md leading-relaxed mb-2">
              Join thousands of recruiters who streamline their hiring
              process with HireFlow. Track candidates, schedule interviews,
              and build amazing teams.
            </p>

            {/* Feature list */}
            <ul className="space-y-0 text-base text-white/95 text-left mx-auto max-w-lg">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-3 w-3 rounded-full bg-white shrink-0" />
                <span className="text-lg">Intuitive candidate pipeline</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-2 h-3 w-3 rounded-full bg-white shrink-0" />
                <span className="text-lg">Collaborative hiring tools</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-2 h-3 w-3 rounded-full bg-white shrink-0" />
                <span className="text-lg">Data-driven decisions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
