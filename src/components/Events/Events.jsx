import './Events.css'

function Events() {
  const events = [
    {
      day: 'Jueves',
      title: 'Jazz Night',
      time: '20:00 - 23:00',
      description: 'Música en vivo con artistas locales'
    },
    {
      day: 'Viernes',
      title: 'DJ Sessions',
      time: '21:00 - 01:00',
      description: 'Sets de electrónica y house'
    },
    {
      day: 'Sábado',
      title: 'Brunch Especial',
      time: '10:00 - 14:00',
      description: 'Menú extendido de fin de semana'
    },
    {
      day: 'Domingo',
      title: 'Cata de Vinos',
      time: '17:00 - 19:00',
      description: 'Selección de vinos de autor'
    }
  ];

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra <em>agenda</em></h2>
          <p className="section-intro">
            Eventos y experiencias especiales cada semana
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="event-day">{event.day}</div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-time">{event.time}</div>
              <p className="event-description">{event.description}</p>
              <button className="event-btn">Reservar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
