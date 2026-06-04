import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Meniu">
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
      </button>
      <nav className={`site-nav${open ? ' open' : ''}`}>
        <Link to="/" className="nav-item" title="Acasă" onClick={() => setOpen(false)}>
          <i className="fas fa-home" />
        </Link>
        <Link to="/description" className="nav-item" title="Poveste" onClick={() => setOpen(false)}>
          <i className="fas fa-info-circle" />
        </Link>
        <Link to="/destinations" className="nav-item" title="Destinații" onClick={() => setOpen(false)}>
          <i className="fas fa-mountain" />
        </Link>
        <Link to="/spaces" className="nav-item" title="Spații" onClick={() => setOpen(false)}>
          <i className="fas fa-bed" />
        </Link>
        <Link to="/location" className="nav-item" title="Locație" onClick={() => setOpen(false)}>
          <i className="fas fa-map-marker-alt" />
        </Link>
        <Link to="/contact" className="nav-item" title="Contact" onClick={() => setOpen(false)}>
          <i className="fas fa-paper-plane" />
        </Link>
      </nav>
    </>
  )
}
