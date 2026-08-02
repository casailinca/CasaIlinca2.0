import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import Img from '../components/Img'

export default function Spaces() {
  const listRef = useRevealList()
  return (
    <>
      <SEO title="Spații" description="Explorează exteriorul și interiorul Casei Ilinca — curte, dormitoare, living și băi." />
      <div className="page">
        <h1>Spații</h1>
        <p className="subtitle" style={{ marginBottom: 40 }}>Explorează fiecare colț al casei</p>

        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Link to="/exterior" className="split-card">
            <div className="card-media"><Img src={media('c_ext.jpg')} alt="Exterior" /></div>
            <div className="card-content">
              <span className="card-label">Outdoor</span>
              <h2>Exterior</h2>
              <p>Curtea, foișorul și zonele de relaxare.</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>

          <Link to="/interior" className="split-card reverse">
            <div className="card-media"><Img src={media('c_int.jpg')} alt="Interior" /></div>
            <div className="card-content">
              <span className="card-label">Indoor</span>
              <h2>Interior</h2>
              <p>Dormitoare, living și design rafinat.</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
