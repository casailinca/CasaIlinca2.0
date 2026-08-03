import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'
import { useRevealList } from '../hooks/useReveal'

const reviews = [
  { name: 'Denisa Elena', stars: 5, text: 'Este o locație frumos amenajată, gazda primitoare, a fost totul mai mult decât perfect! Mai revenim cu mare drag!' },
  { name: 'Maria Puscasu', stars: 5, text: 'Totul este foarte curat și bine utilat, priveliștea spre pădurea de conifere este foarte frumoasă, iar locul este rustic și liniștit.' },
  { name: 'hirjeu ioan', stars: 5, text: 'Casa minunată și gazdele pe măsură, la o oră cu mașina de masivul Ceahlău și Lacul Roșu, fapt ce ne-a permis să avem timp de toate.' },
  { name: 'elenus zoitica', stars: 5, text: 'Un loc liniștit și superb pentru a petrece timpul cu prietenii! Toate utilitățile necesare, curățenie și decor genial.' },
]

const reviewsEn = [
  { name: 'Denisa Elena', stars: 5, text: 'A beautifully arranged location, welcoming host, everything was more than perfect! We\'ll gladly come back!' },
  { name: 'Maria Puscasu', stars: 5, text: 'Everything is very clean and well equipped, the view over the pine forest is beautiful, and the place is rustic and quiet.' },
  { name: 'hirjeu ioan', stars: 5, text: 'Wonderful house and great hosts, an hour\'s drive from the Ceahlău massif and the Red Lake, which allowed us to have time for everything.' },
  { name: 'elenus zoitica', stars: 5, text: 'A quiet and superb place to spend time with friends! All the necessary amenities, cleanliness and great decor.' },
]

export default function Home() {
  const { t, lang } = useLang()
  const listRef = useRevealList()
  const currentReviews = lang === 'ro' ? reviews : reviewsEn

  return (
    <>
      <SEO />
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        animation: 'pageIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}>
        <p style={{
          fontSize: 'clamp(0.65rem, 2vw, 0.8rem)',
          fontWeight: 600,
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          opacity: 0.7,
          animation: 'pageIn 1.1s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}>
          Casa
        </p>
        <h1 style={{
          fontSize: 'clamp(3rem, 12vw, 6rem)',
          fontWeight: 200,
          letterSpacing: '14px',
          textTransform: 'uppercase',
          color: 'var(--primary)',
        }}>
          Ilinca
        </h1>
        <div style={{
          width: 40,
          height: 1,
          background: 'var(--gold)',
          animation: 'pageIn 1.1s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both',
        }} />
        <p style={{
          fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
          color: 'var(--accent)',
          textAlign: 'center',
          maxWidth: 320,
          lineHeight: 1.6,
          marginTop: 8,
          animation: 'pageIn 1.1s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}>
          {t.tagline}
        </p>
      </div>

      <section style={{ padding: '80px 24px 140px', maxWidth: 700, margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 12 }}>
          ★★★★★
        </p>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 200, letterSpacing: '6px', textTransform: 'uppercase', marginBottom: 48, color: 'var(--primary)' }}>
          {t.reviews}
        </h2>
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {currentReviews.map((r, i) => (
            <div key={i} className="reveal review-card">
              <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--primary)', marginBottom: 14, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)' }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Nav />
    </>
  )
}
