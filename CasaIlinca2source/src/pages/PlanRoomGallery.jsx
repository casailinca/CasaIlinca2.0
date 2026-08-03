import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Lightbox from '../components/Lightbox'
import Img from '../components/Img'
import { media } from '../media'
import { useLang } from '../context/LangContext'

const UPLOAD_URL = 'https://github.com/casailinca/Welcome/upload/main/'
const GOLD = '#d4af37'

// Photos uploaded from the floor plan panel — separate from the galleries used
// elsewhere on the site (Living/Bai/Exterior/Camere pages). Add filenames here
// as the owner uploads new photos for each room via the "Adaugă Foto" button.
const roomPhotos = {
  'baie1':        { ro: 'Baie 1',       en: 'Bath 1',        images: [] },
  'centrala':     { ro: 'Centrală',     en: 'Boiler Room',   images: [] },
  'bucatarie':    { ro: 'Living & Bucătărie', en: 'Living & Kitchen', images: [] },
  'terasa':       { ro: 'Terasă',       en: 'Terrace',       images: [] },
  'scari-parter': { ro: 'Scări',        en: 'Stairs',        images: [] },
  'camera1':      { ro: 'Camera 1',     en: 'Room 1',        images: [] },
  'camera2':      { ro: 'Camera 2',     en: 'Room 2',        images: [] },
  'camera3':      { ro: 'Camera 3',     en: 'Room 3',        images: [] },
  'camera4':      { ro: 'Camera 4',     en: 'Room 4',        images: [] },
  'baie2':        { ro: 'Baie 2',       en: 'Bath 2',        images: [] },
  'scari-etaj1':  { ro: 'Scări',        en: 'Stairs',        images: [] },
}

export default function PlanRoomGallery() {
  const { roomId } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t, lang } = useLang()
  const ro = lang === 'ro'
  const room = roomPhotos[roomId]

  if (!room) {
    return (
      <>
        <div className="page" style={{ maxWidth: 760 }}>
          <Link to="/floorplan" className="back-btn"><i className="fas fa-arrow-left" /> {t.back}</Link>
          <p style={{ marginTop: 20 }}>{ro ? 'Cameră inexistentă.' : 'Room not found.'}</p>
        </div>
        <Nav />
      </>
    )
  }

  const title = ro ? room.ro : room.en
  const imageUrls = room.images.map(media)

  return (
    <>
      <SEO
        title={title}
        description={ro ? `Fotografii din planul casei — ${title}, Casa Ilinca.` : `Floor plan photos — ${title}, Casa Ilinca.`}
        image={imageUrls[0]}
      />
      <div className="page" style={{ maxWidth: 1200 }}>
        <Link to="/floorplan" className="back-btn"><i className="fas fa-arrow-left" /> {t.back}</Link>
        <h1>{title}</h1>
        <p className="subtitle" style={{ marginBottom: 30 }}>
          {ro ? 'Fotografii adăugate din planul casei' : 'Photos added from the floor plan'}
        </p>

        {room.images.length === 0 ? (
          <div style={{
            border: '1.5px dashed #ccc', borderRadius: 'var(--radius)',
            padding: '56px 24px', textAlign: 'center', color: '#8e8e93',
          }}>
            <i className="fas fa-camera-retro" style={{ fontSize: '2rem', marginBottom: 16, display: 'block', opacity: 0.5 }} />
            <p style={{ marginBottom: 20 }}>
              {ro ? 'Nu există încă fotografii pentru această cameră.' : 'No photos have been added for this room yet.'}
            </p>
            <a href={UPLOAD_URL} target="_blank" rel="noreferrer" style={{
              background: GOLD, color: '#fff', borderRadius: 20,
              padding: '10px 22px', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
            }}>
              <i className="fas fa-cloud-upload-alt" style={{ marginRight: 8 }} />
              {ro ? 'Adaugă Foto' : 'Upload Photo'}
            </a>
          </div>
        ) : (
          <>
            <div className="gallery-grid">
              {room.images.map((f, i) => (
                <span key={f} style={{ display: 'block', cursor: 'pointer' }} onClick={() => setLightboxIndex(i)}>
                  <Img src={media(f)} alt={f} eager={i === 0} />
                </span>
              ))}
            </div>
            <a href={UPLOAD_URL} target="_blank" rel="noreferrer" style={{
              background: GOLD, color: '#fff', borderRadius: 20,
              padding: '10px 22px', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              marginTop: 24,
            }}>
              <i className="fas fa-cloud-upload-alt" style={{ marginRight: 8 }} />
              {ro ? 'Adaugă Foto' : 'Upload Photo'}
            </a>
          </>
        )}
      </div>
      <Lightbox images={imageUrls} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      <Nav />
    </>
  )
}
