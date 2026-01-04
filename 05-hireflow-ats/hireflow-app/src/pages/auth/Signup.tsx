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
    // 1. Empty fields check
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error('Please fill in all required fields')
      return
    }

    // 2. Name length check
    if (fullName.length < 2 || fullName.length > 50) {
      toast.error('Full name must be between 2 and 50 characters')
      return
    }

    // 3. Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    // 4. Password length check
    if (password.length < 6 || password.length > 20) {
      toast.error('Password must be between 6 and 20 characters')
      return
    }

    // 5. Password match check
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    // 6. Duplicate email check
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

    // 7. Save user
    users.push({
      fullName,
      email,
      password
    })

    localStorage.setItem('hireflow_users', JSON.stringify(users))

    // 8. Success feedback + redirect
    toast.success('Account created successfully. Redirecting to login…')

    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">
          Create your account
        </h2>
        <p className="text-md text-gray-500 pt-2">
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

      <Button className="w-full" onClick={handleSignup}>
        Create account
      </Button>

      <div className="text-sm text-gray-500">
        Already have an account?{' '}
        <Button
          variant="link"
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>

      </div>
    </div>
  )
}
