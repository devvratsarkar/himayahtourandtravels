import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { destinations, chardhamLinks } from '../../../data/siteContent.js'
import { ChevronDownIcon, MenuIcon } from '../../ui/Icons.jsx'
import SocialRow from './SocialRow.jsx'

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-dropdown">
      <button
        type="button"
        className="nav-link"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDownIcon />
      </button>
      <ul className={`dropdown-panel ${open ? 'is-open' : ''}`}>
        {items.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              className={`dropdown-link ${item.bold ? 'is-bold' : ''}`}
              onClick={() => setOpen(false)}
            >
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
          About
        </NavLink>
        <Dropdown label="Destination" items={destinations} />
        <Dropdown label="Chardham yatra" items={chardhamLinks} />
        <NavLink to="/packages" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          Packages
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`} onClick={onNavigate}>
          Contact
        </NavLink>
      </div>
      <SocialRow />
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
      <MenuIcon />
    </button>
  )
}
