import { NavLink } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { companyBlurb, companyName, contact, serviceItems } from '../../../data/siteContent.js'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Career with Us', href: '/career' },
  { label: 'Payment', href: '/payment' },
  { label: 'Contact Us', href: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-accent" />
      <div className="site-container footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <img src="/images/himayah/logo.png" alt={companyName} />
            </NavLink>
            <p className="footer-blurb">{companyBlurb}</p>
          </div>
          <div>
            <h2>General Links</h2>
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <NavLink to={item.href} end>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Our Services</h2>
            <ul className="footer-links">
              {serviceItems.map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Quick Contact</h2>
            <ul className="footer-contact-list">
              <li>
                <FiUser aria-hidden="true" />
                <span>
                  <strong>{contact.person}</strong>
                  <br />
                  {companyName}
                </span>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>{contact.address}</span>
              </li>
              <li>
                <FiPhone aria-hidden="true" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <FaWhatsapp aria-hidden="true" />
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="site-container">
          <p className="copyright-note">© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
