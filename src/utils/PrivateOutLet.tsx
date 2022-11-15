import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { SideBar } from '../components/menuSideBar'
import { useAuth } from '../hooks/useAuth'

export function PrivateOutlet() {
  const auth = useAuth()
  const location = useLocation()

  return auth.token ? (
    <>
      <SideBar />
      <Outlet />
    </>
  ) : (
      <Navigate to="/login" state={{ from: location }} />
  )
}
