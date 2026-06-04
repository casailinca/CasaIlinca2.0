import Nav from '../components/Nav'
import { media } from '../media'

const destinations = [
  {
    href: 'https://maps.app.goo.gl/ycquZwaaHC46CGVD9',
    img: 'ceah.jpg',
    tag: 'Munte • 36 min (27 km)',
    title: 'Masivul Ceahlău',
    desc: 'Ești deja la porțile muntelui. Traseele legendare încep chiar de aici.',
  },
  {
    href: 'https://maps.app.goo.gl/uUf5MYPSjJsBUpSJ6',
    img: 'izvmun.jpg',
    tag: 'Relaxare • Baraj: 3 min (3,2 km)',
    title: 'Lacul Izvorul Muntelui',
    desc: 'Coboară spre Portul Bicaz pentru o croazieră sub munte pe cel mai mare lac din țară.',
  },
  {
    href: 'https://maps.app.goo.gl/Mscz6T4bJgFsD3TU6',
    img: 'cheibicaz.jpg',
    tag: 'Peisaj • 35 min (32 km)',
    title: 'Cheile Bicazului',
    desc: 'Un spectacol al naturii sculptat în piatră, drumul care leagă Moldova de Transilvania.',
  },
  {
    href: 'https://maps.app.goo.gl/XTfh7RpkT34o58Ps8',
    img: 'lacurosu.jpg',
    tag: 'Natură • 50 min (40 km)',
    title: 'Lacu Roșu',
    desc: 'O enigmă a naturii unde trunchiurile brazilor străpung oglinda apei.',
  },
]

export default function Destinations() {
  return (
    <>
      <div className="page" style={{ maxWidth: 1040 }}>
        <header style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 30 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', letterSpacing: 0 }}>
            Atracții de <em>poveste</em>
          </h1>
          <p style={{ textTransform: 'uppercase', letterSpacing: 3, fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700, marginTop: 10 }}>
            Descoperă Neamțul
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36 }}>
          {destinations.map(d => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'white', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s, box-shadow 0.4s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src={media(d.img)} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>{d.tag}</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', marginBottom: 10 }}>{d.title}</h2>
                <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, fontWeight: 300, flexGrow: 1, marginBottom: 16 }}>{d.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <i className="fas fa-location-arrow" /> Vezi traseul
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Nav />
    </>
  )
}
