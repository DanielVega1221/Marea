import './Hero.css'
import { MapPin, Clock, Sparkles } from 'lucide-react'
import fondoImage from '../../assets/fondo.jpg'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <img src={fondoImage} alt="Marea Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-decorative-top"></div>
      <div className="hero-decorative-side left"></div>
      <div className="hero-decorative-side right"></div>
      
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">Marea</h1>
          <p className="hero-subtitle">
            <em>Café, cocina y bar</em> en un solo lugar
          </p>
        </div>

        <div className="hero-description">
          <p>
            Desayunos europeos, cócteles de autor y cocina de temporada.
          </p>
        </div>

        <div className="hero-info">
          <div className="info-item">
            <MapPin size={16} strokeWidth={1.5} />
            <span>Polanco, CDMX</span>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <Clock size={16} strokeWidth={1.5} />
            <span>Lun-Dom · 08:00-01:00</span>
          </div>
        </div>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => scrollToSection('menu')}
          >
            Ver carta
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('events')}
          >
            Ver eventos
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Descubre más</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
