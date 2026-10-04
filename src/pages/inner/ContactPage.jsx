import { useEffect } from 'react'
import { FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHero from '../../components/page/PageHero.jsx'
import EnquiryForm from '../../components/enquiry/EnquiryForm.jsx'
import { companyName, contact } from '../../data/siteContent.js'

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact Us - ${companyName}`
  }, [])

  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Contact Us"
        lead={`Speak with ${contact.person} in Srinagar for hotel booking, cars, flights, and Kashmir holidays.`}
        crumbs={[{ label: 'Contact Us' }]}
      />
      <section className="band band--enquiry">
        <div className="site-container section-inner">
          <div className="enquiry-grid">
            <div className="contact-panel">
              <p className="about-label">Himayah Tour And Travels</p>
              <h2 className="section-kicker">Contact Information</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon" aria-hidden="true"><FiUser /></span>
                  <div>
                    <p className="contact-label">Contact Person</p>
                    <p className="contact-value">{contact.person}</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true"><FiMapPin /></span>
                  <div>
                    <p className="contact-label">Address</p>
                    <p className="contact-value">{contact.address}</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true"><FiPhone /></span>
                  <div>
                    <p className="contact-label">Call Us</p>
                    <p className="contact-value"><a href={contact.phoneHref}>{contact.phone}</a></p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true"><FiMail /></span>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon contact-icon--whatsapp" aria-hidden="true"><FaWhatsapp /></span>
                  <div>
                    <p className="contact-label">WhatsApp</p>
                    <p className="contact-value">
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
