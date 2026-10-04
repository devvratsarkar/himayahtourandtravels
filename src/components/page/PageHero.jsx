import { Link } from 'react-router-dom'

export default function PageHero({ kicker, title, lead, crumbs = [], image = '/images/himayah/srinagar-banner.jpg' }) {
  return (
    <section className="page-hero" style={{ '--page-hero-image': `url(${image})` }}>
      <div className="page-hero-shade" />
      <div className="site-container page-hero-copy">
        {crumbs.length > 0 ? (
          <nav className="page-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label}>
                <span aria-hidden="true"> / </span>
                {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </nav>
        ) : null}
        {kicker ? <p className="about-label">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
      </div>
    </section>
  )
}
