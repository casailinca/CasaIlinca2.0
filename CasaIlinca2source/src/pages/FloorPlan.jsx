import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'

const WALL = '#1d1d1f'
const GOLD = '#d4af37'

function Room({ x, y, w, h, label, sub, to, dashed, muted, nav }) {
  const [hov, setHov] = useState(false)
  const active = !!to && !muted
  const fs = Math.max(9, Math.min(13, (w / Math.max(label.length, 3)) * 1.7))

  return (
    <g
      onClick={active ? () => nav(to) : undefined}
      onMouseEnter={() => active && setHov(true)}
      onMouseLeave={() => active && setHov(false)}
      style={{ cursor: active ? 'pointer' : 'default' }}
    >
      <rect
        x={x} y={y} width={w} height={h}
        fill={muted ? 'rgba(0,0,0,0.04)' : hov ? 'rgba(212,175,55,0.16)' : 'rgba(255,255,255,0.7)'}
        stroke={hov ? GOLD : WALL}
        strokeWidth={hov ? 2.5 : 1.5}
        strokeDasharray={dashed ? '9 4' : undefined}
        style={{ transition: 'fill 0.2s, stroke 0.2s' }}
      />
      <text
        x={x + w / 2} y={y + h / 2 + (sub ? -9 : 0)}
        textAnchor="middle" dominantBaseline="middle"
        fontSize={fs} fontWeight="700"
        fontFamily="-apple-system, system-ui, sans-serif"
        fill={hov ? GOLD : muted ? '#bbb' : WALL}
        style={{ transition: 'fill 0.2s', userSelect: 'none', pointerEvents: 'none' }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2} y={y + h / 2 + 9}
          textAnchor="middle" dominantBaseline="middle"
          fontSize={Math.max(8, fs - 2)}
          fontFamily="-apple-system, system-ui, sans-serif"
          fill={hov ? GOLD : '#8e8e93'}
          style={{ transition: 'fill 0.2s', userSelect: 'none', pointerEvents: 'none' }}
        >
          {sub}
        </text>
      )}
    </g>
  )
}

function Hatch({ x, y, w, h, label }) {
  return (
    <g>
      <defs>
        <pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke={WALL} strokeWidth="0.8" opacity="0.2" />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill="url(#hatch)" stroke={WALL} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle"
        fontSize={9} fontFamily="-apple-system, system-ui, sans-serif"
        fill={WALL} opacity={0.4} style={{ userSelect: 'none', pointerEvents: 'none' }}>
        {label}
      </text>
    </g>
  )
}

function Level0Blueprint({ nav, lang }) {
  const ro = lang === 'ro'
  return (
    <svg viewBox="0 0 560 390" width="100%"
      style={{ maxWidth: 680, display: 'block', margin: '0 auto', borderRadius: 12, background: 'rgba(245,245,247,0.4)' }}>

      {/* Outer border */}
      <rect x={1} y={1} width={558} height={388} fill="none" stroke={WALL} strokeWidth={2.5} />

      {/* Left column / right area divider */}
      <line x1={140} y1={1} x2={140} y2={389} stroke={WALL} strokeWidth={1.5} />

      {/* Left column horizontal dividers */}
      <line x1={1} y1={120} x2={140} y2={120} stroke={WALL} strokeWidth={1.5} />
      <line x1={1} y1={255} x2={140} y2={255} stroke={WALL} strokeWidth={1.5} />

      {/* Terrace / living divider */}
      <line x1={140} y1={155} x2={559} y2={155} stroke={WALL} strokeWidth={1.5} />

      {/* Boiler Room */}
      <Room x={1} y={1} w={139} h={119} label={ro ? 'Centrală' : 'Boiler Room'} muted nav={nav} />

      {/* Bath 1 */}
      <Room x={1} y={120} w={139} h={135} label={ro ? 'Baie 1' : 'Bath 1'} to="/bai" nav={nav} />

      {/* Stairs */}
      <Hatch x={1} y={255} w={139} h={134} label={ro ? 'Scări' : 'Stairs'} />

      {/* Terrace */}
      <Room x={140} y={1} w={419} h={154}
        label={ro ? 'Terasă' : 'The Terrace'}
        sub={ro ? 'Pergolă & relaxare' : 'Pergola & outdoor'}
        to="/exterior" dashed nav={nav} />

      {/* Living Room */}
      <Room x={140} y={155} w={419} h={234}
        label={ro ? 'Living & Bucătărie' : 'Living Room'}
        sub={ro ? 'Spațiu comun' : 'Common space'}
        to="/living" nav={nav} />

      {/* North label */}
      <text x={544} y={378} fontSize={9} fill={WALL} opacity={0.35}
        fontFamily="system-ui" style={{ userSelect: 'none' }}>N↑</text>
    </svg>
  )
}

function Level1Blueprint({ nav, lang }) {
  const ro = lang === 'ro'
  const rw = ro ? 'Camera' : 'Room'

  return (
    <svg viewBox="0 0 560 440" width="100%"
      style={{ maxWidth: 680, display: 'block', margin: '0 auto', borderRadius: 12, background: 'rgba(245,245,247,0.4)' }}>

      {/* ── UPPER SECTION ── */}
      <rect x={1} y={1} width={558} height={168} fill="none" stroke={WALL} strokeWidth={2.5} />

      {/* Vertical dividers upper rooms */}
      <line x1={110} y1={1} x2={110} y2={112} stroke={WALL} strokeWidth={1.5} />
      <line x1={230} y1={1} x2={230} y2={112} stroke={WALL} strokeWidth={1.5} />
      <line x1={440} y1={1} x2={440} y2={168} stroke={WALL} strokeWidth={1.5} />

      {/* Hallway divider */}
      <line x1={1} y1={112} x2={440} y2={112} stroke={WALL} strokeWidth={1.5} />

      {/* Bath 2 */}
      <Room x={1} y={1} w={109} h={111} label={ro ? 'Baie 2' : 'Bath 2'} to="/bai" nav={nav} />

      {/* Room 2 */}
      <Room x={110} y={1} w={120} h={111} label={`${rw} 2`} to="/camera/2" nav={nav} />

      {/* Room 3 */}
      <Room x={230} y={1} w={210} h={111} label={`${rw} 3`} to="/camera/3" nav={nav} />

      {/* Hallway */}
      <Room x={1} y={112} w={439} h={56} label={ro ? 'Hol' : 'Hallway'} muted nav={nav} />

      {/* Stairs upper right */}
      <Hatch x={440} y={1} w={119} h={168} label={ro ? 'Scări' : 'Stairs'} />

      {/* ── CONNECTING GAP ── */}
      <line x1={90} y1={168} x2={90} y2={238} stroke={WALL} strokeWidth={1.2} strokeDasharray="4 3" opacity={0.35} />
      <line x1={440} y1={168} x2={440} y2={238} stroke={WALL} strokeWidth={1.2} strokeDasharray="4 3" opacity={0.35} />

      {/* ── LOWER SECTION ── */}
      <rect x={1} y={238} width={558} height={201} fill="none" stroke={WALL} strokeWidth={2.5} />

      {/* Vertical divider lower */}
      <line x1={155} y1={238} x2={155} y2={439} stroke={WALL} strokeWidth={1.5} />

      {/* Room 1 */}
      <Room x={1} y={238} w={154} h={201} label={`${rw} 1`} to="/camera/1" nav={nav} />

      {/* Room 4 */}
      <Room x={155} y={238} w={404} h={201} label={`${rw} 4`} to="/camera/4" nav={nav} />

      {/* North label */}
      <text x={544} y={430} fontSize={9} fill={WALL} opacity={0.35}
        fontFamily="system-ui" style={{ userSelect: 'none' }}>N↑</text>
    </svg>
  )
}

export default function FloorPlan() {
  const [level, setLevel] = useState(null)
  const navigate = useNavigate()
  const { t, lang } = useLang()
  const ro = lang === 'ro'

  const floors = [
    {
      id: 0,
      icon: 'fas fa-home',
      title: ro ? 'Parter' : 'Ground Floor',
      desc: ro ? 'Living · Baie · Terasă' : 'Living Room · Bath · Terrace',
    },
    {
      id: 1,
      icon: 'fas fa-bed',
      title: ro ? 'Etaj 1' : 'Level 1',
      desc: ro ? '4 Dormitoare · Baie · Hol' : '4 Bedrooms · Bath · Hallway',
    },
  ]

  return (
    <>
      <SEO
        title={ro ? 'Planul Casei' : 'Floor Plan'}
        description="Explorează fiecare cameră și spațiu al casei prin planul interactiv."
      />
      <div className="page" style={{ maxWidth: 760 }}>
        {level !== null && (
          <button
            className="back-btn"
            onClick={() => setLevel(null)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: 16 }}
          >
            <i className="fas fa-arrow-left" /> {t.back}
          </button>
        )}

        {level === null ? (
          <>
            <h1>{ro ? 'Planul Casei' : 'Floor Plan'}</h1>
            <p className="subtitle" style={{ marginBottom: 36 }}>
              {ro ? 'Alege etajul pe care vrei să-l explorezi' : 'Choose the floor you want to explore'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {floors.map(fl => (
                <button
                  key={fl.id}
                  onClick={() => setLevel(fl.id)}
                  style={{
                    background: '#fff',
                    border: '1.5px solid #1d1d1f',
                    borderRadius: 'var(--radius)',
                    padding: '44px 24px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <i className={fl.icon} style={{ fontSize: '2rem', color: GOLD, display: 'block', marginBottom: 14 }} />
                  <h2 style={{ margin: 0, fontSize: '1.1rem', color: WALL }}>{fl.title}</h2>
                  <p style={{ margin: '8px 0 0', color: '#8e8e93', fontSize: '0.85rem' }}>{fl.desc}</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: 6 }}>
              {level === 0 ? (ro ? 'Parter' : 'Ground Floor') : (ro ? 'Etaj 1' : 'Level 1')}
            </h1>
            <p className="subtitle" style={{ marginBottom: 28, fontSize: '0.85rem' }}>
              {ro ? 'Apasă pe o cameră pentru a vedea fotografiile' : 'Tap a room to view photos'}
            </p>
            {level === 0
              ? <Level0Blueprint nav={navigate} lang={lang} />
              : <Level1Blueprint nav={navigate} lang={lang} />
            }
          </>
        )}
      </div>
      <Nav />
    </>
  )
}
