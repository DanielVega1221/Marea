import { useState } from 'react'
import { Clock } from 'lucide-react'
import './Events.css'
import tardeCafeImg from '../../assets/Tarde de Café.jpg'
import openMicImg from '../../assets/Open Mic Night.jpg'
import cocktailImg from '../../assets/Coctelería Experimental.jpg'
import jazzImg from '../../assets/Jazz Night.jpg'
import djImg from '../../assets/DJ Sessions.jpg'
import brunchImg from '../../assets/Brunch Especial.jpg'
import rockImg from '../../assets/Noche de Rock.jpg'
import wineImg from '../../assets/event.jpg'

function Events() {
  const events = [
    {
      id: 1,
      day: 'Lunes',
      title: 'Tarde de Café',
      time: '15:00 - 18:00',
      description: 'Café de especialidad y postres',
      details: 'Disfruta de nuestros mejores cafés de origen junto con una selección de postres artesanales. Ambiente tranquilo perfecto para trabajar o leer.',
      number: '01',
      image: tardeCafeImg
    },
    {
      id: 2,
      day: 'Martes',
      title: 'Open Mic Night',
      time: '20:00 - 23:00',
      description: 'Micrófono abierto para artistas',
      details: 'Noche de talento local. Poesía, música acústica, stand-up. Un espacio para que los artistas emergentes muestren su trabajo.',
      number: '02',
      image: openMicImg
    },
    {
      id: 3,
      day: 'Miércoles',
      title: 'Coctelería Experimental',
      time: '19:00 - 00:00',
      description: 'Nuevas creaciones de nuestro bartender',
      details: 'Prueba cócteles únicos creados especialmente para esta noche. Ingredientes locales, técnicas innovadoras y presentaciones sorprendentes.',
      number: '03',
      image: cocktailImg
    },
    {
      id: 4,
      day: 'Jueves',
      title: 'Jazz Night',
      time: '20:00 - 23:00',
      description: 'Música en vivo con artistas locales',
      details: 'Disfruta de una velada única con los mejores músicos de jazz de la región. Ambiente íntimo, buena comida y mejor música.',
      number: '04',
      image: jazzImg
    },
    {
      id: 5,
      day: 'Viernes',
      title: 'DJ Sessions',
      time: '21:00 - 02:00',
      description: 'Sets de electrónica y house',
      details: 'Baila toda la noche con los mejores DJs locales. Electrónica, house y tech house en una atmósfera vibrante hasta la madrugada.',
      number: '05',
      image: djImg
    },
    {
      id: 6,
      day: 'Sábado',
      title: 'Brunch Especial',
      time: '10:00 - 15:00',
      description: 'Menú extendido de fin de semana',
      details: 'Un brunch completo con opciones dulces y saladas, jugos naturales, café de especialidad y una selección de platos principales. Reservas recomendadas.',
      number: '06',
      image: brunchImg
    },
    {
      id: 7,
      day: 'Sábado',
      title: 'Noche de Rock',
      time: '22:00 - 03:00',
      description: 'Bandas en vivo y rock clásico',
      details: 'Las mejores bandas de rock de la escena local. Desde clásicos hasta nuevas propuestas. Barra completa y energía pura.',
      number: '07',
      image: rockImg
    },
    {
      id: 8,
      day: 'Domingo',
      title: 'Cata de Vinos',
      time: '17:00 - 19:00',
      description: 'Selección de vinos de autor',
      details: 'Descubre vinos exclusivos de bodegas boutique. Incluye maridaje con quesos y tablas de embutidos artesanales. Guiado por sommelier.',
      number: '08',
      image: wineImg
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me gustaría reservar para el evento "${selectedEvent.title}" el ${selectedEvent.day} a las ${selectedEvent.time}.`
    );
    window.open(`https://wa.me/5491234567890?text=${message}`, '_blank');
  };

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra <em>agenda</em></h2>
          <p className="section-intro">
            Eventos y experiencias especiales cada semana
          </p>
        </div>

        <div className="events-planner">
          {/* Lista de eventos - lado izquierdo */}
          <div className="events-sidebar">
            <div className="sidebar-header">
              <div className="header-decoration"></div>
              <span className="sidebar-label">Eventos de la semana</span>
            </div>
            
            <div className="events-list">
              {events.map((event) => (
                <button
                  key={event.id}
                  className={`event-item ${selectedEvent.id === event.id ? 'active' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <span className="item-number">{event.number}</span>
                  <div className="item-content">
                    <span className="item-day">{event.day}</span>
                    <span className="item-title">{event.title}</span>
                    <span className="item-time">{event.time}</span>
                  </div>
                  <div className="item-indicator">→</div>
                </button>
              ))}
            </div>
          </div>

          {/* Panel de detalles - lado derecho */}
          <div 
            className="event-details" 
            key={selectedEvent.id}
            style={{ backgroundImage: `url(${selectedEvent.image})` }}
          >
            <div className="event-details-overlay"></div>
            <div className="details-header">
              <span className="details-label">Detalles del evento</span>
              <div className="header-decoration"></div>
            </div>

            <div className="details-content">
              <div className="details-badge">{selectedEvent.day}</div>
              <h3 className="details-title">{selectedEvent.title}</h3>
              <div className="details-divider"></div>
              <div className="details-time">
                <Clock className="time-icon" size={24} strokeWidth={2.5} />
                <span>{selectedEvent.time}</span>
              </div>
              <p className="details-description">{selectedEvent.description}</p>
              <p className="details-extra">{selectedEvent.details}</p>
              
              <button className="details-btn" disabled>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Reservar por WhatsApp</span>
              </button>
              <p className="button-note">Demo conceptual - Botón deshabilitado</p>
            </div>

            {/* Decoración numérica */}
            <div className="details-number">{selectedEvent.number}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
