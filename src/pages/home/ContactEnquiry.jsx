import { FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { contact } from '../../data/siteContent.js'
import EnquiryForm from '../../components/enquiry/EnquiryForm.jsx'

export default function ContactEnquiry() {
  return (
    <section className="band band--enquiry">
      <div className="site-container section-inner">
        <div className="enquiry-grid">
          <div className="contact-panel">
            <p className="about-label">Get in touch</p>
            <h2 className="section-kicker">Contact Information</h2>
            <p className="contact-lead">
              Hotel booking in Srinagar, flights, and car rental, arranged by {contact.person}.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true"><FiMapPin /></span>
                <div>
                  <p className="contact-label">Location</p>
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
                  <p className="contact-label">Email Id</p>
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
              <li>
                <span className="contact-icon" aria-hidden="true"><FiUser /></span>
                <div>
                  <p className="contact-label">Contact person</p>
                  <p className="contact-value">{contact.person}</p>
                </div>
              </li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
