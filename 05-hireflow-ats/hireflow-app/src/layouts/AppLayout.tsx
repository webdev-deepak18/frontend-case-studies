import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '@/assets/icons/hireflow-logo.svg'
import iconDashboard from '@/assets/icons/icon-dashboard.svg'
import iconLogout from '@/assets/icons/icon-logout.svg'
import { useAuth } from '@/context/AuthContext'

export default function AppLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const displayName = user?.isGuest
    ? 'Guest User'
    : user?.fullName || 'Guest User'

  const initial = displayName.charAt(0).toUpperCase()

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden lg:grid min-h-screen grid-cols-[260px_1fr] bg-gray-50">
        {/* Sidebar */}
        <aside className="flex h-screen flex-col bg-gray-100">
          {/* Logo */}
          <div className="px-6 py-6">
            <img src={logo} alt="HireFlow" className="h-7" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 text-sm">
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 bg-brand-600 px-6 py-3 font-medium text-white"
            >
              <img src={iconDashboard} alt="" className="h-4 w-4" />
              Dashboard
            </NavLink>

            <button
              onClick={handleLogout}
              className="mt-4 flex w-full items-center gap-3 bg-white px-6 py-3 text-sm text-gray-700 hover:bg-gray-50"
            >
              <img src={iconLogout} alt="" className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main column */}
        <div className="flex h-screen min-w-0 flex-col">
          {/* Header */}
          <header className="flex h-16 items-center justify-end px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-medium text-white">
                {initial}
              </div>
              <div className="text-sm leading-tight">
                <div className="font-medium text-gray-800">
                  {displayName}
                </div>
                <div className="text-xs text-gray-500">
                  Recruiter
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 w-full overflow-y-auto p-8">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile block */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 text-center lg:hidden">
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Desktop Only Application
          </h2>
          <p className="text-gray-600">
            HireFlow is designed exclusively for desktop use.
          </p>
        </div>
      </div>
    </>
  )
}
