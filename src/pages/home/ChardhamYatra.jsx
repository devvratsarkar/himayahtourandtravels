import { Link } from 'react-router-dom'
import { chardhamSites } from '../../data/siteContent.js'

export default function ChardhamYatra() {
  return (
    <section className="band band--chardham">
      <div className="site-container section-inner">
        <div className="section-heading">
          <h2 className="section-kicker">CHARDHAM YATRA</h2>
          <h3 className="section-title">Yamunotri Gangotri Kedarnath Badrinath</h3>
          <p className="section-lead">
            The Char Dham Yatra is a deeply spiritual journey through the Himalayas, blending faith, devotion, and natural beauty. It is a sacred pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath in Uttarakhand, offering seekers inner peace and spiritual fulfillment.
          </p>
        </div>
        <div className="chardham-grid">
          {chardhamSites.map((site) => (
            <Link key={site.href} to={site.href} className="chardham-card">
              <img src={site.image} alt={site.alt} />
              <div className="chardham-overlay">
                <h3>{site.title}</h3>
                <p className="chardham-desc">{site.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
