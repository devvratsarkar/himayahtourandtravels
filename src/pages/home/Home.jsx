import { useEffect } from 'react'
import HeroCarousel from './HeroCarousel.jsx'
import PlanYourTrip from './PlanYourTrip.jsx'
import CardCarousel from './CardCarousel.jsx'
import ServicesSection from './ServicesSection.jsx'
import AboutBand from './AboutBand.jsx'
import Testimonials from './Testimonials.jsx'
import ContactEnquiry from './ContactEnquiry.jsx'
import { activityCards, destinationCards } from '../../data/siteContent.js'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Himayah Tour And Travels - Hotel Booking in Srinagar, Flight Booking India'
  }, [])

  return (
    <>
      <HeroCarousel />
      <PlanYourTrip />
      <CardCarousel
        eyebrow="Packages by Destination"
        title="Explore Kashmir"
        lead="Kashmir, Srinagar, Gulmarg, Pahalgam, Sonamarg, and Budgam."
        items={destinationCards}
      />
      <ServicesSection />
      <CardCarousel
        eyebrow="Packages by Activity"
        title="Choose how you travel"
        lead="Sightseeing, skiing, riding, boating, camping, trekking, and angling."
        items={activityCards}
      />
      <AboutBand />
      <Testimonials />
      <ContactEnquiry />
    </>
  )
}
