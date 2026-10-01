import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PrimaryMenu, { MenuToggle } from './PrimaryMenu.jsx'

export default function PrimaryHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpeg" alt="Heaven Uttarakhand" />
        </Link>
        <MenuToggle open={open} onClick={() => setOpen((value) => !value)} />
        <PrimaryMenu open={open} onNavigate={() => setOpen(false)} />
      </nav>
    </header>
  )
}
