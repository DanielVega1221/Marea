import './Gallery.css'

function Gallery() {
  // Usando placeholders de alta calidad estilo editorial
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      alt: 'Interior Marea'
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      alt: 'Café de especialidad'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      alt: 'Platos de cocina'
    },
    {
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
      alt: 'Bar y cocktails'
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      alt: 'Ambiente'
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      alt: 'Terraza'
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
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
