import { createContext, useContext, useEffect, useState } from 'react'

type User = {
  fullName: string
  email: string
  isGuest: boolean
}

type AuthContextType = {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Load session on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem('hireflow_current_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData: User) => {
    localStorage.setItem(
      'hireflow_current_user',
      JSON.stringify(userData)
    )
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('hireflow_current_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
