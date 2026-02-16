import { Instagram, Facebook, Music2 } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Marea</h3>
            <p className="footer-tagline">
              <em>Café • Cocina • Bar</em>
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Contacto</h4>
              <ul>
                <li>+51 999 888 777</li>
                <li>hola@mareabar.com</li>
                <li>Av. Principal 1234</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Horarios</h4>
              <ul>
                <li>Lun - Vie: 7:00 - 00:00</li>
                <li>Sábado: 9:00 - 01:00</li>
                <li>Domingo: 9:00 - 23:00</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Síguenos</h4>
              <ul className="footer-social">
                <li>
                  <a href="#" aria-label="Instagram">
                    <Instagram strokeWidth={1.5} size={18} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    <Facebook strokeWidth={1.5} size={18} />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="TikTok">
                    <Music2 strokeWidth={1.5} size={18} />
                    <span>TikTok</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Marea. Todos los derechos reservados.</p>
          <p className="footer-credit">Diseñado con atención al detalle</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
