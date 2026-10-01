import { useEffect, useState } from 'react'
import { heroKicker, heroSlides } from '../../data/siteContent.js'
import { FiArrowDown } from 'react-icons/fi'

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [cycle])

  const showNext = () => {
    setActive((current) => (current + 1) % heroSlides.length)
    setCycle((value) => value + 1)
  }

  return (
    <section className="hero-shell" aria-roledescription="carousel" aria-label="Featured journeys">
      <div className="hero">
      {heroSlides.map((slide, index) => (
        <article
          key={slide.image}
          className={`hero-slide ${index === active ? 'is-active' : ''}`}
          aria-hidden={index !== active}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={index === active ? 'kenburns' : undefined}
          />
          {index === active ? (
            <div className="hero-caption">
              <div className="site-container">
                <div className="hero-copy" key={`${slide.title}-${cycle}`}>
                  <h2 className="hero-kicker">{heroKicker}</h2>
                  <h1 className="hero-title">{slide.title}</h1>
                </div>
              </div>
            </div>
          ) : null}
        </article>
      ))}
      </div>
      <button type="button" className="hero-next" onClick={showNext} aria-label="Next slide">
        <span className="arrow-bounce">
          <FiArrowDown />
        </span>
      </button>
    </section>
  )
}
