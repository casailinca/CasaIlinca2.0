import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { media } from '../media'

const rooms = [
  { id: 1, img: 'cam1_1.jpg', label: 'Camera 1' },
  { id: 2, img: 'cam2_1.jpg', label: 'Camera 2' },
  { id: 3, img: 'cam3_1.jpg', label: 'Camera 3' },
  { id: 4, img: 'cam4_1.jpg', label: 'Camera 4' },
]

export default function CamereSelection() {
  return (
    <>
      <div className="page" style={{ maxWidth: 1040 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> Înapoi la Interior</Link>
        <h1>Alege Camera</h1>
        <p className="subtitle" style={{ marginBottom: 36 }}>4 dormitoare — fiecare cu personalitatea sa</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {rooms.map(r => (
            <Link key={r.id} to={`/camera/${r.id}`} className="chapter-card">
              <img src={media(r.img)} alt={r.label} />
              <div className="chapter-overlay"><h2>{r.label}</h2></div>
            </Link>
          ))}
        </div>
      </div>
      <Nav />
    </>
  )
}
