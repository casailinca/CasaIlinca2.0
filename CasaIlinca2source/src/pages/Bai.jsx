import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import { media } from '../media'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

const images = ['bM1.jpg', 'bM2.jpg', 'c_bai.JPG']

const imageUrls = images.map(media)

export default function Bai() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t } = useLang()
  return (
    <>
      <SEO title="Băi" description="Dotări moderne și finisaje de calitate la Casa Ilinca." image={media('bM1.jpg')} />
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> {t.backToInterior}</Link>
        <h1>{t.baiPageTitle}</h1>
        <p className="subtitle">{t.baiPageSubtitle}</p>
        <div className="gallery-grid">
          {images.map((f, i) => (
            <span key={f} style={{ display: 'block', cursor: 'pointer' }} onClick={() => setLightboxIndex(i)}>
              <Img src={media(f)} alt={f} eager={i === 0} />
            </span>
          ))}
        </div>
      </div>
      <Lightbox images={imageUrls} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      <Nav />
    </>
  )
}
