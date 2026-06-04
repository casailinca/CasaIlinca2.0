import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
}

function nightsBetween(start, end) {
  if (!start || !end) return 0
  return Math.round((new Date(end) - new Date(start)) / 86400000)
}

export default function Rezervare() {
  const [checkin, setCheckin]   = useState('')
  const [checkout, setCheckout] = useState('')
  const [name, setName]         = useState('')
  const [phone, setPhone]       = useState('')
  const [sent, setSent]         = useState(false)

  const nights = nightsBetween(checkin, checkout)
  const today  = new Date().toISOString().split('T')[0]
  const valid  = checkin && checkout && nights > 0 && name.trim() && phone.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!valid) return
    const msg = encodeURIComponent(
      `Bună ziua! Doresc să fac o rezervare la Casa Ilinca:\n` +
      `📅 Check-in: ${formatDate(checkin)}\n` +
      `📅 Check-out: ${formatDate(checkout)}\n` +
      `🌙 Nopți: ${nights}\n` +
      `👤 Numele: ${name.trim()}\n` +
      `📞 Telefon: ${phone.trim()}`
    )
    window.open(`https://wa.me/40793681421?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <>
      <div className="page" style={{ maxWidth: 540 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> Înapoi</Link>
        <h1>Rezervare</h1>
        <p className="subtitle">Alege datele sejurului tău</p>

        {sent ? (
          <div className="booking-success">
            <i className="fab fa-whatsapp" style={{ fontSize: '2.5rem', color: '#25D366' }} />
            <h2>Cerere trimisă!</h2>
            <p>Mesajul a fost deschis în WhatsApp. Te vom contacta în cel mai scurt timp pentru confirmare.</p>
            <button className="book-submit" style={{ marginTop: 20 }} onClick={() => setSent(false)}>
              Altă rezervare
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="booking-row">
              <div className="booking-field">
                <label>Check-in</label>
                <input
                  type="date"
                  value={checkin}
                  min={today}
                  onChange={e => { setCheckin(e.target.value); if (checkout && e.target.value >= checkout) setCheckout('') }}
                  required
                />
              </div>
              <div className="booking-field">
                <label>Check-out</label>
                <input
                  type="date"
                  value={checkout}
                  min={checkin || today}
                  onChange={e => setCheckout(e.target.value)}
                  required
                />
              </div>
            </div>

            {nights > 0 && (
              <div className="nights-badge">
                <i className="fas fa-moon" /> {nights} {nights === 1 ? 'noapte' : 'nopți'}
                <span style={{ opacity: 0.55, marginLeft: 10, fontSize: '0.8rem' }}>
                  {formatDate(checkin)} → {formatDate(checkout)}
                </span>
              </div>
            )}

            <div className="booking-field">
              <label>Numele tău</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Prenume Nume"
                required
              />
            </div>

            <div className="booking-field">
              <label>Număr de telefon</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="07xx xxx xxx"
                required
              />
            </div>

            <button type="submit" className="book-submit" disabled={!valid}>
              <i className="fab fa-whatsapp" /> Trimite Cererea pe WhatsApp
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--accent)', marginTop: -6 }}>
              Vei fi redirecționat în WhatsApp pentru confirmare
            </p>
          </form>
        )}
      </div>
      <Nav />
    </>
  )
}
