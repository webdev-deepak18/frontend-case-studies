import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'

type ProtectedRouteProps = {
  children: ReactNode
}

export default function ProtectedRoute({
  children
}: ProtectedRouteProps) {
  const { user } = useAuth()

  // Fallback check for refresh
  const storedUser = localStorage.getItem(
    'hireflow_current_user'
  )

  if (!user && !storedUser) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
