import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Nav from '../components/Nav'
import SEO from '../components/SEO'

const EMAILJS_SERVICE_ID    = 'service_qgpjw3k'
const EMAILJS_TEMPLATE_ID   = 'template_1ewtq6s'
const EMAILJS_OWNER_TEMPLATE = 'template_m1ruixs'
const EMAILJS_PUBLIC_KEY    = 'INCx8tda9H8L77gGt'

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
  const [email, setEmail]       = useState('')
  const [status, setStatus]     = useState('idle') // idle | sending | sent | error

  const nights = nightsBetween(checkin, checkout)
  const today  = new Date().toISOString().split('T')[0]
  const valid  = checkin && checkout && nights > 0 && name.trim() && phone.trim() && email.trim()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!valid) return
    setStatus('sending')

    const templateParams = {
      to_email:      email.trim(),
      to_name:       name.trim(),
      phone:         phone.trim(),
      checkin_date:  formatDate(checkin),
      checkout_date: formatDate(checkout),
      nights:        nights,
    }

    try {
      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,    templateParams, EMAILJS_PUBLIC_KEY),
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_OWNER_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY),
      ])
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Rezervare" description="Verifică disponibilitatea și rezervă-ți sejurul la Casa Ilinca, Izvorul Muntelui." />
      <div className="page" style={{ maxWidth: 540 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> Înapoi</Link>
        <h1>Verifică Disponibilitatea</h1>
        <p className="subtitle">Trimite-ne datele și te contactăm noi</p>

        {status === 'sent' ? (
          <div className="booking-success">
            <i className="fas fa-check-circle" style={{ fontSize: '2.5rem', color: 'var(--gold)' }} />
            <h2>Cerere primită!</h2>
            <p>Verificăm disponibilitatea pentru datele alese și te contactăm în cel mai scurt timp la <strong>{email}</strong>.</p>
            <button className="book-submit" style={{ marginTop: 20 }} onClick={() => { setStatus('idle'); setCheckin(''); setCheckout(''); setName(''); setPhone(''); setEmail('') }}>
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

            <div className="booking-field">
              <label>Adresa de email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="exemplu@email.com"
                required
              />
            </div>

            {status === 'error' && (
              <p style={{ color: '#c0392b', textAlign: 'center', fontSize: '0.85rem' }}>
                A apărut o eroare. Verifică conexiunea și încearcă din nou.
              </p>
            )}

            <button type="submit" className="book-submit" disabled={!valid || status === 'sending'}>
              {status === 'sending'
                ? <><i className="fas fa-spinner fa-spin" /> Se trimite...</>
                : <><i className="fas fa-paper-plane" /> Verifică Disponibilitatea</>}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--accent)', marginTop: -6 }}>
              Proprietarul te va contacta în cel mai scurt timp
            </p>
          </form>
        )}
      </div>
      <Nav />
    </>
  )
}
