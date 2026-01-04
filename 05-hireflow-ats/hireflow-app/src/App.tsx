import { Routes, Route, Navigate } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import AppLayout from "./layouts/AppLayout"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Dashboard from "./pages/dashboard/Dashboard"
import CandidateProfile from "./pages/candidate/CandidateProfile"
import ProtectedRoute from "./components/layout/ProtectedRoute"


export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/candidate/:id" element={<CandidateProfile />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
