import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/',            icon: 'fas fa-house',          label: 'Acasă' },
  { to: '/description', icon: 'fas fa-feather',         label: 'Poveste' },
  { to: '/destinations',icon: 'fas fa-mountain',         label: 'Destinații' },
  { to: '/spaces',      icon: 'fas fa-layer-group',     label: 'Spații' },
  { to: '/location',    icon: 'fas fa-location-dot',    label: 'Locație' },
  { to: '/contact',     icon: 'fas fa-envelope',        label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <Link to="/rezervare" className="rezerva-btn" title="Rezervare">
        <i className="fas fa-calendar-check" />
        <span>Rezervă</span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Meniu">
        <i className={open ? 'fas fa-xmark' : 'fas fa-bars'} />
      </button>

      <nav className={`site-nav${open ? ' open' : ''}`}>
        {navItems.map(({ to, icon, label }) => {
          const active = isActive(to)
          return (
            <Link
              key={to}
              to={to}
              className={`nav-item${active ? ' active' : ''}`}
              title={label}
              onClick={() => setOpen(false)}
            >
              <i className={icon} />
              <span className="nav-label">{label}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
