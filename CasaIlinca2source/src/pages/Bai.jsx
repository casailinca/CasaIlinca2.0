import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Lightbox from '../components/Lightbox'
import { media } from '../media'

const images = ['bM1.jpg', 'bM2.jpg', 'c_bai.JPG']

export default function Bai() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> Înapoi la Interior</Link>
        <h1>Băi</h1>
        <p className="subtitle">Dotări moderne și finisaje de calitate</p>
        <div className="gallery-grid">
          {images.map(f => <img key={f} src={media(f)} alt={f} onClick={() => setLightbox(media(f))} />)}
        </div>
      </div>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      <Nav />
    </>
  )
}
