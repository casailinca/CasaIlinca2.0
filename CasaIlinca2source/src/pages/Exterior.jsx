import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import { media } from '../media'
import Img from '../components/Img'

const images = ['ext1.jpg', 'ext2.jpg', 'ext3.jpg', 'ext4.jpg']

export default function Exterior() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
      <SEO title="Exterior" description="Curtea, foișorul și spațiile din aer liber ale Casei Ilinca." />
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/spaces" className="back-btn"><i className="fas fa-arrow-left" /> Înapoi</Link>
        <h1>Exterior & Curte</h1>
        <p className="subtitle">Curtea, foișorul și spațiile din aer liber</p>
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
