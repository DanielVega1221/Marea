import { Instagram, Facebook, Music2, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-frame">
          <div className="frame-border">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-decoration brand-decoration--tl"></div>
              <div className="brand-decoration brand-decoration--tr"></div>
              <h3 className="footer-logo">Marea</h3>
              <p className="footer-tagline">
                <em>Café • Cocina • Bar</em>
              </p>
              <p className="footer-description">
                Desayunos europeos, cócteles de autor y cocina de temporada en el corazón de Polanco.
              </p>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Info Grid */}
            <div className="footer-info-grid">
              <div className="info-block">
                <div className="info-header">
                  <MapPin size={20} strokeWidth={2.5} />
                  <span>Ubicación</span>
                </div>
                <p>Av. Presidente Masaryk 407</p>
                <p>Polanco, CDMX</p>
              </div>

              <div className="info-block">
                <div className="info-header">
                  <Clock size={20} strokeWidth={2.5} />
                  <span>Horarios</span>
                </div>
                <p>Lun - Dom</p>
                <p>08:00 - 01:00</p>
              </div>

              <div className="info-block">
                <div className="info-header">
                  <Phone size={20} strokeWidth={2.5} />
                  <span>Contacto</span>
                </div>
                <p>+54 11 1234-5678</p>
                <p>hola@mareacafe.com</p>
              </div>

              <div className="info-block">
                <div className="info-header">
                  <Music2 size={20} strokeWidth={2.5} />
                  <span>Síguenos</span>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Instagram size={18} strokeWidth={2} />
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={18} strokeWidth={2} />
                  </a>
                  <a href="#" className="social-link" aria-label="TikTok">
                    <Music2 size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="copyright">&copy; {currentYear} Marea. Demo conceptual - Todos los derechos reservados.</p>
              <div className="footer-decoration"></div>
              <p className="credit">Diseñado con atención al detalle</p>
            </div>

            {/* Corner decorations */}
            <div className="frame-corner frame-corner--tl"></div>
            <div className="frame-corner frame-corner--tr"></div>
            <div className="frame-corner frame-corner--bl"></div>
            <div className="frame-corner frame-corner--br"></div>
          </div>
          <div className="frame-shadow"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
