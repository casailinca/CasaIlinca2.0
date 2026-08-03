import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Edges } from '@react-three/drei'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'

const GOLD = '#d4af37'
const WALL = '#1d1d1f'

// Same coordinates as the 2D blueprint in FloorPlan.jsx (viewBox px), scaled down into 3D world units.
const SCALE = 42
const FLOOR_H = 3
const GAP = 0.15 // slab gap between floors so the two levels read as separate storeys
// Shared normalization box (max of both floor viewBoxes) so level0/level1 share one center.
const HOUSE_W = 440
const HOUSE_D = 560
const CENTER_X = HOUSE_W / 2 / SCALE
const CENTER_Z = HOUSE_D / 2 / SCALE

function footprint(x, y, w, h) {
  return {
    posX: (x + w / 2) / SCALE,
    posZ: (y + h / 2) / SCALE,
    width: w / SCALE,
    depth: h / SCALE,
  }
}

const level0Rooms = [
  { key: 'scari-parter',  labelRo: 'Scări',              labelEn: 'Stairs',      to: '/plan/scari-parter', color: '#d8d3c4', ...footprint(1, 1, 253, 46) },
  { key: 'baie1',         labelRo: 'Baie 1',             labelEn: 'Bath 1',      to: '/plan/baie1',        color: '#bcd4e6', ...footprint(120, 47, 135, 91) },
  { key: 'centrala',      labelRo: 'Centrală',           labelEn: 'Boiler',      to: null,                 color: '#c9c9c9', ...footprint(255, 1, 134, 138) },
  { key: 'bucatarie-a',   labelRo: 'Living & Bucătărie', labelEn: 'Living & Kitchen', to: '/plan/bucatarie', color: '#f2e2b8', ...footprint(1, 47, 119, 91) },
  { key: 'bucatarie-b',   labelRo: null,                 labelEn: null,          to: '/plan/bucatarie',    color: '#f2e2b8', ...footprint(1, 139, 234, 420) },
  { key: 'terasa',        labelRo: 'Terasă',             labelEn: 'Terrace',     to: '/plan/terasa',       color: '#d9c9a3', ...footprint(235, 139, 154, 420) },
]

const level1Rooms = [
  { key: 'scari-etaj1', labelRo: 'Scări',    labelEn: 'Stairs', to: '/plan/scari-etaj1', color: '#d8d3c4', ...footprint(1, 1, 185, 46) },
  { key: 'camera1',     labelRo: 'Camera 1', labelEn: 'Room 1', to: '/plan/camera1',      color: '#f0d3c9', ...footprint(1, 47, 185, 232) },
  { key: 'camera4',     labelRo: 'Camera 4', labelEn: 'Room 4', to: '/plan/camera4',      color: '#f0d3c9', ...footprint(1, 279, 185, 279) },
  { key: 'hol',         labelRo: 'Hol',      labelEn: 'Hall',   to: null,                 color: '#e5e2da', ...footprint(186, 1, 70, 558) },
  { key: 'baie2',       labelRo: 'Baie 2',   labelEn: 'Bath 2', to: '/plan/baie2',        color: '#bcd4e6', ...footprint(256, 1, 183, 108) },
  { key: 'camera2',     labelRo: 'Camera 2', labelEn: 'Room 2', to: '/plan/camera2',      color: '#f0d3c9', ...footprint(256, 109, 183, 204) },
  { key: 'camera3',     labelRo: 'Camera 3', labelEn: 'Room 3', to: '/plan/camera3',      color: '#f0d3c9', ...footprint(256, 313, 183, 245) },
]

function RoomBox({ room, baseY, label, onSelect }) {
  const [hov, setHov] = useState(false)
  const active = !!room.to
  const centerX = room.posX - CENTER_X
  const centerZ = room.posZ - CENTER_Z

  return (
    <group
      position={[centerX, baseY + FLOOR_H / 2, centerZ]}
      onPointerOver={e => { e.stopPropagation(); if (active) setHov(true) }}
      onPointerOut={e => { e.stopPropagation(); setHov(false) }}
      onClick={e => { e.stopPropagation(); if (active) onSelect({ label, to: room.to }) }}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[room.width - 0.04, FLOOR_H - 0.06, room.depth - 0.04]} />
        <meshStandardMaterial
          color={hov ? GOLD : room.color}
          transparent
          opacity={hov ? 0.9 : 0.82}
        />
        <Edges color={WALL} threshold={15} />
      </mesh>
      {label && hov && (
        <Html center position={[0, FLOOR_H / 2 + 0.1, 0]} style={{ pointerEvents: 'none' }}>
          <span style={{
            background: WALL, color: '#fff', padding: '4px 10px', borderRadius: 10,
            fontSize: 12, fontWeight: 700, fontFamily: '-apple-system,system-ui,sans-serif',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        </Html>
      )}
    </group>
  )
}

function Scene({ level0Visible, level1Visible, lang, onSelect }) {
  const ro = lang === 'ro'
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[8, 12, 6]} intensity={1.2} castShadow />
      <directionalLight position={[-6, 8, -4]} intensity={0.4} />

      {level0Visible && level0Rooms.map(r => (
        <RoomBox key={r.key} room={r} baseY={0} label={ro ? r.labelRo : r.labelEn} onSelect={onSelect} />
      ))}
      {level1Visible && level1Rooms.map(r => (
        <RoomBox key={r.key} room={r} baseY={FLOOR_H + GAP} label={ro ? r.labelRo : r.labelEn} onSelect={onSelect} />
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#f5f5f7" />
      </mesh>

      <OrbitControls
        enablePan
        minDistance={10}
        maxDistance={40}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  )
}

export default function House3D() {
  const [level0Visible, setLevel0Visible] = useState(true)
  const [level1Visible, setLevel1Visible] = useState(true)
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()
  const { t, lang } = useLang()
  const ro = lang === 'ro'

  const cameraPosition = useMemo(() => [16, 14, 17], [])

  return (
    <>
      <SEO
        title={ro ? 'Plan 3D' : '3D Plan'}
        description={ro ? 'Explorează casa într-un model 3D interactiv, cameră cu cameră.' : 'Explore the house in an interactive 3D model, room by room.'}
      />
      <div className="page" style={{ maxWidth: 900 }}>
        <Link to="/floorplan" className="back-btn"><i className="fas fa-arrow-left" /> {t.back}</Link>
        <h1 style={{ marginBottom: 6 }}>{ro ? 'Plan 3D' : '3D Plan'}</h1>
        <p className="subtitle" style={{ marginBottom: 20, fontSize: '0.85rem' }}>
          {ro ? 'Trage pentru a roti, scroll pentru zoom, apasă o cameră pentru opțiuni' : 'Drag to rotate, scroll to zoom, tap a room for options'}
        </p>

        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
          <button
            onClick={() => setLevel0Visible(v => !v)}
            style={{
              background: level0Visible ? WALL : 'transparent',
              color: level0Visible ? '#fff' : WALL,
              border: `1.5px solid ${WALL}`, borderRadius: 20,
              padding: '8px 18px', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            }}
          >
            {ro ? 'Parter' : 'Ground Floor'}
          </button>
          <button
            onClick={() => setLevel1Visible(v => !v)}
            style={{
              background: level1Visible ? WALL : 'transparent',
              color: level1Visible ? '#fff' : WALL,
              border: `1.5px solid ${WALL}`, borderRadius: 20,
              padding: '8px 18px', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem',
            }}
          >
            {ro ? 'Etaj 1' : 'Level 1'}
          </button>
        </div>

        <div style={{
          width: '100%', height: 480, borderRadius: 'var(--radius)', overflow: 'hidden',
          border: '1.5px solid #1d1d1f', background: 'linear-gradient(180deg, #eef0f3, #f7f7f9)',
        }}>
          <Canvas shadows camera={{ position: cameraPosition, fov: 42 }}>
            <Scene level0Visible={level0Visible} level1Visible={level1Visible} lang={lang} onSelect={setSelected} />
          </Canvas>
        </div>

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
                <i className="fas fa-images" style={{ marginRight: 6 }} />
                {ro ? 'Fotografii' : 'Photos'}
              </button>
              <button onClick={() => setSelected(null)} style={{
                background: 'none', border: '1.5px solid #ccc', borderRadius: 20,
                padding: '9px 14px', cursor: 'pointer', color: '#8e8e93', fontSize: '0.9rem',
              }}>
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Nav />
    </>
  )
}
