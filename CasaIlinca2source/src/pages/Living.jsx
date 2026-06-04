import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Lightbox from '../components/Lightbox'
import { media } from '../media'

const images = ['liv1.jpg', 'liv2.jpg', 'liv3.jpg', 'liv4.jpg', 'liv5.jpg', 'liv6.jpg']

export default function Living() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> Înapoi la Interior</Link>
        <h1>Living & Bucătărie</h1>
        <p className="subtitle">Spațiu generos pentru relaxare și socializare</p>
        <div className="gallery-grid">
          {images.map(f => <img key={f} src={media(f)} alt={f} onClick={() => setLightbox(media(f))} />)}
        </div>
      </div>
      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      <Nav />
    </>
  )
}
