import './Featured.css'
import flatWhiteImg from '../../assets/productos/Flat White.webp'
import croissantImg from '../../assets/productos/Croissant Mantequilla.webp'
import cevicheImg from '../../assets/productos/Ceviche de la Casa.webp'
import risottoImg from '../../assets/productos/Risotto de Hongos.webp'
import negroniImg from '../../assets/productos/Negroni Clásico.webp'
import mezcalSourImg from '../../assets/productos/Mezcal Sour.webp'

function Featured() {
  const featured = [
    {
      name: 'Flat White',
      category: 'Café',
      description: 'Espresso doble con microespuma sedosa',
      price: '4.50',
      index: '01',
      image: flatWhiteImg
    },
    {
      name: 'Croissant de Almendras',
      category: 'Café',
      description: 'Hojaldre artesanal relleno de crema de almendras',
      price: '5.00',
      index: '02',
      image: croissantImg
    },
    {
      name: 'Ceviche de Temporada',
      category: 'Cocina',
      description: 'Pescado fresco, leche de tigre y cítricos',
      price: '16.00',
      index: '03',
      image: cevicheImg
    },
    {
      name: 'Risotto de Hongos',
      category: 'Cocina',
      description: 'Arroz carnaroli con porcini y trufa negra',
      price: '18.50',
      index: '04',
      image: risottoImg
    },
    {
      name: 'Negroni Clásico',
      category: 'Bar',
      description: 'Gin, Campari, vermut rojo y naranja',
      price: '12.00',
      index: '05',
      image: negroniImg
    },
    {
      name: 'Mezcal Sour',
      category: 'Bar',
      description: 'Mezcal artesanal, limón, clara de huevo y angostura',
      price: '13.50',
      index: '06',
      image: mezcalSourImg
    }
  ];

  return (
    <section className="featured">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros <em>destacados</em></h2>
          <p className="section-intro">
            Selección curada de nuestras propuestas más representativas
          </p>
        </div>
        
        <div className="featured-grid">
          {featured.map((item, index) => (
            <div 
              key={index} 
              className="featured-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="featured-header">
                <span className="featured-index">{item.index}</span>
                <span className="featured-category">{item.category}</span>
              </div>
              <div className="featured-image-container">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="featured-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="featured-image-overlay"></div>
              </div>
              <div className="featured-content">
                <div className="featured-body">
                  <h3 className="featured-name">{item.name}</h3>
                  <div className="featured-divider"></div>
                  <p className="featured-description">{item.description}</p>
                </div>
                <div className="featured-footer">
                  <div className="featured-price-label">PRECIO</div>
                  <div className="featured-price">${item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
