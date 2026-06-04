import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Location() {
  return (
    <>
      <div className="page" style={{ maxWidth: 540 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> Înapoi</Link>
        <h1>Locație</h1>
        <p className="subtitle">Strada Izvorul Muntelui nr 48A<br />Izvoru Muntelui, Neamț</p>

        <div style={{ width: '100%', height: 360, borderRadius: 30, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', marginBottom: 24, background: '#eee' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.841386616428!2d26.06284381561386!3d46.94336657914619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4735a100009909f3%3A0xab72d04ecaeccd9d!2sCasa%20Ilinca!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Locație Casa Ilinca"
          />
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Casa+Ilinca+Izvoru+Muntelui"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: 'var(--primary)', color: 'white', padding: 20, borderRadius: 25, textDecoration: 'none', fontWeight: 600, fontSize: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
        >
          <i className="fas fa-location-arrow" /> Pornește Navigația
        </a>
      </div>
      <Nav />
    </>
  )
}
