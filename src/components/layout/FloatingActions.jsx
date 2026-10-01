import { useEffect, useState } from 'react'
import { contact } from '../../data/siteContent.js'
import { FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        className={`float-btn float-btn--whatsapp ${visible ? 'is-visible' : ''}`}
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <button
        type="button"
        className={`float-btn float-btn--top ${visible ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiArrowUp />
      </button>
    </>
  )
}
