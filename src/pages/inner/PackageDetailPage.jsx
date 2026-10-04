import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiClock, FiMapPin } from 'react-icons/fi'
import PageHero from '../../components/page/PageHero.jsx'
import EnquiryForm from '../../components/enquiry/EnquiryForm.jsx'
import PackageCard from '../../components/packages/PackageCard.jsx'
import { companyName } from '../../data/siteContent.js'
import { getPackageBySlug, tripPackages } from '../../data/packages.js'

export default function PackageDetailPage() {
  const { slug } = useParams()
  const item = getPackageBySlug(slug)

  useEffect(() => {
    document.title = item ? `${item.title} - ${companyName}` : companyName
  }, [item])

  if (!item) {
    return (
      <>
        <PageHero title="Package not found" crumbs={[{ label: 'Tour Packages', href: '/packages' }, { label: 'Not found' }]} />
        <section className="band">
          <div className="site-container section-inner">
            <p>That holiday is not on our current list. Browse the packages we arrange from Srinagar.</p>
            <Link to="/packages" className="text-button">View All Package</Link>
          </div>
        </section>
      </>
    )
  }

  const related = tripPackages.filter((entry) => entry.slug !== item.slug).slice(0, 4)

  return (
    <>
      <PageHero
        kicker={item.duration}
        title={item.title}
        lead={item.places}
        image={item.image}
        crumbs={[{ label: 'Tour Packages', href: '/packages' }, { label: item.title }]}
      />
      <section className="band">
        <div className="site-container section-inner package-detail">
          <div className="package-detail-main">
            <ul className="package-chip-row">
              <li><FiClock aria-hidden="true" /> {item.duration}</li>
              <li><FiMapPin aria-hidden="true" /> {item.places}</li>
              <li>{item.price}</li>
            </ul>
            {item.priceNote ? <p className="section-lead">{item.priceNote}</p> : null}
            {item.overview ? (
              <>
                <h2>Overview</h2>
                <p>{item.overview}</p>
              </>
            ) : null}
            {item.inclusions ? (
              <>
                <h2>Inclusions</h2>
                <ul className="plain-list">
                  {item.inclusions.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </>
            ) : null}
            {item.notes ? <p>{item.notes}</p> : null}
            <h2>Itinerary</h2>
            <ol className="itinerary">
              {item.itinerary.map((stop) => (
                <li key={stop.day}>
                  <p className="itinerary-day">{stop.day}</p>
                  <h3>{stop.title}</h3>
                  <p>{stop.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <EnquiryForm
            title="Inquire Now for Best Deals"
            note="Tell us your dates and we will share a price on request."
            presetMessage={`I am interested in ${item.title}.`}
          />
        </div>
      </section>
      {related.length > 0 ? (
        <section className="band band--related">
          <div className="site-container">
            <div className="section-heading">
              <h2 className="section-kicker">More packages</h2>
            </div>
            <div className="package-grid">
              {related.map((entry) => (
                <PackageCard key={entry.slug} item={entry} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
