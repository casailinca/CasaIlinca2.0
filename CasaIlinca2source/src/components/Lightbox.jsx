import { useEffect, useCallback } from 'react'

export default function Lightbox({ images = [], index, onClose, onIndexChange }) {
  const open = index !== null && index !== undefined
  const total = images.length

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total)
  }, [index, total, onIndexChange])

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total)
  }, [index, total, onIndexChange])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose, goPrev, goNext])

  if (!open) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Închide">
        <i className="fas fa-times" />
      </button>

      {total > 1 && (
        <>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); goPrev() }}
            aria-label="Poza anterioară"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); goNext() }}
            aria-label="Poza următoare"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </>
      )}

      <img src={images[index]} alt="" onClick={e => e.stopPropagation()} />

      {total > 1 && (
        <div className="lightbox-counter" onClick={e => e.stopPropagation()}>
          {index + 1} / {total}
        </div>
      )}
    </div>
  )
}
