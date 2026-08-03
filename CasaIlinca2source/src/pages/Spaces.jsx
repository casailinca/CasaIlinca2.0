import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

export default function Spaces() {
  const listRef = useRevealList()
  const { t } = useLang()
  return (
    <>
      <SEO title="Spații" description="Explorează exteriorul și interiorul Casei Ilinca — curte, dormitoare, living și băi." />
      <div className="page">
        <h1>{t.spacesTitle}</h1>
        <p className="subtitle" style={{ marginBottom: 40 }}>{t.spacesSubtitle}</p>

        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Link to="/exterior" className="split-card">
            <div className="card-media"><Img src={media('c_ext.jpg')} alt="Exterior" eager /></div>
            <div className="card-content">
              <span className="card-label">{t.exteriorLabel}</span>
              <h2>{t.exteriorTitle}</h2>
              <p>{t.exteriorDesc}</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>

          <Link to="/floorplan" className="split-card reverse">
            <div className="card-media"><Img src={media('c_int.jpg')} alt="Interior" /></div>
            <div className="card-content">
              <span className="card-label">{t.interiorLabel}</span>
              <h2>{t.interiorTitle}</h2>
              <p>{t.interiorDesc}</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
