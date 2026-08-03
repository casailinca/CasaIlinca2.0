import { useState } from 'react'

export default function Img({ src, alt = '', style = {}, className = '', eager = false }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <span style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}>
      {!loaded && (
        <span className="img-skeleton" style={{ position: 'absolute', inset: 0 }} />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </span>
  )
}
