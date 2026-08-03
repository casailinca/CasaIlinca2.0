import { useEffect, useCallback } from 'react'

export default function Lightbox({ images = [], index, onClose, onIndexChange }) {
  const open = index !== null && index !== undefined
  const total = images.length
  const isFirst = index === 0
  const isLast = index === total - 1

  const goPrev = useCallback(() => {
    if (isFirst) return
    onIndexChange(index - 1)
  }, [index, isFirst, onIndexChange])

  const goNext = useCallback(() => {
    if (isLast) return
    onIndexChange(index + 1)
  }, [index, isLast, onIndexChange])

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

  const handleImageClick = (e) => {
    e.stopPropagation()
    if (total <= 1) return
    const { left, width } = e.currentTarget.getBoundingClientRect()
    const clickedRight = e.clientX - left > width / 2
    if (clickedRight) goNext()
    else goPrev()
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Închide">
        <i className="fas fa-times" />
      </button>

      <img
        src={images[index]}
        alt=""
        onClick={handleImageClick}
        style={{ cursor: total > 1 ? 'pointer' : 'default' }}
      />

      {total > 1 && (
        <div className="lightbox-counter" onClick={e => e.stopPropagation()}>
          {index + 1} / {total}
        </div>
      )}
    </div>
  )
}
