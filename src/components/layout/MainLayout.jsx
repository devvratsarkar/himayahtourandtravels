import { Outlet } from 'react-router-dom'
import PrimaryHeader from './header/PrimaryHeader.jsx'
import SiteFooter from './footer/SiteFooter.jsx'
import FloatingActions from './FloatingActions.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-svh bg-white">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
