import { testimonials } from '../../data/siteContent.js'
import { StarIcon } from '../../components/ui/Icons.jsx'

export default function Testimonials() {
  return (
    <section className="band band--testimonials">
      <div className="site-container section-inner">
        <div className="section-heading section-heading--wide">
          <h2 className="display-heading">Testimonials</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-fill" />
              <div className="testimonial-content">
                <div className="testimonial-top">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.quote}</p>
                  </div>
                </div>
                <div className="testimonial-stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }, (_, star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
