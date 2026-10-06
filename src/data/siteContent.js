export { tripPackages } from './packages.js'
import { activities, destinations, themes } from './packages.js'

export const companyName = 'Himayah Tour And Travels'

export const heroKicker = 'Hotel Booking in Srinagar'

export const heroSlides = [
  { image: '/images/himayah/kashmir.jpg', alt: 'Kashmir valley', title: 'Kashmir Tour' },
  { image: '/images/himayah/gulmarg.jpg', alt: 'Gulmarg', title: 'Gulmarg Tour' },
  { image: '/images/himayah/pahalgam.jpg', alt: 'Pahalgam', title: 'Pahalgam Tour' },
  { image: '/images/himayah/sonamarg.jpg', alt: 'Sonamarg', title: 'Sonamarg Tour' },
  { image: '/images/himayah/srinagar-banner.jpg', alt: 'Srinagar', title: 'Srinagar Tour' },
]

export const serviceItems = [
  {
    title: 'Tour Operators',
    image: '/images/himayah/tour-operators.jpg',
    alt: 'Tour Operators',
    text: 'One of the well-known tour operators in Jammu & Kashmir, Himayah Tour And Travels has a reputation for organising fun, timely, and safe tours across Srinagar, Gulmarg, Pahalgam, and Sonamarg.',
  },
  {
    title: 'Car & Coach Rental',
    image: '/images/himayah/car-rental.jpg',
    alt: 'Car and coach rental',
    text: 'The Jammu & Kashmir based Himayah Tour And Travels offers reliable car and coach rental services. We arrange comfortable vehicles and drivers for airport transfers, sightseeing, and outstation travel.',
  },
  {
    title: 'Flight Booking',
    image: '/images/himayah/flight.jpg',
    alt: 'Flight booking',
    text: 'Himayah Tour And Travels is a prominent tour and travel agent in Jammu & Kashmir, privileged to serve a large number of clients. We provide flight booking so your journey starts on schedule.',
  },
  {
    title: 'Event Management',
    image: '/images/himayah/events.jpg',
    alt: 'Event management',
    text: "Exceptional events just don't happen. They require creative thinking, precise planning, and meticulous attention to detail, whether the occasion is a wedding, a family celebration, or a corporate gathering.",
  },
  {
    title: 'Hotel Booking',
    image: '/images/himayah/hotel.jpg',
    alt: 'Hotel booking in Srinagar',
    text: 'Himayah Tour And Travels is well established for hotel booking in Srinagar, and also arranges stays in Gulmarg, Pahalgam, and Sonamarg to match your itinerary and budget.',
  },
]

export const packageGroups = [
  { heading: 'Tours by Destination', items: destinations.map(({ title, href }) => ({ label: title, href })) },
  { heading: 'Tours by Theme', items: themes.map(({ title, href }) => ({ label: title, href })) },
  { heading: 'Tours by Activity', items: activities.map(({ title, href }) => ({ label: title, href })) },
]

export const destinationCards = destinations.map(({ title, href, image, alt }) => ({ title, href, image, alt }))

export const activityCards = activities.map(({ title, href, image, alt }) => ({ title, href, image, alt }))

export const aboutText =
  "Himayah Tour And Travels is a renowned tour operator specializing in unforgettable holiday experiences across India. With years of expertise, we offer customized tours to popular destinations like Srinagar, and more. Whether you're an adventure enthusiast, a couple seeking a romantic getaway, a nature lover, or planning a family vacation, we design trips tailored to your preferences, interests, and budget. Our mission is to provide exceptional travel experiences with personalized itineraries, ensuring memorable and hassle-free holidays. At Himayah Tour And Travels, we are committed to creating the perfect journey for every traveler."

export const aboutFacts = [
  { label: 'Name of CEO', value: 'Tofail Ahmad' },
  { label: 'Ownership Type', value: 'Individual (Sole proprietorship)' },
  { label: 'Year of Establishment', value: 'Since 2022' },
  { label: 'Services We Offer', value: 'Hotel Booking Agents, Car & Coach Rental, Rail Ticketing Agents, Tour Operators' },
]

export const testimonials = [
  {
    name: 'Mutyalarao Desu',
    date: '24 Jan 2026',
    quote:
      'I was looking for a travel agent that can provide travel packages worth every penny. One of my colleagues referred this company to me and I contacted them for availing a tour package. Surprisingly, they provided me an amazing deal that worked wonder for me as it was under my budget. All thanks to the team!',
  },
  {
    name: 'Mani Mobile',
    date: '03 Feb 2026',
    quote:
      'My decision to put my faith in this company for longer period turns out to be the best decision I have ever made. I am enjoying their services from very long and thus, I can confidently state that they provide the best deals for any travel requirement. Thank you for turning me into a loyal client of yours.',
  },
  {
    name: 'Guest Traveller',
    date: '10 Feb 2026',
    quote:
      'As a travel agent, this company provides amazing packages in the tourism industry. The packages it offers are truly amazing. Anyone who want package from luxury to budget can contact it. I had an amazing experience of booking my travel package with them. So, you should also give it a try.',
  },
]

export const contact = {
  person: 'Tofail Ahmad',
  address: 'Srinagar, Jammu & Kashmir - 959654, India',
  email: 'himayahtourandtravels@gmail.com',
  phone: '+91 96229 93433',
  phoneHref: 'tel:+919622993433',
  whatsapp: 'https://api.whatsapp.com/send?phone=919622993433&text=Hello!%20I%20found%20your%20website%20and%20am%20interested%20in%20your%20packages.',
}

export const payment = {
  payee: 'Tofail Nazir',
  upiId: 'tofailnazir144@okaxis',
  qrImage: '/images/himayah/payment-upi-qr.jpg',
  upiLink: 'upi://pay?pa=tofailnazir144@okaxis&pn=Tofail%20Nazir&cu=INR',
  whatsapp: 'https://api.whatsapp.com/send?phone=919622993433&text=Hello!%20I%20have%20made%20a%20payment%20to%20Himayah%20Tour%20And%20Travels.%20Sharing%20the%20screenshot%20and%20my%20booking%20details.',
}

export const companyBlurb =
  'Himayah Tour And Travels is a renowned tour operator specializing in unforgettable holiday experiences across India, with customized tours to Srinagar and other favourite destinations.'

export const enquiryThanks =
  'Thank you for your enquiry. We have received your request. Our sales team will soon get in touch with you.'

export const careerIntro =
  'Himayah Tour And Travels would be pleased to have your support as a member of its team. We look forward to a long-lasting commercial tie-up with you as well as your skills and expertise, which can surely result in the best services for our clients. Feel free to come and be a part of Himayah Tour And Travels.'

export const careerVacancies = 'No Opening Yet.'
