import './Experiences.css'
import { Coffee, UtensilsCrossed, Wine } from 'lucide-react'
import cofeImage from '../../assets/cofe.jpg'
import kitchenImage from '../../assets/kitchen.jpg'
import barImage from '../../assets/bar.jpg'

function Experiences() {
  const experiences = [
    {
      title: 'Cafetería',
      description: 'Café de especialidad y repostería artesanal desde la mañana',
      time: '7:00 - 12:00',
      icon: Coffee,
      number: '01',
      detail: 'Espresso · Capuccino · Croissants',
      image: cofeImage
    },
    {
      title: 'Cocina',
      description: 'Propuestas contemporáneas con ingredientes de temporada',
      time: '12:00 - 17:00',
      icon: UtensilsCrossed,
      number: '02',
      detail: 'Brunch · Almuerzos · Platillos de autor',
      image: kitchenImage
    },
    {
      title: 'Bar',
      description: 'Mixología de autor y ambiente urbano hasta la noche',
      time: '17:00 - 00:00',
      icon: Wine,
      number: '03',
      detail: 'Cócteles · Vinos · Tapas',
      image: barImage
    }
  ];

  return (
    <section className="experiences" id="experiences">
      <div className="container">
        <div className="section-header">
          <h2>Tres experiencias, <em>un solo lugar</em></h2>
          <p className="section-intro">
            Marea se transforma a lo largo del día para adaptarse a cada momento
          </p>
        </div>
        
        <div className="experiences-grid">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={index} 
                className="experience-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="experience-bg">
                  <img src={exp.image} alt={exp.title} className="experience-bg-image" />
                  <div className="experience-overlay"></div>
                </div>
                <div className="card-decorative-line"></div>
                <div className="experience-header">
                  <div className="experience-number">{exp.number}</div>
                </div>
                <div className="experience-body">
                  <div className="experience-icon-wrapper">
                    <div className="experience-icon">
                      <IconComponent strokeWidth={1.2} size={48} />
                    </div>
                  </div>
                  <h3>{exp.title}</h3>
                  <div className="experience-divider"></div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-detail">{exp.detail}</div>
                </div>
                <div className="experience-footer">
                  <div className="experience-time">{exp.time}</div>
                </div>
                <div className="card-corner top-left"></div>
                <div className="card-corner bottom-right"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Experiences
