import { useEffect } from 'react'
import PageHero from '../../components/page/PageHero.jsx'
import PackageCard from '../../components/packages/PackageCard.jsx'
import { companyName } from '../../data/siteContent.js'
import { tripPackages } from '../../data/packages.js'

export default function PackageListPage() {
  useEffect(() => {
    document.title = `Tour Packages - ${companyName}`
  }, [])

  return (
    <>
      <PageHero
        kicker="Kashmir holidays"
        title="Tour Packages"
        lead="Listed here are exclusive tour packages customized for our clients. Glance through them and plan a memorable trip with Himayah Tour And Travels. Every package is priced on request unless a rate is shown."
        crumbs={[{ label: 'Tour Packages' }]}
      />
      <section className="band">
        <div className="site-container section-inner">
          <div className="package-grid">
            {tripPackages.map((item) => (
              <PackageCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
