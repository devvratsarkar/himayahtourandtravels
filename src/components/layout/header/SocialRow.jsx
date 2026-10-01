import { socialLinks } from '../../../data/siteContent.js'
import { SocialIcon } from '../../ui/Icons.jsx'

export default function SocialRow() {
  return (
    <div className="social-row">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          className="social-btn"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <SocialIcon name={item.icon} />
        </a>
      ))}
    </div>
  )
}
