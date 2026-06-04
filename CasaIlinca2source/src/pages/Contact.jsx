import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { media } from '../media'

export default function Contact() {
  const convert = (url) => {
    if (window.gtagConversion) window.gtagConversion(url)
    else window.location = url
  }

  return (
    <>
      <div className="page" style={{ maxWidth: 540 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> Înapoi</Link>
        <h1>Contact</h1>
        <p className="subtitle">Suntem la un click distanță pentru orice întrebare.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="split-card" style={{ cursor: 'pointer' }} onClick={() => convert('tel:0793681421')}>
            <div className="card-media"><img src={media('call.JPG')} alt="Telefon" /></div>
            <div className="card-content">
              <span className="card-label">Rezervări</span>
              <h2>Sună-ne</h2>
              <p>Contactează-ne telefonic pentru disponibilitate.</p>
            </div>
          </div>

          <div className="split-card reverse" style={{ cursor: 'pointer' }} onClick={() => convert('https://wa.me/40793681421')}>
            <div className="card-media icon-bg" style={{ background: '#25D366' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '2.5rem', color: 'white' }} />
            </div>
            <div className="card-content">
              <span className="card-label">Mesaj Rapid</span>
              <h2>WhatsApp</h2>
              <p>Scrie-ne și îți răspundem rapid pe chat.</p>
            </div>
          </div>

          <Link to="/location" className="split-card">
            <div className="card-media"><img src={media('pin.JPG')} alt="Locație" /></div>
            <div className="card-content">
              <span className="card-label">Navigație</span>
              <h2>Găsește-ne</h2>
              <p>Str. Izvorul Muntelui, Nr. 48A, Neamț.</p>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
