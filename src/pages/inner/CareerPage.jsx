import { useEffect, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import PageHero from '../../components/page/PageHero.jsx'
import { careerIntro, careerVacancies, companyName, enquiryThanks } from '../../data/siteContent.js'

const initialForm = { name: '', email: '', gender: 'Male', country: 'India', message: '' }

export default function CareerPage() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = `Career with Us - ${companyName}`
  }, [])

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(initialForm)
  }

  return (
    <>
      <PageHero
        kicker="Join the team"
        title="Career with Us"
        lead={careerIntro}
        crumbs={[{ label: 'Career with Us' }]}
      />
      <section className="band">
        <div className="site-container section-inner career-page">
          <p className="career-empty">{careerVacancies}</p>
          <form className="enquiry-form" onSubmit={submit}>
            <h2>Post Your Resume</h2>
            <p className="enquiry-note">Share your details and we will keep them on file until a role opens.</p>
            {sent ? <p className="enquiry-thanks">{enquiryThanks}</p> : null}
            <div className="enquiry-row">
              <label>
                Your Name
                <input required value={form.name} onChange={update('name')} />
              </label>
              <label>
                Email ID
                <input required type="email" value={form.email} onChange={update('email')} />
              </label>
            </div>
            <div className="enquiry-row">
              <label>
                Gender
                <select value={form.gender} onChange={update('gender')}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
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
              Submit
              <FiSend aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
