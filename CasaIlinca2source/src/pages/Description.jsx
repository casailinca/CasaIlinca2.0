import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useReveal } from '../hooks/useReveal'
import Img from '../components/Img'

export default function Description() {
  const cardRef = useReveal()
  return (
    <>
      <SEO title="Despre Ilinca" description="Povestea de la poalele Ceahlăului. Pensiune confortabilă în Izvorul Muntelui, Neamț." />
      <div className="page" style={{ maxWidth: 860 }}>
        <Link to="/" className="back-btn">
          <i className="fas fa-chevron-left" /> Înapoi
        </Link>

        <h1>Despre Ilinca</h1>
        <p className="subtitle">Povestea de la poalele Ceahlăului</p>

        <div className="description-layout">
          <Img
            src={media('c_ext.jpg')}
            alt="Casa Ilinca"
            className="description-img"
          />

          <div ref={cardRef} style={{
            background: 'var(--glass)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid white',
            borderRadius: 35,
            padding: '35px 28px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
          }}>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 20 }}>
              Situată în inima Munților Ceahlău, în pitoreasca localitate Izvorul Muntelui, pensiunea
              noastră este punctul ideal de plecare pentru explorarea uneia dintre cele mai frumoase
              zone montane din România.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 20 }}>
              Aproape de Lacul Bicaz și de traseele spectaculoase ale Ceahlăului, oferim oaspeților
              noștri cazare confortabilă, liniște și priveliști deosebite.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 0 }}>
              Fie că îți dorești drumeții, plimbări în natură sau pur și simplu relaxare departe de
              agitație, aici vei găsi cadrul perfect pentru o vacanță reușită, în orice anotimp.
            </p>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <strong style={{ fontStyle: 'italic' }}>Vă așteptăm cu drag să ne treceți pragul!</strong>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
}
