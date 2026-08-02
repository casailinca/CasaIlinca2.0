import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const { t, lang } = useLang()
  const convert = (url) => {
    if (window.gtagConversion) window.gtagConversion(url)
    else window.location = url
  }

  return (
    <>
      <SEO title="Contact" description="Contactează Casa Ilinca prin telefon sau WhatsApp pentru rezervări și informații." />
      <div className="page" style={{ maxWidth: 720 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> {t.back}</Link>
        <h1>{t.contactTitle}</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="split-card" style={{ cursor: 'pointer' }} onClick={() => convert('tel:0793681421')}>
            <div className="card-media"><img src={media('call.JPG')} alt="Telefon" /></div>
            <div className="card-content">
              <span className="card-label">{lang === 'ro' ? 'Rezervări' : 'Bookings'}</span>
              <h2>{t.callTitle}</h2>
              <p>{t.callDesc}</p>
            </div>
          </div>

          <div className="split-card reverse" style={{ cursor: 'pointer' }} onClick={() => convert('https://wa.me/40793681421')}>
            <div className="card-media icon-bg" style={{ background: '#25D366' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '2.5rem', color: 'white' }} />
            </div>
            <div className="card-content">
              <span className="card-label">{lang === 'ro' ? 'Mesaj Rapid' : 'Quick Message'}</span>
              <h2>{t.whatsappTitle}</h2>
              <p>{t.whatsappDesc}</p>
            </div>
          </div>

          <Link to="/location" className="split-card">
            <div className="card-media"><img src={media('pin.JPG')} alt="Locație" /></div>
            <div className="card-content">
              <span className="card-label">{lang === 'ro' ? 'Navigație' : 'Navigation'}</span>
              <h2>{t.findUsTitle}</h2>
              <p>{t.findUsDesc}</p>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
