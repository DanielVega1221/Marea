import { useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'
import './PromoPopup.css'

function PromoPopup({ show, onClose }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <X strokeWidth={1.5} size={24} />
        </button>
        
        <div className="popup-body">
          <span className="popup-badge">Oferta especial</span>
          <h3 className="popup-title">Happy Hour</h3>
          <p className="popup-description">
            2x1 en cócteles seleccionados
          </p>
          <div className="popup-time">
            <span>Lunes a Viernes</span>
            <span className="popup-hours">17:00 - 19:00</span>
          </div>
          <button className="popup-cta" onClick={onClose}>
            Quiero mi descuento
          </button>
        </div>
        
        <div className="popup-decoration">
          <Sparkles strokeWidth={1.5} size={64} />
        </div>
      </div>
    </div>
  )
}

export default PromoPopup
