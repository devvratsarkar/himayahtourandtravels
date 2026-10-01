import { testimonials } from '../../data/siteContent.js'

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export default function Testimonials() {
  return (
    <section className="band band--testimonials">
      <div className="site-container section-inner">
        <div className="section-heading">
          <p className="about-label">Testimonials</p>
          <h2 className="section-kicker">Client Reviews</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <span className="testimonial-mark" aria-hidden="true">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">{initials(item.name)}</span>
                <h3>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
