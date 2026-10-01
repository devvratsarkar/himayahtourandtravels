import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import { tripPackages } from '../../data/siteContent.js'

export default function PlanYourTrip() {
  return (
    <section className="band band--trips">
      <div className="site-container section-inner">
        <div className="section-heading">
          <h2 className="section-kicker">Featured Packages</h2>
          <h3 className="section-title">Kashmir Holidays</h3>
          <p className="section-lead">
            Srinagar, Pahalgam, Gulmarg, Sonamarg, and Doodhpathri. Every package is priced on request.
          </p>
        </div>

        <div className="package-grid">
          {tripPackages.map((item) => (
            <Link key={item.href} to={item.href} className="package-card">
              <span className="package-media">
                <img src={item.image} alt="" />
                <span className="package-duration">{item.duration}</span>
              </span>
              <span className="package-body">
                <h3>{item.title}</h3>
                <span className="package-places">
                  <FiMapPin aria-hidden="true" />
                  {item.places}
                </span>
                <span className="package-foot">
                  <span className="package-meta">{item.price}</span>
                  <span className="text-link">
                    View
                    <FiArrowRight aria-hidden="true" />
                  </span>
                </span>
              </span>
            </Link>
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
