import { useEffect, useState } from 'react'
import { FiCheck, FiCopy, FiPhone, FiSmartphone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHero from '../../components/page/PageHero.jsx'
import { companyName, contact, payment } from '../../data/siteContent.js'

const steps = [
  'Scan the QR code with Google Pay, PhonePe, Paytm, BHIM, or any UPI app, or pay to the UPI ID.',
  'Enter the amount agreed in your booking quotation and confirm the payee name is Tofail Nazir.',
  'Take a screenshot of the successful payment.',
  'Send the screenshot with your name, package, and travel dates on WhatsApp so we can confirm your booking.',
]

export default function PaymentPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.title = `Payment - ${companyName}`
  }, [])

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(payment.upiId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <PageHero
        kicker="Secure UPI payment"
        title="Payment"
        lead="Pay your booking advance or balance directly to Himayah Tour And Travels through any UPI app."
        crumbs={[{ label: 'Payment' }]}
      />
      <section className="band">
        <div className="site-container section-inner payment-grid">
          <div className="payment-card">
            <p className="about-label">Scan to pay</p>
            <h2 className="payment-payee">{payment.payee}</h2>
            <div className="payment-qr">
              <img src={payment.qrImage} alt={`UPI QR code for ${payment.payee}`} />
            </div>
            <div className="payment-upi">
              <span className="payment-upi-label">UPI ID</span>
              <span className="payment-upi-id">{payment.upiId}</span>
              <button type="button" className="payment-copy" onClick={copyUpi}>
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <a className="text-button payment-app" href={payment.upiLink}>
              <FiSmartphone aria-hidden="true" />
              Pay with UPI app
            </a>
            <p className="payment-hint">The UPI app button works on mobile phones with a UPI app installed.</p>
          </div>

          <div className="payment-info">
            <h2 className="section-kicker">How to pay</h2>
            <ol className="payment-steps">
              {steps.map((line, index) => (
                <li key={line}>
                  <span className="payment-step-no">{index + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <div className="payment-note">
              <h3>Before you pay</h3>
              <p>
                Please pay only after we have shared your final quotation. Package prices on this website are approximate
                and depend on travel dates, hotel availability, and season.
              </p>
            </div>
            <div className="payment-actions">
              <a className="payment-whatsapp" href={payment.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden="true" />
                Share payment screenshot
              </a>
              <a className="payment-call" href={contact.phoneHref}>
                <FiPhone aria-hidden="true" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
