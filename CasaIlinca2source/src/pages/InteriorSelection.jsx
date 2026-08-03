import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import Img from '../components/Img'
import { useLang } from '../context/LangContext'

export default function InteriorSelection() {
  const listRef = useRevealList()
  const { t } = useLang()
  return (
    <>
      <SEO title="Interior" description="Dormitoare, living și băi — design cald și finisaje de calitate la Casa Ilinca." />
      <div className="page">
        <Link to="/spaces" className="back-btn"><i className="fas fa-arrow-left" /> {t.back}</Link>
        <h1>{t.interiorPageTitle}</h1>
        <p className="subtitle" style={{ marginBottom: 40 }}>{t.interiorPageSubtitle}</p>
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Link to="/camere" className="split-card">
            <div className="card-media"><Img src={media('cam1_1.jpg')} alt="Camere" eager /></div>
            <div className="card-content">
              <span className="card-label">{t.camereLabel}</span>
              <h2>{t.camereTitle}</h2>
              <p>{t.camereDesc}</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
          <Link to="/living" className="split-card reverse">
            <div className="card-media"><Img src={media('liv1.jpg')} alt="Living" /></div>
            <div className="card-content">
              <span className="card-label">{t.livingLabel}</span>
              <h2>{t.livingTitle}</h2>
              <p>{t.livingDesc}</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
          <Link to="/bai" className="split-card">
            <div className="card-media"><Img src={media('bM1.jpg')} alt="Băi" /></div>
            <div className="card-content">
              <span className="card-label">{t.baiLabel}</span>
              <h2>{t.baiTitle}</h2>
              <p>{t.baiDesc}</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
