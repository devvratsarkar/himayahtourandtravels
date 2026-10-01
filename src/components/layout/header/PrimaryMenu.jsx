import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contact, packageGroups, serviceLinks } from '../../../data/siteContent.js'
import { FiChevronDown, FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

function Dropdown({ label, items, groups, align, onNavigate }) {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    onNavigate()
  }

  return (
    <div className={`nav-dropdown ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="nav-link"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <FiChevronDown />
      </button>
      <ul className={`dropdown-panel ${groups ? 'is-mega' : ''} ${align === 'end' ? 'is-end' : ''} ${open ? 'is-open' : ''}`}>
        {groups
          ? groups.map((group) => (
              <li key={group.heading} className="dropdown-group">
                <p className="dropdown-heading">{group.heading}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <NavLink to={item.href} className="dropdown-link" onClick={close}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          : items.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} className="dropdown-link" onClick={close}>
                  {item.label}
                </NavLink>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default function PrimaryMenu({ open, onNavigate }) {
  return (
    <div className={`nav-collapse ${open ? 'is-open' : ''}`}>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          About Us
        </NavLink>
        <Dropdown label="Our Services" items={serviceLinks} onNavigate={onNavigate} />
        <Dropdown label="Tour Packages" groups={packageGroups} align="end" onNavigate={onNavigate} />
        <NavLink to="/testimonials" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          Testimonials
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          Contact Us
        </NavLink>
      </div>
      <div className="nav-mobile-contact">
        <a href={contact.phoneHref}>
          <FiPhone />
          {contact.phone}
        </a>
        <a className="header-whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export function MenuToggle({ open, onClick }) {
  return (
    <button
      type="button"
      className="nav-toggler"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
    >
      {open ? <FiX /> : <FiMenu />}
    </button>
  )
}
