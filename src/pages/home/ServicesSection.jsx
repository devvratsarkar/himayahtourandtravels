import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { services } from '../../data/siteContent.js'

export default function ServicesSection() {
  return (
    <section className="band">
      <div className="site-container section-inner">
        <div className="section-heading">
          <h2 className="section-kicker">Services We Offer</h2>
          <h3 className="section-title">Travel, stays, and events</h3>
          <p className="section-lead">
            Hotel booking in Srinagar, flights, cars, tours, and events, arranged by one local team.
          </p>
        </div>
        <div className="service-list">
          {services.map((item) => (
            <Link key={item.href} to={item.href} className="service-card">
              <span className="service-media">
                <img src={item.image} alt={item.alt} />
              </span>
              <span className="service-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="text-link">
                  View More
                  <FiArrowRight />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
