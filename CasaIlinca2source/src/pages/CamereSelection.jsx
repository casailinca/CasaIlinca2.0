import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

const rooms = [
  { id: 1, img: 'cam1_1.jpg' },
  { id: 2, img: 'cam2_1.jpg' },
  { id: 3, img: 'cam3_1.jpg' },
  { id: 4, img: 'cam4_1.jpg' },
]

export default function CamereSelection() {
  const listRef = useRevealList()
  const { t } = useLang()
  return (
    <>
      <SEO title="Camere" description="4 dormitoare confortabile cu pat matrimonial la Casa Ilinca, Izvorul Muntelui." image={media('cam1_1.jpg')} />
      <div className="page" style={{ maxWidth: 1040 }}>
        <Link to="/interior" className="back-btn"><i className="fas fa-arrow-left" /> {t.backToInterior}</Link>
        <h1>{t.camerePageTitle}</h1>
        <p className="subtitle" style={{ marginBottom: 36 }}>{t.camerePageSubtitle}</p>
        <div ref={listRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {rooms.map((r, i) => (
            <Link key={r.id} to={`/camera/${r.id}`} className="chapter-card">
              <Img src={media(r.img)} alt={`${t.roomWord} ${r.id}`} eager={i === 0} />
              <div className="chapter-overlay"><h2>{t.roomWord} {r.id}</h2></div>
            </Link>
          ))}
        </div>
      </div>
      <Nav />
    </>
  )
}
