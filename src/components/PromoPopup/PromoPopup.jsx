import { useEffect } from 'react'
import { X } from 'lucide-react'
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
          <X strokeWidth={2} size={20} />
        </button>
        
        <div className="popup-corner top-left"></div>
        <div className="popup-corner top-right"></div>
        <div className="popup-corner bottom-left"></div>
        <div className="popup-corner bottom-right"></div>
        
        <div className="popup-header">
          <div className="popup-header-decoration"></div>
          <span className="popup-badge">Oferta Especial</span>
        </div>
        
        <div className="popup-body">
          <h3 className="popup-title">Happy Hour</h3>
          <div className="popup-title-decoration"></div>
          
          <p className="popup-description">
            <span className="popup-highlight">2x1</span> en cócteles seleccionados
          </p>
          
          <div className="popup-time">
            <div className="popup-time-label">Lunes a Viernes</div>
            <div className="popup-hours">17:00 - 19:00</div>
          </div>
          
          <button className="popup-cta" onClick={onClose}>
            <span>Quiero mi descuento</span>
            <div className="popup-cta-arrow">→</div>
          </button>
        </div>
        
        <div className="popup-footer">
          <div className="popup-footer-line"></div>
          <p className="popup-terms">Válido en barra • No acumulable</p>
        </div>
      </div>
    </div>
  )
}

export default PromoPopup
