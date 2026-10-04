import { useEffect } from 'react'
import PageHero from '../../components/page/PageHero.jsx'
import { companyName, testimonials } from '../../data/siteContent.js'

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = `Testimonials - ${companyName}`
  }, [])

  return (
    <>
      <PageHero
        kicker="Client reviews"
        title="Testimonials"
        lead="Guests who booked Kashmir holidays with Himayah Tour And Travels."
        crumbs={[{ label: 'Testimonials' }]}
      />
      <section className="band band--testimonials">
        <div className="site-container section-inner">
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <span className="testimonial-mark" aria-hidden="true">“</span>
                <p>{item.quote}</p>
                <div className="testimonial-person">
                  <span className="testimonial-avatar" aria-hidden="true">{initials(item.name)}</span>
                  <div>
                    <h3>{item.name}</h3>
                    {item.date ? <p className="testimonial-date">{item.date}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
