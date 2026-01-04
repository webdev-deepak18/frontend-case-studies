import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { toast } from 'react-hot-toast'

export default function Signup() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error('Please fill in all required fields')
      return
    }

    if (fullName.length < 2 || fullName.length > 50) {
      toast.error('Full name must be between 2 and 50 characters')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (password.length < 6 || password.length > 20) {
      toast.error('Password must be between 6 and 20 characters')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    const users = JSON.parse(
      localStorage.getItem('hireflow_users') || '[]'
    )

    const emailExists = users.some(
      (user: { email: string }) => user.email === email
    )

    if (emailExists) {
      toast.error('An account with this email already exists')
      return
    }

    users.push({
      fullName,
      email,
      password
    })

    localStorage.setItem('hireflow_users', JSON.stringify(users))

    toast.success('Account created successfully. Redirecting to login…')

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900">
          Create your account
        </h2>
        <p className="pt-2 text-sm text-gray-500">
          Get started with HireFlow in a few seconds
        </p>
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Full name"
          maxLength={50}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          maxLength={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          maxLength={20}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button className="w-full" variant="primary" onClick={handleSignup}>
        Create account
      </Button>

      <div className="text-sm text-gray-500">
        Already have an account?{' '}
        <Button variant="link" onClick={() => navigate('/login')}>
          Log in
        </Button>
      </div>
    </div>
  )
}
