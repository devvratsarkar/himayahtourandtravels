import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiMap, FiUsers } from 'react-icons/fi'
import PageHero from '../../components/page/PageHero.jsx'
import { aboutFacts, aboutText, companyName, tripPackages } from '../../data/siteContent.js'
import PackageCard from '../../components/packages/PackageCard.jsx'

const points = [
  { icon: FiMap, text: 'Customized tours to Srinagar and other favourite places' },
  { icon: FiUsers, text: 'Trips for adventure, couples, families, and nature lovers' },
  { icon: FiHeart, text: 'Personalized itineraries planned around your budget' },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = `About Us - ${companyName}`
  }, [])

  return (
    <>
      <PageHero
        kicker="About us"
        title="Himayah Tour And Travels"
        lead="A Srinagar tour operator for holidays across Kashmir and selected Himachal destinations."
        crumbs={[{ label: 'About Us' }]}
      />
      <section className="band">
        <div className="site-container section-inner about-page">
          <div className="about-band">
            <div className="about-visual">
              <img src="/images/himayah/about.png" alt="Travel luggage, landmarks, and balloons" />
            </div>
            <div className="about-copy">
              <p>{aboutText}</p>
              <ul className="about-points">
                {points.map((item) => (
                  <li key={item.text}>
                    <item.icon aria-hidden="true" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <dl className="fact-grid">
            {aboutFacts.map((item) => (
              <div key={item.label} className="fact-card">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="section-heading">
            <h2 className="section-kicker">Popular Tour Packages</h2>
          </div>
          <div className="package-grid">
            {tripPackages.map((item) => (
              <PackageCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="section-action">
            <Link to="/contact" className="text-button">
              Contact Us
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
