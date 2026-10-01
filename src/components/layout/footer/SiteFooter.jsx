import { Link } from 'react-router-dom'
import { companyBlurb } from '../../../data/siteContent.js'

export default function SiteFooter() {
  return (
    <footer>
      <div className="site-footer">
        <div className="site-container section-inner">
          <div className="footer-grid">
            <div>
              <Link to="/" className="footer-logo">
                <img src="/images/logo.jpeg" alt="Heaven Uttarakhand" />
              </Link>
              <p className="footer-blurb">{companyBlurb}</p>
            </div>
            <div className="footer-contact">
              <h2>Contact</h2>
              <div className="contact-grid">
                <div>
                  <p className="contact-label">Main Office</p>
                  <p className="contact-copy contact-copy--small">
                    Heaven Uttarakhand Travels, Near Hanuman Mandir chowk, Manpur, Kotdwara, (Lansdowne) Uttarakhand - 246149
                  </p>
                  <div className="contact-block">
                    <p className="contact-copy">
                      <a className="contact-link" href="mailto:heavenuttarakhandtravels@gmail.com">
                        heavenuttarakhandtravels@gmail.com
                      </a>
                    </p>
                    <p className="contact-copy">
                      <a className="contact-link" href="tel:+919410380388">+91 94103 80388</a>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="contact-label">Branch</p>
                  <p className="contact-copy contact-copy--small">
                    Heaven Uttarakhand Travels, 149, Kangri (Shyampur) Haridwar, Uttarakhand - 249403
                  </p>
                  <div className="contact-block">
                    <p className="contact-label">Office Number</p>
                    <p className="contact-copy contact-copy--small">
                      <a className="contact-link contact-link--small" href="tel:+917618461257">+91 761 846 1257</a>
                    </p>
                    <p className="contact-copy contact-copy--small">
                      <a className="contact-link contact-link--small" href="tel:+919258600148">+91 92586 00148</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="site-container copyright-row">
          <p className="copyright-note">
            <Link to="/" className="copyright-link">© Heaven Uttarakhand</Link>
            , All right reserved.
          </p>
          <p className="copyright-note">Approved By:- UTTARAKHAND TOURISM DEVELOPMENT BOARD</p>
        </div>
      </div>
    </footer>
  )
}
