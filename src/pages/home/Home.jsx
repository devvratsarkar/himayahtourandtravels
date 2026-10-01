import { useEffect } from 'react'
import HeroCarousel from './HeroCarousel.jsx'
import FeaturedDestinations from './FeaturedDestinations.jsx'
import ChardhamYatra from './ChardhamYatra.jsx'
import Testimonials from './Testimonials.jsx'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Heaven Uttarakhand Travels — Home: Pilgrimage & Adventure Tours in Uttarakhand'
  }, [])

  return (
    <>
      <HeroCarousel />
      <FeaturedDestinations />
      <ChardhamYatra />
      <Testimonials />
    </>
  )
}
