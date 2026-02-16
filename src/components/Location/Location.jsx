import { MapPin, Phone, Mail, Navigation } from 'lucide-react'
import './Location.css'

function Location() {
  const handleGetDirections = () => {
    // Enlace a Google Maps (ejemplo)
    window.open('https://maps.google.com', '_blank');
  };

  return (
    <section className="location">
      <div className="container">
        <div className="location-content">
          <div className="location-info">
            <h2>Encuéntranos</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <span className="location-label">Dirección</span>
                  <p className="location-value">
                    Av. Principal 1234<br />
                    Miraflores, Lima
                  </p>
                </div>
              </div>
              
              <div className="location-item">
                <div className="location-icon">
                  <Phone strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <span className="location-label">Teléfono</span>
                  <p className="location-value">+51 999 888 777</p>
                </div>
              </div>
              
              <div className="location-item">
                <div className="location-icon">
                  <Mail strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <span className="location-label">Email</span>
                  <p className="location-value">hola@mareabar.com</p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary" onClick={handleGetDirections}>
              <Navigation strokeWidth={1.5} size={18} />
              <span>Cómo llegar</span>
            </button>
          </div>
          
          <div className="location-map">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2358649881097!2d-77.03038668519945!3d-12.119933091443695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c817a5b8a5b5%3A0x6b6b6b6b6b6b6b6b!2sMiraflores%2C%20Lima!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
