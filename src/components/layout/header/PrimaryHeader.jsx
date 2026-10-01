import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contact } from '../../../data/siteContent.js'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PrimaryMenu, { MenuToggle } from './PrimaryMenu.jsx'

export default function PrimaryHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-top">
        <div className="header-top-inner">
          <p className="header-place">
            <FiMapPin />
            <span>{contact.address}</span>
          </p>
          <div className="header-top-actions">
            <a href={contact.phoneHref}>
              <FiPhone />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <FiMail />
              {contact.email}
            </a>
            <a className="header-whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <nav className="site-nav" aria-label="Primary">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/himayah/logo.png" alt="Himayah Tour And Travels" />
        </Link>
        <MenuToggle open={open} onClick={() => setOpen((value) => !value)} />
        <PrimaryMenu open={open} onNavigate={() => setOpen(false)} />
      </nav>
    </header>
  )
}
