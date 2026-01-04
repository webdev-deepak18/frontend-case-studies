import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '@/assets/icons/hireflow-logo.svg'
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
        <aside className="bg-white border-r px-6 py-6 flex flex-col">
          {/* Logo */}
          <div className="mb-10">
            <img
              src={logo}
              alt="HireFlow"
              className="h-7"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 text-sm">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'bg-[#9E77ED] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              Dashboard
            </NavLink>


            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Main column */}
        <div className="flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 bg-white border-b px-8 flex items-center justify-end">
            <div className="flex items-center gap-3">
              {/* Initial avatar */}
              <div className="w-8 h-8 rounded-full bg-[#9E77ED] text-white flex items-center justify-center text-sm font-medium">
                {initial}
              </div>

              {/* Name */}
              <div className="text-sm leading-tight">
                <div className="text-gray-800 font-medium">
                  {displayName}
                </div>
                <div className="text-gray-500 text-xs">
                  Recruiter
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-8 w-full">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile / Tablet Block */}
      <div className="flex lg:hidden min-h-screen items-center justify-center px-6 text-center bg-gray-50">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Desktop Only Application
          </h2>
          <p className="text-gray-600">
            HireFlow is designed exclusively for desktop use.
            Please access this application on a laptop or desktop computer.
          </p>
        </div>
      </div>
    </>
  )
}
