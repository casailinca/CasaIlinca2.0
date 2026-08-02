import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { useLang } from '../context/LangContext'

function formatDate(dateStr, lang) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function nightsBetween(start, end) {
  if (!start || !end) return 0
  return Math.round((new Date(end) - new Date(start)) / 86400000)
}

export default function Rezervare() {
  const { t, lang } = useLang()
  const [checkin, setCheckin]   = useState('')
  const [checkout, setCheckout] = useState('')
  const [name, setName]         = useState('')
  const [phone, setPhone]       = useState('')
  const [email, setEmail]       = useState('')
  const [status, setStatus]     = useState('idle')

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
      checkin_date:  formatDate(checkin, lang),
      checkout_date: formatDate(checkout, lang),
      nights:        nights,
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(templateParams),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle'); setCheckin(''); setCheckout(''); setName(''); setPhone(''); setEmail('')
  }

  return (
    <>
      <SEO title="Rezervare" description="Verifică disponibilitatea și rezervă-ți sejurul la Casa Ilinca, Izvorul Muntelui." />
      <div className="page" style={{ maxWidth: 540 }}>
        <Link to="/" className="back-btn"><i className="fas fa-chevron-left" /> {t.back}</Link>
        <h1>{t.checkAvailability}</h1>
        <p className="subtitle">{t.sendUs}</p>

        {status === 'sent' ? (
          <div className="booking-success">
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <i className="fas fa-check" style={{ fontSize: '1.6rem', color: 'white' }} />
            </div>
            <h2>{t.confirmed}</h2>
            <p style={{ marginBottom: 28 }}>{t.confirmedSub}</p>

            <div style={{ background: 'var(--bg)', borderRadius: 16, padding: '20px 24px', marginBottom: 28, textAlign: 'left' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 16 }}>{t.yourStay}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 0' }}>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{t.checkin}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{formatDate(checkin, lang)}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{t.checkout}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{formatDate(checkout, lang)}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{nights === 1 ? t.nights : t.nightsPlural}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{nights}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{t.yourName}</p>
                  <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>{name}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/40793681421?text=${encodeURIComponent(`Bună ziua! Am trimis o cerere pentru ${formatDate(checkin, lang)} - ${formatDate(checkout, lang)} (${nights} ${nights === 1 ? 'noapte' : 'nopți'}). Numele meu este ${name}.`)}`}
              className="book-submit"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textDecoration: 'none', marginBottom: 12, background: '#25D366' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }} /> {t.whatsappFollow}
            </a>

            <button className="book-submit" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }} onClick={reset}>
              {t.anotherBooking}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="booking-row">
              <div className="booking-field">
                <label>{t.checkin}</label>
                <input
                  type="date"
                  value={checkin}
                  min={today}
                  onChange={e => { setCheckin(e.target.value); if (checkout && e.target.value >= checkout) setCheckout('') }}
                  required
                />
              </div>
              <div className="booking-field">
                <label>{t.checkout}</label>
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
                <i className="fas fa-moon" /> {nights} {nights === 1 ? t.nights : t.nightsPlural}
                <span style={{ opacity: 0.55, marginLeft: 10, fontSize: '0.8rem' }}>
                  {formatDate(checkin, lang)} → {formatDate(checkout, lang)}
                </span>
              </div>
            )}

            <div className="booking-field">
              <label>{t.yourName}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Prenume Nume" required />
            </div>

            <div className="booking-field">
              <label>{t.phone}</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="07xx xxx xxx" required />
            </div>

            <div className="booking-field">
              <label>{t.email}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="exemplu@email.com" required />
            </div>

            {status === 'error' && (
              <p style={{ color: '#c0392b', textAlign: 'center', fontSize: '0.85rem' }}>{t.errorMsg}</p>
            )}

            <button type="submit" className="book-submit" disabled={!valid || status === 'sending'}>
              {status === 'sending'
                ? <><i className="fas fa-spinner fa-spin" /> {t.sending}</>
                : <><i className="fas fa-paper-plane" /> {t.submit}</>}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--accent)', marginTop: -6 }}>
              {t.ownerContact}
            </p>
          </form>
        )}
      </div>
      <Nav />
    </>
  )
}
