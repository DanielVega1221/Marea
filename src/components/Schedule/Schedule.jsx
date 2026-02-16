import './Schedule.css'

function Schedule() {
  const schedule = [
    { day: 'Lunes - Viernes', hours: '7:00 - 00:00' },
    { day: 'Sábado', hours: '9:00 - 01:00' },
    { day: 'Domingo', hours: '9:00 - 23:00' }
  ];

  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-content">
          <div className="schedule-text">
            <h2>Abierto todo el día</h2>
            <p className="schedule-intro">
              Desde el café de la mañana hasta el último cóctel de la noche
            </p>
          </div>
          
          <div className="schedule-list">
            {schedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <span className="schedule-day">{item.day}</span>
                <span className="schedule-divider"></span>
                <span className="schedule-hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
