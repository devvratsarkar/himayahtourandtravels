import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredDestinations } from '../../data/siteContent.js'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/ui/Icons.jsx'

function visibleCountFor(width) {
  if (width >= 992) return 3
  if (width >= 576) return 2
  return 1
}

export default function FeaturedDestinations() {
  const items = featuredDestinations
  const viewportRef = useRef(null)
  const [visible, setVisible] = useState(3)
  const [step, setStep] = useState(0)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const update = () => setVisible(visibleCountFor(window.innerWidth))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      if (!viewport) return
      const width = viewport.clientWidth
      const card = (width - 20 * (visible - 1)) / visible
      setStep(card + 20)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [visible])

  useEffect(() => {
    setAnimate(false)
    setIndex(0)
    const frame = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(frame)
  }, [visible])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= items.length ? current : current + 1))
    }, 1600)
    return () => window.clearInterval(timer)
  }, [items.length, visible])

  const goNext = () => {
    setIndex((current) => (current >= items.length ? current : current + 1))
  }

  const goPrev = () => {
    if (index === 0) {
      setAnimate(false)
      setIndex(items.length)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true)
          setIndex(items.length - 1)
        })
      })
      return
    }
    setIndex((current) => current - 1)
  }

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== 'transform') return
    if (index >= items.length) {
      setAnimate(false)
      setIndex(0)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true))
      })
    }
  }

  const slides = [...items, ...items]
  const cardWidth = step > 20
    ? `${step - 20}px`
    : `calc((100cqw - ${(visible - 1) * 20}px) / ${visible})`

  return (
    <section className="band band--feature">
      <div className="site-container section-inner">
        <div className="section-heading">
          <h2 className="section-kicker">FEATURED DESTINATION</h2>
          <h3 className="section-title">Explore Uttarakhand&apos;s Top Spots</h3>
          <p className="section-lead">
            Discover popular hill stations, national parks, and spiritual towns across Uttarakhand.
          </p>
        </div>

        <div className="feature-carousel">
          <button type="button" className="carousel-btn carousel-btn--prev" aria-label="Previous destinations" onClick={goPrev}>
            <ChevronLeftIcon />
          </button>
          <div className="feature-viewport" ref={viewportRef}>
            <div
              className="feature-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${index * step}px)`,
                transition: animate ? 'transform 900ms ease' : 'none',
              }}
            >
              {slides.map((item, slideIndex) => (
                <Link
                  key={`${item.href}-${slideIndex}`}
                  to={item.href}
                  className="feature-card"
                  style={{ width: cardWidth }}
                  tabIndex={slideIndex >= items.length ? -1 : undefined}
                  aria-hidden={slideIndex >= items.length}
                >
                  <img src={item.image} alt={item.alt} />
                  <div className="feature-card-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button type="button" className="carousel-btn carousel-btn--next" aria-label="Next destinations" onClick={goNext}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
