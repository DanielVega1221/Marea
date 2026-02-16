import './Gallery.css'

function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      alt: 'Interior Marea',
      category: 'Espacio'
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      alt: 'Café de especialidad',
      category: 'Bebidas'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      alt: 'Platos de cocina',
      category: 'Gastronomía'
    },
    {
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
      alt: 'Bar y cocktails',
      category: 'Bar'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      alt: 'Ambiente',
      category: 'Espacio'
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      alt: 'Terraza',
      category: 'Espacio'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>La <em>experiencia</em> Marea</h2>
          <p className="section-intro">
            Un recorrido visual por nuestro espacio
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-frame"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="frame-border">
                <div className="frame-content">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    loading="lazy"
                    className="frame-image"
                  />
                  <div className="frame-overlay">
                    <div className="overlay-content">
                      <span className="overlay-category">{image.category}</span>
                      <span className="overlay-title">{image.alt}</span>
                    </div>
                  </div>
                </div>
                <div className="frame-corner frame-corner--tl"></div>
                <div className="frame-corner frame-corner--tr"></div>
                <div className="frame-corner frame-corner--bl"></div>
                <div className="frame-corner frame-corner--br"></div>
              </div>
              <div className="frame-shadow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
