import './Benefits.css'
import { Dog, Trees, Wifi, Music, ParkingCircle, Accessibility, CreditCard, Clock, Users } from 'lucide-react'
import petfriendlyImage from '../../assets/petfriendly.jpg'
import terrazaImage from '../../assets/terraza.jpg'
import wifiImage from '../../assets/wifi.jpg'
import musicImage from '../../assets/music.jpg'
import parkingImage from '../../assets/parking.png'
import accesibleImage from '../../assets/accesible.png'
import paymentImage from '../../assets/payment.jpg'
import horarioImage from '../../assets/horario.jpg'
import eventImage from '../../assets/event.jpg'

function Benefits() {
  const benefits = [
    {
      icon: Dog,
      title: 'Pet Friendly',
      description: 'Tu mascota es bienvenida en nuestra terraza',
      image: petfriendlyImage
    },
    {
      icon: Trees,
      title: 'Terraza',
      description: 'Amplio espacio al aire libre con vegetación',
      image: terrazaImage
    },
    {
      icon: Wifi,
      title: 'WiFi Gratis',
      description: 'Conexión de alta velocidad en todo el lugar',
      image: wifiImage
    },
    {
      icon: Music,
      title: 'Música en Vivo',
      description: 'Artistas locales jueves y viernes noche',
      image: musicImage
    },
    {
      icon: ParkingCircle,
      title: 'Parking',
      description: 'Estacionamiento con valet disponible',
      image: parkingImage
    },
    {
      icon: Accessibility,
      title: 'Accesible',
      description: 'Instalaciones completamente adaptadas',
      image: accesibleImage
    },
    {
      icon: CreditCard,
      title: 'Todos los Pagos',
      description: 'Efectivo, tarjetas y pagos digitales',
      image: paymentImage
    },
    {
      icon: Clock,
      title: 'Horario Amplio',
      description: 'Abierto de 8:00 AM a 1:00 AM todos los días',
      image: horarioImage
    },
    {
      icon: Users,
      title: 'Eventos Privados',
      description: 'Espacios disponibles para celebraciones',
      image: eventImage
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
                <div className="benefit-bg">
                  <img src={benefit.image} alt={benefit.title} className="benefit-bg-image" />
                  <div className="benefit-overlay"></div>
                </div>
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
