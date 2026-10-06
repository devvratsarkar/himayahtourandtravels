import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { tripPackages } from '../../data/siteContent.js'
import PackageCard from '../../components/packages/PackageCard.jsx'

export default function PlanYourTrip() {
  const featured = tripPackages

  return (
    <section className="band band--trips">
      <div className="site-container section-inner">
        <div className="section-heading">
          <h2 className="section-kicker">Featured Packages</h2>
          <h3 className="section-title">Kashmir Holidays</h3>
          <p className="section-lead">
            Couple, honeymoon, and family holidays across Srinagar, Gulmarg, Pahalgam, and Sonamarg.
          </p>
        </div>

        <div className="package-grid">
          {featured.map((item) => (
            <PackageCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/packages" className="text-button">
            View All Package
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
