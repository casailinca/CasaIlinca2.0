import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import { media } from '../media'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

const images = ['bM1.jpg', 'bM2.jpg', 'c_bai.JPG']

export default function Bai() {
  const [lightbox, setLightbox] = useState(null)
  const { t } = useLang()
  return (
    <>
      <SEO title="Băi" description="Dotări moderne și finisaje de calitate la Casa Ilinca." />
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> {t.backToInterior}</Link>
        <h1>{t.baiPageTitle}</h1>
        <p className="subtitle">{t.baiPageSubtitle}</p>
        <div className="gallery-grid">
          {images.map(f => (
            <span key={f} style={{ display: 'block', cursor: 'pointer' }} onClick={() => setLightbox(media(f))}>
              <Img src={media(f)} alt={f} />
            </span>
          ))}
        </div>
      </div>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      <Nav />
    </>
  )
}
