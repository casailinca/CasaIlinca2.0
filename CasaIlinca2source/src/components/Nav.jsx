import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const navItems = [
  { to: '/',             icon: 'fas fa-house',         labelKey: 'home' },
  { to: '/description',  icon: 'fas fa-feather',        labelKey: 'description' },
  { to: '/destinations', icon: 'fas fa-mountain',       labelKey: 'destinations' },
  { to: '/spaces',       icon: 'fas fa-layer-group',    labelKey: 'spaces' },
  { to: '/location',     icon: 'fas fa-location-dot',   labelKey: 'location' },
  { to: '/contact',      icon: 'fas fa-envelope',       labelKey: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLang()

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <Link to="/rezervare" className="rezerva-btn" title="Rezervare">
        <i className="fas fa-calendar-check" />
        <span>{t.book}</span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Meniu">
        <i className={open ? 'fas fa-xmark' : 'fas fa-bars'} />
      </button>

      <nav className={`site-nav${open ? ' open' : ''}`}>
        {navItems.map(({ to, icon, labelKey }) => {
          const active = isActive(to)
          return (
            <Link
              key={to}
              to={to}
              className={`nav-item${active ? ' active' : ''}`}
              title={t[labelKey]}
              onClick={() => setOpen(false)}
            >
              <i className={icon} />
              <span className="nav-label">{t[labelKey]}</span>
            </Link>
          )
        })}

        <button
          className="lang-toggle"
          onClick={() => { setLang(l => l === 'ro' ? 'en' : 'ro'); setOpen(false) }}
          title="Switch language"
        >
          {lang === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}
        </button>
      </nav>
    </>
  )
}
