import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import { media } from '../media'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

const images = ['ext1.jpg', 'ext2.jpg', 'ext3.jpg', 'ext4.jpg']

const imageUrls = images.map(media)

export default function Exterior() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t } = useLang()
  return (
    <>
      <SEO title="Exterior" description="Curtea, foișorul și spațiile din aer liber ale Casei Ilinca." image={media('ext1.jpg')} />
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/spaces" className="back-btn"><i className="fas fa-arrow-left" /> {t.back}</Link>
        <h1>{t.exteriorPageTitle}</h1>
        <p className="subtitle">{t.exteriorPageSubtitle}</p>
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
