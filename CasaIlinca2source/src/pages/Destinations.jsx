import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { media } from '../media'
import { useRevealList } from '../hooks/useReveal'
import { useLang } from '../context/LangContext'

const destinations = {
  ro: [
    { href: 'https://maps.app.goo.gl/ycquZwaaHC46CGVD9', img: 'ceah.jpg', tag: 'Munte • 36 min (27 km)', title: 'Masivul Ceahlău', desc: 'Ești deja la porțile muntelui. Traseele legendare încep chiar de aici.' },
    { href: 'https://maps.app.goo.gl/uUf5MYPSjJsBUpSJ6', img: 'izvmun.jpg', tag: 'Relaxare • Baraj: 3 min (3,2 km)', title: 'Lacul Izvorul Muntelui', desc: 'Coboară spre Portul Bicaz pentru o croazieră sub munte pe cel mai mare lac din țară.' },
    { href: 'https://maps.app.goo.gl/Mscz6T4bJgFsD3TU6', img: 'cheibicaz.jpg', tag: 'Peisaj • 35 min (32 km)', title: 'Cheile Bicazului', desc: 'Un spectacol al naturii sculptat în piatră, drumul care leagă Moldova de Transilvania.' },
    { href: 'https://maps.app.goo.gl/XTfh7RpkT34o58Ps8', img: 'lacurosu.jpg', tag: 'Natură • 50 min (40 km)', title: 'Lacu Roșu', desc: 'O enigmă a naturii unde trunchiurile brazilor străpung oglinda apei.' },
  ],
  en: [
    { href: 'https://maps.app.goo.gl/ycquZwaaHC46CGVD9', img: 'ceah.jpg', tag: 'Mountain • 36 min (27 km)', title: 'Ceahlău Massif', desc: 'You\'re already at the gateway to the mountain. Legendary trails start right here.' },
    { href: 'https://maps.app.goo.gl/uUf5MYPSjJsBUpSJ6', img: 'izvmun.jpg', tag: 'Relaxation • Dam: 3 min (3.2 km)', title: 'Lake Izvorul Muntelui', desc: 'Head down to Bicaz Port for a cruise under the mountains on the largest lake in the country.' },
    { href: 'https://maps.app.goo.gl/Mscz6T4bJgFsD3TU6', img: 'cheibicaz.jpg', tag: 'Scenery • 35 min (32 km)', title: 'Bicaz Gorge', desc: 'A natural spectacle carved in stone — the road that connects Moldova to Transylvania.' },
    { href: 'https://maps.app.goo.gl/XTfh7RpkT34o58Ps8', img: 'lacurosu.jpg', tag: 'Nature • 50 min (40 km)', title: 'Red Lake', desc: 'A mystery of nature where fir trunks pierce the mirror of the water.' },
  ],
}

export default function Destinations() {
  const listRef = useRevealList()
  const { t, lang } = useLang()
  const list = destinations[lang]
  return (
    <>
      <SEO title="Atracții" description="Masivul Ceahlău, Lacul Izvorul Muntelui, Cheile Bicazului, Lacu Roșu — toate la câțiva kilometri de Casa Ilinca." />
      <div className="page" style={{ maxWidth: 1040 }}>
        <header style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 30 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', letterSpacing: 0 }}>
            {t.destTitle}
          </h1>
          <p style={{ textTransform: 'uppercase', letterSpacing: 3, fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 700, marginTop: 10 }}>
            {t.destSubtitle}
          </p>
        </header>

        <div ref={listRef} className="dest-grid">
          {list.map(d => (
            <a key={d.title} href={d.href} target="_blank" rel="noopener noreferrer" className="dest-card">
              <div className="dest-img">
                <img src={media(d.img)} alt={d.title} />
              </div>
              <div className="dest-body">
                <span className="dest-tag">{d.tag}</span>
                <h2 className="dest-title">{d.title}</h2>
                <p className="dest-desc">{d.desc}</p>
                <span className="dest-link">
                  <i className="fas fa-location-arrow" /> {lang === 'ro' ? 'Vezi traseul' : 'Get directions'}
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
