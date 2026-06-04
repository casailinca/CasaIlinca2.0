const nodemailer = require('nodemailer')

const OWNER_EMAIL = 'casailinca@gmail.com'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

function customerHtml({ to_name, checkin_date, checkout_date, nights, phone }) {
  return `
<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:24px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#1d1d1f;padding:36px 40px;text-align:center;">
            <p style="margin:0;color:#d4af37;font-size:11px;letter-spacing:4px;text-transform:uppercase;font-weight:600;">Pensiune</p>
            <h1 style="margin:8px 0 0;color:white;font-size:32px;font-weight:200;letter-spacing:10px;text-transform:uppercase;">Ilinca</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 8px;font-size:13px;color:#8e8e93;letter-spacing:1px;text-transform:uppercase;font-weight:600;">Bună ziua,</p>
            <h2 style="margin:0 0 24px;font-size:24px;font-weight:600;color:#1d1d1f;">${to_name}</h2>
            <p style="margin:0 0 32px;font-size:15px;color:#3a3a3c;line-height:1.7;">
              Am primit cererea ta de disponibilitate pentru <strong>Casa Ilinca</strong>.
              Vă vom contacta în cel mai scurt timp pentru confirmare.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;border-radius:16px;margin-bottom:32px;">
              <tr>
                <td style="padding:28px 32px;">
                  <p style="margin:0 0 20px;font-size:11px;color:#8e8e93;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Detalii sejur</p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="50%" style="padding-bottom:16px;">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Check-in</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${checkin_date}</p>
                      </td>
                      <td width="50%" style="padding-bottom:16px;">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Check-out</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${checkout_date}</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="50%">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Nopți</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${nights}</p>
                      </td>
                      <td width="50%">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Telefon</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${phone}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <p style="margin:0;font-size:14px;color:#8e8e93;line-height:1.7;">
              Pentru orice întrebare ne poți contacta pe WhatsApp la
              <a href="https://wa.me/40793681421" style="color:#d4af37;text-decoration:none;font-weight:600;">+40 793 681 421</a>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#f5f5f7;padding:24px 40px;text-align:center;border-top:1px solid #e5e5ea;">
            <p style="margin:0;font-size:12px;color:#8e8e93;">Str. Izvorul Muntelui Nr. 48A, Izvoru Muntelui, Neamț</p>
            <p style="margin:6px 0 0;font-size:12px;color:#8e8e93;">
              <a href="https://casa-ilinca2-0.vercel.app" style="color:#d4af37;text-decoration:none;">casa-ilinca2-0.vercel.app</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function ownerHtml({ to_name, to_email, checkin_date, checkout_date, nights, phone }) {
  return `
<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:24px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1d1d1f;padding:36px 40px;text-align:center;">
            <p style="margin:0;color:#d4af37;font-size:11px;letter-spacing:4px;text-transform:uppercase;font-weight:600;">Pensiune</p>
            <h1 style="margin:8px 0 0;color:white;font-size:32px;font-weight:200;letter-spacing:10px;text-transform:uppercase;">Ilinca</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 8px;font-size:13px;color:#8e8e93;letter-spacing:1px;text-transform:uppercase;font-weight:600;">Cerere nouă</p>
            <h2 style="margin:0 0 24px;font-size:24px;font-weight:600;color:#1d1d1f;">${to_name}</h2>

            <!-- Details box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;border-radius:16px;overflow:hidden;margin-bottom:32px;">
              <tr>
                <td style="padding:28px 32px;">
                  <p style="margin:0 0 20px;font-size:11px;color:#8e8e93;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Detalii sejur</p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="50%" style="padding-bottom:16px;">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Check-in</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${checkin_date}</p>
                      </td>
                      <td width="50%" style="padding-bottom:16px;">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Check-out</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${checkout_date}</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="50%">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Nopți</p>
                        <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1d1d1f;">${nights}</p>
                      </td>
                      <td width="50%">
                        <p style="margin:0;font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Telefon</p>
                        <a href="tel:${phone}" style="display:block;margin:4px 0 0;font-size:16px;font-weight:600;color:#d4af37;text-decoration:none;">${phone}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 6px;font-size:14px;color:#8e8e93;">
              Email: <a href="mailto:${to_email}" style="color:#d4af37;text-decoration:none;font-weight:600;">${to_email}</a>
            </p>
          </td>
        </tr>

        <!-- Buttons -->
        <tr>
          <td style="padding:0 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="48%">
                  <a href="https://wa.me/4${phone.replace(/^0/, '')}" style="display:block;background:#25D366;color:white;text-decoration:none;padding:16px;border-radius:16px;font-size:14px;font-weight:700;text-align:center;">WhatsApp</a>
                </td>
                <td width="4%"></td>
                <td width="48%">
                  <a href="tel:${phone}" style="display:block;background:#1d1d1f;color:white;text-decoration:none;padding:16px;border-radius:16px;font-size:14px;font-weight:700;text-align:center;">Sună</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5f5f7;padding:24px 40px;text-align:center;border-top:1px solid #e5e5ea;">
            <p style="margin:0;font-size:12px;color:#8e8e93;">Str. Izvorul Muntelui Nr. 48A, Izvoru Muntelui, Neamț</p>
            <p style="margin:6px 0 0;font-size:12px;color:#8e8e93;">
              <a href="https://casa-ilinca2-0.vercel.app" style="color:#d4af37;text-decoration:none;">casa-ilinca2-0.vercel.app</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { to_name, to_email, phone, checkin_date, checkout_date, nights } = req.body

  if (!to_name || !to_email || !phone || !checkin_date || !checkout_date || !nights) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Casa Ilinca" <${process.env.GMAIL_USER}>`,
        to: to_email,
        subject: 'Cerere disponibilitate Casa Ilinca',
        html: customerHtml({ to_name, checkin_date, checkout_date, nights, phone }),
      }),
      transporter.sendMail({
        from: `"Casa Ilinca Rezervări" <${process.env.GMAIL_USER}>`,
        to: OWNER_EMAIL,
        subject: `Cerere nouă — ${to_name}`,
        html: ownerHtml({ to_name, to_email, checkin_date, checkout_date, nights, phone }),
      }),
    ])
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
