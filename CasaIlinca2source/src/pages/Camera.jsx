import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

const cameraData = {
  1: { img: 'cam1_1.jpg', video: 'vid1.mp4', poster: 'cam1_2.JPG' },
  2: { img: 'cam2_1.jpg', video: 'vid2.mp4', poster: 'cam2_2.jpg' },
  3: { img: 'cam3_1.jpg', video: 'vid3.mp4', poster: 'cam3_2.HEIC' },
  4: { img: 'cam4_1.jpg', video: 'vid4.mp4', poster: 'cam4_2.HEIC' },
}

export default function Camera() {
  const { id } = useParams()
  const cam = cameraData[id]
  const gridRef = useRevealList()
  const { t } = useLang()
  if (!cam) return <p style={{ padding: 40 }}>Camera inexistentă.</p>

  const title = `${t.roomWord} ${id}`

  return (
    <>
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/camere" className="back-btn"><i className="fas fa-arrow-left" /> {t.backToCamere}</Link>
        <h1>{title}</h1>
        <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: 30, display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fas fa-bed" /> {t.spec}
        </p>
        <div ref={gridRef} className="camera-grid">
          <div className="camera-media-box">
            <Img src={media(cam.img)} alt={cam.title} />
          </div>
          <div className="camera-media-box" style={{ background: '#000' }}>
            <video autoPlay muted loop playsInline controls poster={media(cam.poster)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
              <source src={media(cam.video)} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
}
