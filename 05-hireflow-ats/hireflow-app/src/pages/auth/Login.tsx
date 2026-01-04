import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import toast from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please enter your email and password')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    const users: {
      fullName: string
      email: string
      password: string
    }[] = JSON.parse(
      localStorage.getItem('hireflow_users') || '[]'
    )

    const existingUser = users.find(
      (user) => user.email === email
    )

    if (!existingUser) {
      toast.error('No account found with this email address')
      return
    }

    if (existingUser.password !== password) {
      toast.error('Incorrect password')
      return
    }

    login({
      fullName: existingUser.fullName,
      email: existingUser.email,
      isGuest: false
    })

    navigate('/dashboard')
  }

  const handleGuestLogin = () => {
    login({
      fullName: 'Guest User',
      email: 'guest@hireflow.dev',
      isGuest: true
    })

    navigate('/dashboard')
  }

  const handleForgotPassword = () => {
    toast(
      'Password recovery is disabled. This is a portfolio demo, so this functionality is not available.',
      { duration: 6000 }
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900">
          Log in to your account
        </h2>
        <p className="pt-2 text-sm text-gray-500">
          Enter your credentials to continue
        </p>
      </div>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="your@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex gap-3">
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="secondary" onClick={handleGuestLogin}>
          Guest Login
        </Button>
      </div>

      <div className="text-sm text-gray-500">
        <Button variant="link" onClick={handleForgotPassword}>
          Forgot password?
        </Button>
        <br />
        Don’t have an account?{' '}
        <Button
          variant="link"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </Button>
      </div>
    </div>
  )
}
