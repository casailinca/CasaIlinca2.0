import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Casa Ilinca'
const SITE_URL  = 'https://casailinca.github.io/CasaIlinca2.0'
const OG_IMAGE  = 'https://casailinca.github.io/Welcome/c_ext.jpg'
const DEFAULT_DESC = 'Pensiune de vis la poalele Ceahlăului, în Izvorul Muntelui, Neamț. Cazare confortabilă, natură, liniște.'

export default function SEO({ title, description = DEFAULT_DESC, image = OG_IMAGE }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const { pathname } = useLocation()
  const pageUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}/#${pathname}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:url"         content={pageUrl} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />
    </Helmet>
  )
}
