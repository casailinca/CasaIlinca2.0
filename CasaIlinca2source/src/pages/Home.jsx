import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeUp 1.2s ease-out both',
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 12vw, 6rem)',
          fontWeight: 200,
          letterSpacing: '14px',
          textTransform: 'uppercase',
          color: 'var(--primary)',
        }}>
          Ilinca
        </h1>
      </div>
      <Nav />
    </>
  )
}
