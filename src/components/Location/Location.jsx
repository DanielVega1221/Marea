import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Location.css'

function Location() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hola! Me gustaría hacer una consulta sobre Marea Café.');
    window.open(`https://wa.me/5491112345678?text=${message}`, '_blank');
  };

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="section-header">
          <h2>Visitanos <em>hoy</em></h2>
          <p className="section-intro">
            Te esperamos en el corazón de Polanco
          </p>
        </div>

        <div className="location-panel">
          <div className="panel-border">
            {/* Header del panel */}
            <div className="panel-header">
              <div className="header-decoration"></div>
              <span className="header-label">Información de Contacto</span>
              <div className="header-decoration"></div>
            </div>

            {/* Grid de información */}
            <div className="panel-content">
              <div className="info-row">
                <div className="info-icon">
                  <MapPin size={32} strokeWidth={2} />
                </div>
                <div className="info-details">
                  <span className="info-label">Ubicación</span>
                  <p className="info-value">Av. Presidente Masaryk 407</p>
                  <p className="info-extra">Polanco, CDMX, México</p>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="info-row">
                <div className="info-icon">
                  <Phone size={32} strokeWidth={2} />
                </div>
                <div className="info-details">
                  <span className="info-label">Teléfono</span>
                  <p className="info-value">+54 11 1234-5678</p>
                  <p className="info-extra">Lun a Dom / 7:00 - 02:00</p>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="info-row">
                <div className="info-icon">
                  <Mail size={32} strokeWidth={2} />
                </div>
                <div className="info-details">
                  <span className="info-label">Email</span>
                  <p className="info-value">hola@mareacafe.com</p>
                  <p className="info-extra">Reservas y consultas</p>
                </div>
              </div>

              <div className="info-divider"></div>

              <div className="info-row">
                <div className="info-icon">
                  <Clock size={32} strokeWidth={2} />
                </div>
                <div className="info-details">
                  <span className="info-label">Horarios</span>
                  <p className="info-value">Lunes a Viernes: 7:00 - 00:00</p>
                  <p className="info-extra">Sábados y Domingos: 9:00 - 02:00</p>
                </div>
              </div>
            </div>

            {/* Footer con botón */}
            <div className="panel-footer">
              <button className="contact-button" disabled>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Contactar por WhatsApp</span>
              </button>
              <p className="footer-note">Demo conceptual - Botón deshabilitado</p>
            </div>

            {/* Esquinas decorativas */}
            <div className="panel-corner panel-corner--tl"></div>
            <div className="panel-corner panel-corner--tr"></div>
            <div className="panel-corner panel-corner--bl"></div>
            <div className="panel-corner panel-corner--br"></div>
          </div>
          <div className="panel-shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Location
