import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'
import { useRevealList } from '../hooks/useReveal'

const reviews = [
  { name: 'Alexandru M.', stars: 5, text: 'Locul perfect pentru o vacanță în natură. Casa este superbă, curată și proprietarii sunt foarte primitori. Recomand cu căldură!' },
  { name: 'Maria P.', stars: 5, text: 'Am petrecut un weekend minunat. Priveliștea spre lac este de vis, iar liniștea locului te reîncarcă complet.' },
  { name: 'Andrei & Ioana', stars: 5, text: 'O experiență de neuitat. Curtea este îngrijită, camerele confortabile și zona oferă activități frumoase. Revenim cu siguranță!' },
]

const reviewsEn = [
  { name: 'Alexandru M.', stars: 5, text: 'The perfect place for a nature getaway. The house is beautiful, clean, and the owners are very welcoming. Highly recommend!' },
  { name: 'Maria P.', stars: 5, text: 'We had a wonderful weekend. The view over the lake is breathtaking, and the tranquility completely recharges you.' },
  { name: 'Andrei & Ioana', stars: 5, text: 'An unforgettable experience. The yard is well-kept, the rooms are comfortable and the area has great activities. We will definitely return!' },
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
