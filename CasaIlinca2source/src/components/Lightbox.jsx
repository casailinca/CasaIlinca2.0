export default function Lightbox({ src, onClose }) {
  if (!src) return null
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Închide">
        <i className="fas fa-times" />
      </button>
      <img src={src} alt="" onClick={e => e.stopPropagation()} />
    </div>
  )
}
