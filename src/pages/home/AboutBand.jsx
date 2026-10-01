import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiMap, FiUsers } from 'react-icons/fi'
import { aboutText } from '../../data/siteContent.js'

const splitAt = "Whether you're"
const lead = aboutText.slice(0, aboutText.indexOf(splitAt)).trim()
const detail = aboutText.slice(aboutText.indexOf(splitAt)).trim()

const points = [
  { icon: FiMap, text: 'Customized tours to Srinagar and other favourite places' },
  { icon: FiUsers, text: 'Trips for adventure, couples, families, and nature lovers' },
  { icon: FiHeart, text: 'Personalized itineraries planned around your budget' },
]

export default function AboutBand() {
  return (
    <section className="band">
      <div className="site-container section-inner">
        <div className="about-band">
          <div className="about-visual">
            <img src="/images/himayah/about.png" alt="Travel luggage, landmarks, and balloons" />
          </div>
          <div className="about-copy">
            <p className="about-label">About us</p>
            <h2 className="section-kicker">Himayah Tour And Travels</h2>
            <p>{lead}</p>
            <p>{detail}</p>
            <ul className="about-points">
              {points.map((item) => (
                <li key={item.text}>
                  <item.icon aria-hidden="true" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-button">
              View more
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
