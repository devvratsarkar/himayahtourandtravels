import { useEffect, useState } from 'react'
import { ArrowUpIcon, WhatsAppIcon } from '../ui/Icons.jsx'

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
        href="https://wa.me/919410380388"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <button
        type="button"
        className={`float-btn float-btn--top ${visible ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpIcon />
      </button>
    </>
  )
}
