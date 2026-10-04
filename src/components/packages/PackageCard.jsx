import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'

export default function PackageCard({ item }) {
  return (
    <Link to={item.href} className="package-card">
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
  )
}
