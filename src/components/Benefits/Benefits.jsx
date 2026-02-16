import './Benefits.css'
import { Dog, Trees, Wifi, Music, ParkingCircle, Accessibility, CreditCard, Clock, Users } from 'lucide-react'

function Benefits() {
  const benefits = [
    {
      icon: Dog,
      title: 'Pet Friendly',
      description: 'Tu mascota es bienvenida en nuestra terraza'
    },
    {
      icon: Trees,
      title: 'Terraza',
      description: 'Amplio espacio al aire libre con vegetación'
    },
    {
      icon: Wifi,
      title: 'WiFi Gratis',
      description: 'Conexión de alta velocidad en todo el lugar'
    },
    {
      icon: Music,
      title: 'Música en Vivo',
      description: 'Artistas locales jueves y viernes noche'
    },
    {
      icon: ParkingCircle,
      title: 'Parking',
      description: 'Estacionamiento con valet disponible'
    },
    {
      icon: Accessibility,
      title: 'Accesible',
      description: 'Instalaciones completamente adaptadas'
    },
    {
      icon: CreditCard,
      title: 'Todos los Pagos',
      description: 'Efectivo, tarjetas y pagos digitales'
    },
    {
      icon: Clock,
      title: 'Horario Amplio',
      description: 'Abierto de 8:00 AM a 1:00 AM todos los días'
    },
    {
      icon: Users,
      title: 'Eventos Privados',
      description: 'Espacios disponibles para celebraciones'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <div className="section-header">
          <h2>Más que un <em>lugar</em> para comer</h2>
          <p className="section-intro">
            Pensado para que disfrutes cada momento
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="benefit-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">
                  <IconComponent strokeWidth={1.5} size={40} />
                </div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
