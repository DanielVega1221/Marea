import './Featured.css'

function Featured() {
  const featured = [
    {
      name: 'Flat White',
      category: 'Café',
      description: 'Espresso doble con microespuma sedosa',
      price: '4.50',
      index: '01'
    },
    {
      name: 'Croissant de Almendras',
      category: 'Café',
      description: 'Hojaldre artesanal relleno de crema de almendras',
      price: '5.00',
      index: '02'
    },
    {
      name: 'Ceviche de Temporada',
      category: 'Cocina',
      description: 'Pescado fresco, leche de tigre y cítricos',
      price: '16.00',
      index: '03'
    },
    {
      name: 'Risotto de Hongos',
      category: 'Cocina',
      description: 'Arroz carnaroli con porcini y trufa negra',
      price: '18.50',
      index: '04'
    },
    {
      name: 'Negroni Clásico',
      category: 'Bar',
      description: 'Gin, Campari, vermut rojo y naranja',
      price: '12.00',
      index: '05'
    },
    {
      name: 'Mezcal Sour',
      category: 'Bar',
      description: 'Mezcal artesanal, limón, clara de huevo y angostura',
      price: '13.50',
      index: '06'
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
              <div className="featured-body">
                <h3 className="featured-name">{item.name}</h3>
                <div className="featured-divider"></div>
                <p className="featured-description">{item.description}</p>
              </div>
              <div className="featured-footer">
                <div className="featured-price-label">Precio</div>
                <div className="featured-price">${item.price}</div>
              </div>
              <div className="featured-corner tl"></div>
              <div className="featured-corner br"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
