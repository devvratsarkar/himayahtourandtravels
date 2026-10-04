import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHero from '../../components/page/PageHero.jsx'
import PackageCard from '../../components/packages/PackageCard.jsx'
import { companyName } from '../../data/siteContent.js'
import {
  getActivity,
  getDestination,
  getPackagesForActivity,
  getPackagesForDestination,
  getPackagesForTheme,
  getTheme,
} from '../../data/packages.js'

const kinds = {
  destination: {
    parent: { label: 'Tour Packages', href: '/packages' },
    resolve: getDestination,
    packages: getPackagesForDestination,
  },
  theme: {
    parent: { label: 'Tour Packages', href: '/packages' },
    resolve: getTheme,
    packages: getPackagesForTheme,
  },
  activity: {
    parent: { label: 'Tour Packages', href: '/packages' },
    resolve: getActivity,
    packages: getPackagesForActivity,
  },
}

export default function CollectionPage({ kind, slug: slugProp }) {
  const { slug: slugParam } = useParams()
  const slug = slugProp || slugParam
  const config = kinds[kind]
  const entry = config.resolve(slug)
  const packages = entry ? config.packages(slug) : []

  useEffect(() => {
    document.title = entry ? `${entry.title} - ${companyName}` : companyName
  }, [entry])

  if (!entry) {
    return (
      <>
        <PageHero title="Not found" crumbs={[config.parent, { label: 'Not found' }]} />
        <section className="band">
          <div className="site-container section-inner">
            <p>We could not find that collection.</p>
            <Link to="/packages" className="text-button">View All Package</Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        kicker="Tour packages"
        title={entry.title}
        lead={entry.lead}
        image={entry.image}
        crumbs={[config.parent, { label: entry.title }]}
      />
      <section className="band">
        <div className="site-container section-inner">
          {packages.length > 0 ? (
            <div className="package-grid">
              {packages.map((item) => (
                <PackageCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <p className="collection-empty">
              No listed package sits in this collection yet. Write to us and we will still plan a custom itinerary.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
