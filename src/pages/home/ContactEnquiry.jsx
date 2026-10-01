import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend, FiUser } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { contact, enquiryThanks } from '../../data/siteContent.js'

const initialForm = { name: '', email: '', phone: '', country: 'India', message: '' }

export default function ContactEnquiry() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(initialForm)
  }

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
          <form className="enquiry-form" onSubmit={submit}>
            <h2>Quick Enquiry</h2>
            <p className="enquiry-note">Share a few details and we will reply with a price on request.</p>
            {sent ? <p className="enquiry-thanks">{enquiryThanks}</p> : null}
            <div className="enquiry-row">
              <label>
                Name
                <input required value={form.name} onChange={update('name')} />
              </label>
              <label>
                Email
                <input required type="email" value={form.email} onChange={update('email')} />
              </label>
            </div>
            <div className="enquiry-row">
              <label>
                Phone
                <input required value={form.phone} onChange={update('phone')} />
              </label>
              <label>
                Country
                <input required value={form.country} onChange={update('country')} />
              </label>
            </div>
            <label>
              Message
              <textarea required rows="4" value={form.message} onChange={update('message')} />
            </label>
            <button type="submit">
              Send Enquiry
              <FiSend aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
