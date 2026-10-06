import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { enquiryThanks } from '../../data/siteContent.js'

const initialForm = { name: '', email: '', phone: '', country: 'India', message: '' }

export default function EnquiryForm({ title = 'Quick Enquiry', note, presetMessage = '' }) {
  const [form, setForm] = useState({ ...initialForm, message: presetMessage })
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm({ ...initialForm, message: presetMessage })
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <h2>{title}</h2>
      <p className="enquiry-note">{note || 'Share a few details and we will reply with a quotation for your dates.'}</p>
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
  )
}
