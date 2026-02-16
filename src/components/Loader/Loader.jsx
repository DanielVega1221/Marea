import { useEffect, useState } from 'react'
import { Coffee, ChefHat, Wine } from 'lucide-react'
import './Loader.css'

function Loader({ onLoadComplete }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simular carga y comenzar animación de salida
    const timer = setTimeout(() => {
      setIsExiting(true)
      // Esperar a que termine la animación de salida
      setTimeout(() => {
        onLoadComplete()
      }, 800)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <div className={`loader ${isExiting ? 'loader-exit' : ''}`}>
      <div className="loader-content">
        <div className="loader-decorative-line top"></div>
        <div className="loader-decorative-line bottom"></div>
        
        <div className="loader-logo">
          <h1 className="loader-title">Marea</h1>
          <div className="loader-title-underline"></div>
        </div>
        
        <div className="loader-subtitle">
          <span className="loader-subtitle-text">
            <em>Café, cocina y bar</em>
          </span>
        </div>
        
        <div className="loader-services">
          <div className="service-icon" style={{ animationDelay: '0.8s' }}>
            <Coffee size={28} strokeWidth={2.5} />
            <span>Café</span>
          </div>
          <div className="service-icon" style={{ animationDelay: '1s' }}>
            <ChefHat size={28} strokeWidth={2.5} />
            <span>Cocina</span>
          </div>
          <div className="service-icon" style={{ animationDelay: '1.2s' }}>
            <Wine size={28} strokeWidth={2.5} />
            <span>Bar</span>
          </div>
        </div>
        
        <div className="loader-spinner">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
      </div>
      
      <div className="loader-corner top-left"></div>
      <div className="loader-corner top-right"></div>
      <div className="loader-corner bottom-left"></div>
      <div className="loader-corner bottom-right"></div>
    </div>
  )
}

export default Loader
