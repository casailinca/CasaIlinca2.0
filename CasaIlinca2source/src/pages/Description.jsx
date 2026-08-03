import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useReveal } from '../hooks/useReveal'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

export default function Description() {
  const cardRef = useReveal()
  const { t } = useLang()
  return (
    <>
      <SEO title="Despre Ilinca" description="Povestea de la poalele Ceahlăului. Pensiune confortabilă în Izvorul Muntelui, Neamț." />
      <div className="page" style={{ maxWidth: 860 }}>
        <Link to="/" className="back-btn">
          <i className="fas fa-chevron-left" /> {t.back}
        </Link>

        <h1>{t.descTitle}</h1>
        <p className="subtitle">{t.descSubtitle}</p>

        <div className="description-layout">
          <Img src={media('c_ext.jpg')} alt="Casa Ilinca" className="description-img" eager />

          <div ref={cardRef} style={{
            background: 'var(--glass)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid white',
            borderRadius: 35,
            padding: '35px 28px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
          }}>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 20 }}>{t.descP1}</p>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 20 }}>{t.descP2}</p>
            <p style={{ fontSize: '1.05rem', color: '#3a3a3c', marginBottom: 0 }}>{t.descP3}</p>
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
}
