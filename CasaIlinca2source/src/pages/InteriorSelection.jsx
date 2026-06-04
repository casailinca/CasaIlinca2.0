import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'

export default function InteriorSelection() {
  const listRef = useRevealList()
  return (
    <>
      <div className="page">
        <Link to="/spaces" className="back-btn"><i className="fas fa-arrow-left" /> Înapoi</Link>
        <h1>Interior</h1>
        <p className="subtitle" style={{ marginBottom: 40 }}>Alege spațiul pe care vrei să-l explorezi</p>
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Link to="/camere" className="split-card">
            <div className="card-media"><img src={media('cam1_1.jpg')} alt="Camere" /></div>
            <div className="card-content">
              <span className="card-label">Dormitoare</span>
              <h2>Camere</h2>
              <p>4 dormitoare intime cu design cald și primitor.</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
          <Link to="/living" className="split-card reverse">
            <div className="card-media"><img src={media('liv1.jpg')} alt="Living" /></div>
            <div className="card-content">
              <span className="card-label">Zonă de zi</span>
              <h2>Living</h2>
              <p>Spațiu generos pentru socializare și bucătărie utilată.</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
          <Link to="/bai" className="split-card">
            <div className="card-media"><img src={media('bM1.jpg')} alt="Băi" /></div>
            <div className="card-content">
              <span className="card-label">Relaxare</span>
              <h2>Băi</h2>
              <p>Dotări moderne și finisaje de calitate superioară.</p>
              <div className="card-arrow"><i className="fas fa-arrow-right" /></div>
            </div>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  )
}
