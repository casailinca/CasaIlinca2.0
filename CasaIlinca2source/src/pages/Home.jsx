import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
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
      </div>
      <Nav />
    </>
  )
}
