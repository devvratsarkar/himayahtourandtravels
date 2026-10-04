import { Outlet } from 'react-router-dom'
import PrimaryHeader from './header/PrimaryHeader.jsx'
import SiteFooter from './footer/SiteFooter.jsx'
import FloatingActions from './FloatingActions.jsx'

export default function MainLayout() {
  return (
    <div className="site-shell">
      <PrimaryHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
