import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'

const WALL = '#1d1d1f'
const GOLD = '#d4af37'
const UPLOAD_URL = 'https://github.com/casailinca/Welcome/upload/main/'

function Room({ x, y, w, h, label, to, dashed, muted, onSelect }) {
  const [hov, setHov] = useState(false)
  const active = !!to && !muted
  const fs = Math.max(9, Math.min(13, (w / Math.max(label.length, 3)) * 1.7))
  return (
    <g
      onClick={active ? () => onSelect({ label, to }) : undefined}
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
        x={x + w / 2} y={y + h / 2}
        textAnchor="middle" dominantBaseline="middle"
        fontSize={fs} fontWeight="700"
        fontFamily="-apple-system,system-ui,sans-serif"
        fill={hov ? GOLD : muted ? '#bbb' : WALL}
        style={{ transition: 'fill 0.2s', userSelect: 'none', pointerEvents: 'none' }}
      >{label}</text>
    </g>
  )
}

function LivingRoom({ to, onSelect, label }) {
  const [hov, setHov] = useState(false)
  return (
    <g
      onClick={() => onSelect({ label, to })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M1,47 H119 V139 H235 V559 H1 Z"
        fill={hov ? 'rgba(212,175,55,0.16)' : 'rgba(255,255,255,0.7)'}
        stroke={hov ? GOLD : WALL}
        strokeWidth={hov ? 2.5 : 1.5}
        style={{ transition: 'fill 0.2s, stroke 0.2s' }}
      />
      <text x={118} y={339} textAnchor="middle" dominantBaseline="middle"
        fontSize={12} fontWeight="700" fontFamily="-apple-system,system-ui,sans-serif"
        fill={hov ? GOLD : WALL}
        style={{ transition: 'fill 0.2s', userSelect: 'none', pointerEvents: 'none' }}>
        Living &amp;
      </text>
      <text x={118} y={356} textAnchor="middle" dominantBaseline="middle"
        fontSize={12} fontWeight="700" fontFamily="-apple-system,system-ui,sans-serif"
        fill={hov ? GOLD : WALL}
        style={{ transition: 'fill 0.2s', userSelect: 'none', pointerEvents: 'none' }}>
        {label}
      </text>
    </g>
  )
}

function Stairs0({ onSelect, label }) {
  const [hov, setHov] = useState(false)
  return (
    <g style={{ cursor: 'pointer' }}
      onClick={() => onSelect({ label, to: '/living' })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>
      <rect x={1} y={1} width={253} height={46}
        fill={hov ? 'rgba(212,175,55,0.28)' : 'rgba(220,215,200,0.75)'}
        stroke={hov ? GOLD : WALL} strokeWidth={hov ? 2.5 : 1.5}
        style={{ transition: 'fill 0.2s, stroke 0.2s' }}/>
      {[26,51,76,101,126,151,176,201,226].map(x => (
        <line key={x} x1={x} y1={1} x2={x} y2={47} stroke={hov ? GOLD : WALL} strokeWidth={1} opacity={0.55}/>
      ))}
      <line x1={1} y1={47} x2={253} y2={1} stroke={WALL} strokeWidth={1.2} opacity={0.4}/>
      <line x1={30} y1={38} x2={223} y2={38} stroke={WALL} strokeWidth={1.2} opacity={0.6}/>
      <polygon points="223,34 230,38 223,42" fill={WALL} opacity={0.6}/>
      <text x={120} y={18} textAnchor="middle" dominantBaseline="middle"
        fontSize={8} fontFamily="-apple-system,system-ui,sans-serif"
        fill={hov ? GOLD : WALL} opacity={hov ? 1 : 0.5}
        style={{ userSelect: 'none', pointerEvents: 'none' }}>{label}</text>
    </g>
  )
}

function Stairs1({ onSelect, label }) {
  const [hov, setHov] = useState(false)
  return (
    <g style={{ cursor: 'pointer' }}
      onClick={() => onSelect({ label, to: '/living' })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>
      <rect x={1} y={1} width={185} height={46}
        fill={hov ? 'rgba(212,175,55,0.28)' : 'rgba(220,215,200,0.75)'}
        stroke={hov ? GOLD : WALL} strokeWidth={hov ? 2.5 : 1.5}
        style={{ transition: 'fill 0.2s, stroke 0.2s' }}/>
      {[11,21,31,41].map(y => (
        <line key={y} x1={1} y1={y} x2={185} y2={y} stroke={hov ? GOLD : WALL} strokeWidth={1} opacity={0.5}/>
      ))}
      <line x1={1} y1={46} x2={185} y2={1} stroke={WALL} strokeWidth={1.2} opacity={0.4}/>
      <line x1={20} y1={36} x2={165} y2={36} stroke={WALL} strokeWidth={1.2} opacity={0.6}/>
      <polygon points="165,32 172,36 165,40" fill={WALL} opacity={0.6}/>
      <text x={93} y={18} textAnchor="middle" dominantBaseline="middle"
        fontSize={8} fontFamily="-apple-system,system-ui,sans-serif"
        fill={hov ? GOLD : WALL} opacity={hov ? 1 : 0.5}
        style={{ userSelect: 'none', pointerEvents: 'none' }}>{label}</text>
    </g>
  )
}

function Level0Blueprint({ onSelect, lang }) {
  const ro = lang === 'ro'
  return (
    <svg viewBox="0 0 390 560" width="100%"
      style={{ maxWidth: 680, display: 'block', margin: '0 auto', borderRadius: 12, background: 'rgba(245,245,247,0.4)' }}>
      <rect x={1} y={1} width={388} height={558} fill="none" stroke={WALL} strokeWidth={2.5}/>
      <line x1={120} y1={139} x2={389} y2={139} stroke={WALL} strokeWidth={1.5}/>
      <line x1={120} y1={47}  x2={120} y2={139} stroke={WALL} strokeWidth={1.5}/>
      <line x1={255} y1={1}   x2={255} y2={139} stroke={WALL} strokeWidth={1.5}/>
      <line x1={235} y1={139} x2={235} y2={559} stroke={WALL} strokeWidth={1.5}/>

      <Room x={120} y={1} w={135} h={138} label={ro ? 'Baie 1' : 'Bath 1'} to="/bai" onSelect={onSelect}/>
      <Room x={255} y={1} w={134} h={138} label={ro ? 'Centrală' : 'Boiler'} muted onSelect={onSelect}/>
      <LivingRoom to="/living" label={ro ? 'Bucătărie' : 'Kitchen'} onSelect={onSelect}/>
      <Room x={235} y={139} w={154} h={420} label={ro ? 'Terasă' : 'Terrace'} to="/exterior" dashed onSelect={onSelect}/>
      <Stairs0 onSelect={onSelect} label={ro ? 'Scări' : 'Stairs'}/>

      <text x={374} y={549} fontSize={9} fill={WALL} opacity={0.35} fontFamily="system-ui" style={{ userSelect: 'none' }}>N↑</text>
    </svg>
  )
}

function Level1Blueprint({ onSelect, lang }) {
  const ro = lang === 'ro'
  const rw = ro ? 'Camera' : 'Room'
  return (
    <svg viewBox="0 0 440 560" width="100%"
      style={{ maxWidth: 680, display: 'block', margin: '0 auto', borderRadius: 12, background: 'rgba(245,245,247,0.4)' }}>
      <rect x={1} y={1} width={185} height={558} fill="none" stroke={WALL} strokeWidth={2.5}/>
      <rect x={256} y={1} width={183} height={557} fill="none" stroke={WALL} strokeWidth={2.5}/>
      <line x1={186} y1={1}   x2={186} y2={559} stroke={WALL} strokeWidth={1.5}/>
      <line x1={256} y1={1}   x2={256} y2={559} stroke={WALL} strokeWidth={1.5}/>
      <line x1={1}   y1={47}  x2={186} y2={47}  stroke={WALL} strokeWidth={1.5}/>
      <line x1={1}   y1={279} x2={186} y2={279} stroke={WALL} strokeWidth={1.5}/>
      <line x1={256} y1={109} x2={439} y2={109} stroke={WALL} strokeWidth={1.5}/>
      <line x1={256} y1={313} x2={439} y2={313} stroke={WALL} strokeWidth={1.5}/>

      <Room x={1}   y={47}  w={185} h={232} label={`${rw} 1`} to="/camera/1" onSelect={onSelect}/>
      <Room x={1}   y={279} w={185} h={279} label={`${rw} 4`} to="/camera/4" onSelect={onSelect}/>
      <Room x={256} y={1}   w={183} h={108} label={ro ? 'Baie 2' : 'Bath 2'} to="/bai" onSelect={onSelect}/>
      <Room x={256} y={109} w={183} h={204} label={`${rw} 2`} to="/camera/2" onSelect={onSelect}/>
      <Room x={256} y={313} w={183} h={245} label={`${rw} 3`} to="/camera/3" onSelect={onSelect}/>

      <g>
        <rect x={186} y={1} width={70} height={558} fill="rgba(0,0,0,0.04)" stroke={WALL} strokeWidth={1}/>
        <text x={221} y={280} textAnchor="middle" dominantBaseline="middle"
          fontSize={9} fill="#8e8e93" fontFamily="-apple-system,system-ui,sans-serif"
          style={{ userSelect: 'none', writingMode: 'tb' }}>{ro ? 'Hol' : 'Hall'}</text>
      </g>

      <Stairs1 onSelect={onSelect} label={ro ? 'Scări' : 'Stairs'}/>

      <text x={424} y={550} fontSize={9} fill={WALL} opacity={0.35} fontFamily="system-ui" style={{ userSelect: 'none' }}>N↑</text>
    </svg>
  )
}

export default function FloorPlan() {
  const [level, setLevel] = useState(null)
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()
  const { t, lang } = useLang()
  const ro = lang === 'ro'

  const floors = [
    { id: 0, icon: 'fas fa-home', title: ro ? 'Parter' : 'Ground Floor', desc: ro ? 'Living · Baie · Terasă' : 'Living · Bath · Terrace' },
    { id: 1, icon: 'fas fa-bed',  title: ro ? 'Etaj 1' : 'Level 1',      desc: ro ? '4 Dormitoare · Baie · Hol' : '4 Bedrooms · Bath · Hall' },
  ]

  return (
    <>
      <SEO
        title={ro ? 'Planul Casei' : 'Floor Plan'}
        description="Explorează fiecare cameră și spațiu al casei prin planul interactiv."
      />
      <div className="page" style={{ maxWidth: 760 }}>
        {level !== null && (
          <button className="back-btn" onClick={() => { setLevel(null); setSelected(null) }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: 16 }}>
            <i className="fas fa-arrow-left" /> {t.back}
          </button>
        )}

        {level === null ? (
          <>
            <h1>{ro ? 'Planul Casei' : 'Floor Plan'}</h1>
            <p className="subtitle" style={{ marginBottom: 36 }}>
              {ro ? 'Alege etajul pe care vrei să-l explorezi' : 'Choose the floor to explore'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {floors.map(fl => (
                <button key={fl.id} onClick={() => setLevel(fl.id)} style={{
                  background: '#fff', border: '1.5px solid #1d1d1f', borderRadius: 'var(--radius)',
                  padding: '44px 24px', cursor: 'pointer', textAlign: 'center',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <i className={fl.icon} style={{ fontSize: '2rem', color: GOLD, display: 'block', marginBottom: 14 }}/>
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
            <p className="subtitle" style={{ marginBottom: 20, fontSize: '0.85rem' }}>
              {ro ? 'Apasă pe o cameră pentru opțiuni' : 'Tap a room for options'}
            </p>

            {level === 0
              ? <Level0Blueprint onSelect={setSelected} lang={lang}/>
              : <Level1Blueprint onSelect={setSelected} lang={lang}/>
            }

            {selected && (
              <div style={{
                marginTop: 24, padding: '18px 22px',
                background: '#fff', border: `1.5px solid ${GOLD}`,
                borderRadius: 'var(--radius)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
              }}>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: WALL }}>{selected.label}</span>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <button onClick={() => navigate(selected.to)} style={{
                    background: WALL, color: '#fff', border: 'none', borderRadius: 20,
                    padding: '9px 20px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                  }}>
                    <i className="fas fa-images" style={{ marginRight: 6 }}/>
                    {ro ? 'Fotografii' : 'Photos'}
                  </button>
                  <a href={UPLOAD_URL} target="_blank" rel="noreferrer" style={{
                    background: GOLD, color: '#fff', borderRadius: 20,
                    padding: '9px 20px', fontWeight: 600, fontSize: '0.85rem',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                  }}>
                    <i className="fas fa-cloud-upload-alt" style={{ marginRight: 6 }}/>
                    {ro ? 'Adaugă Foto' : 'Upload Photo'}
                  </a>
                  <button onClick={() => setSelected(null)} style={{
                    background: 'none', border: '1.5px solid #ccc', borderRadius: 20,
                    padding: '9px 14px', cursor: 'pointer', color: '#8e8e93', fontSize: '0.9rem',
                  }}>
                    <i className="fas fa-xmark"/>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Nav />
    </>
  )
}
