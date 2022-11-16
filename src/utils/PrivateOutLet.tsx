import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/header'
import { useAuth } from '../hooks/useAuth'

export function PrivateOutlet() {
  const auth = useAuth()
  const location = useLocation()

  return auth.token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
      <Navigate to="/login" state={{ from: location }} />
  )
}
