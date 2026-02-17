import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag, Coffee, ChefHat, Wine, Cake, ChevronLeft, ChevronRight } from 'lucide-react'
import './Menu.css'

// Importar imágenes de productos
import espressoImg from '../../assets/productos/espresso.webp'
import flatWhiteImg from '../../assets/productos/Flat White.webp'
import cappuccinoImg from '../../assets/productos/capuccino.webp'
import latteImg from '../../assets/productos/Latte.webp'
import americanoImg from '../../assets/productos/Americano.webp'
import macchiatoImg from '../../assets/productos/Macchiato.webp'
import mochaImg from '../../assets/productos/Mocha.webp'
import coldBrewImg from '../../assets/productos/Cold Brew.webp'
import affogatoImg from '../../assets/productos/Affogato.webp'
import cafeOllaImg from '../../assets/productos/Café de Olla.webp'
import croissantImg from '../../assets/productos/Croissant Mantequilla.webp'
import painChocolatImg from '../../assets/productos/Pain au Chocolat.webp'
import muffinImg from '../../assets/productos/Muffin Arándanos.webp'
import tostadaAguacateImg from '../../assets/productos/Tostada Aguacate.webp'

import cevicheImg from '../../assets/productos/Ceviche de la Casa.webp'
import aguachileImg from '../../assets/productos/Aguachile Verde.webp'
import tostadaAtunImg from '../../assets/productos/Tostadas de Atún.webp'
import ensaladaImg from '../../assets/productos/Ensalada Marea.webp'
import burrataImg from '../../assets/productos/Burrata Caprese.webp'
import carpaccioImg from '../../assets/productos/Carpaccio de Res.webp'
import tacosPulpoImg from '../../assets/productos/Tacos de Pulpo.webp'
import pastaLimonImg from '../../assets/productos/Pasta al Limón.webp'
import risottoImg from '../../assets/productos/Risotto de Hongos.webp'
import raviolesImg from '../../assets/productos/Ravioles de Langosta.webp'
import salmonImg from '../../assets/productos/Salmón Sellado.webp'
import atunImg from '../../assets/productos/Atún Aleta Amarilla.webp'
import patoImg from '../../assets/productos/Pechuga de Pato.webp'
import costillasImg from '../../assets/productos/Costillas BBQ.webp'
import burgerImg from '../../assets/productos/Burger Marea.webp'
import ribeyeImg from '../../assets/productos/Ribeye 350g.webp'

import negroniImg from '../../assets/productos/Negroni Clásico.webp'
import negroniBlancoImg from '../../assets/productos/Negroni Blanco.webp'
import oldFashionedImg from '../../assets/productos/Old Fashioned.webp'
import manhattanImg from '../../assets/productos/Manhattan.webp'
import espressoMartiniImg from '../../assets/productos/Espresso Martini.webp'
import margaritaImg from '../../assets/productos/Margarita de Autor.webp'
import mezcalSourImg from '../../assets/productos/Mezcal Sour.webp'
import palomaImg from '../../assets/productos/Paloma Rosa.webp'
import aperolImg from '../../assets/productos/Aperol Spritz.webp'
import hugoImg from '../../assets/productos/Hugo Spritz.webp'
import ginTonicImg from '../../assets/productos/Gin Tonic Premium.webp'
import moscowMuleImg from '../../assets/productos/Moscow Mule.webp'
import mojitoImg from '../../assets/productos/Mojito Clásico.webp'
import darkStormyImg from '../../assets/productos/Dark & Stormy.webp'
import whiskeySourImg from '../../assets/productos/Whiskey Sour.webp'
import cosmopolitanImg from '../../assets/productos/Cosmopolitan.webp'
import daiquiriImg from '../../assets/productos/Daiquiri.webp'
import maiTaiImg from '../../assets/productos/Mai Tai.webp'

import tartaLimonImg from '../../assets/productos/Tarta de Limón.webp'
import tartaChocolateImg from '../../assets/productos/Tarta de Chocolate.webp'
import brownieImg from '../../assets/productos/Brownie & Helado.webp'
import cheesecakeImg from '../../assets/productos/Cheesecake NY.webp'
import tiramisuImg from '../../assets/productos/Tiramisú.webp'
import pannaCottaImg from '../../assets/productos/Panna Cotta.webp'
import cremeBruleeImg from '../../assets/productos/Crème Brûlée.webp'
import mousseImg from '../../assets/productos/Mousse de Maracuyá.webp'
import tartaFresasImg from '../../assets/productos/Tarta de Fresas.webp'
import affogatoPostreImg from '../../assets/productos/Affogato.webp'

function Menu() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('cafe');
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 4;

  const menuData = {
    cafe: [
      { name: 'Espresso', description: 'Shot doble de café de origen único', price: '3.00', image: espressoImg },
      { name: 'Flat White', description: 'Espresso con microespuma sedosa', price: '4.50', image: flatWhiteImg },
      { name: 'Cappuccino', description: 'Espresso, leche vaporizada y espuma', price: '4.00', image: cappuccinoImg },
      { name: 'Latte', description: 'Espresso con leche vaporizada', price: '4.50', image: latteImg },
      { name: 'Americano', description: 'Espresso doble con agua caliente', price: '3.50', image: americanoImg },
      { name: 'Macchiato', description: 'Espresso manchado con espuma', price: '3.75', image: macchiatoImg },
      { name: 'Mocha', description: 'Espresso, chocolate belga y leche', price: '5.00', image: mochaImg },
      { name: 'Cold Brew', description: 'Café de extracción en frío 24h', price: '5.00', image: coldBrewImg },
      { name: 'Affogato', description: 'Espresso sobre helado de vainilla', price: '6.00', image: affogatoImg },
      { name: 'Café de Olla', description: 'Café con canela y piloncillo', price: '4.00', image: cafeOllaImg },
      { name: 'Croissant Mantequilla', description: 'Hojaldre artesanal francés', price: '4.50', image: croissantImg },
      { name: 'Pain au Chocolat', description: 'Croissant con chocolate valrhona', price: '5.00', image: painChocolatImg },
      { name: 'Muffin Arándanos', description: 'Con arándanos frescos', price: '4.00', image: muffinImg },
      { name: 'Tostada Aguacate', description: 'Pan masa madre, aguacate y semillas', price: '8.50', image: tostadaAguacateImg }
    ],
    cocina: [
      { name: 'Ceviche de la Casa', description: 'Pescado fresco, leche de tigre, maíz y camote', price: '16.00', image: cevicheImg },
      { name: 'Aguachile Verde', description: 'Camarones, chile serrano, pepino y cilantro', price: '17.00', image: aguachileImg },
      { name: 'Tostadas de Atún', description: 'Atún sellado, aguacate y ponzu', price: '15.00', image: tostadaAtunImg },
      { name: 'Ensalada Marea', description: 'Mix de hojas, queso de cabra, nueces y vinagreta', price: '12.00', image: ensaladaImg },
      { name: 'Burrata Caprese', description: 'Burrata italiana, jitomate reliquia y albahaca', price: '14.00', image: burrataImg },
      { name: 'Carpaccio de Res', description: 'Corte fino, rúgula, parmesano y aceite de trufa', price: '16.00', image: carpaccioImg },
      { name: 'Tacos de Pulpo', description: 'Pulpo braseado, salsa verde y cebolla morada', price: '18.00', image: tacosPulpoImg },
      { name: 'Pasta al Limón', description: 'Linguini, limón, parmesano y albahaca', price: '14.00', image: pastaLimonImg },
      { name: 'Risotto de Hongos', description: 'Arroz carnaroli, porcini y trufa negra', price: '18.50', image: risottoImg },
      { name: 'Ravioles de Langosta', description: 'Pasta fresca rellena, salsa de azafrán', price: '22.00', image: raviolesImg },
      { name: 'Salmón Sellado', description: 'Con puré de coliflor y espárragos', price: '22.00', image: salmonImg },
      { name: 'Atún Aleta Amarilla', description: 'Costra de ajonjolí, puré wasabi', price: '24.00', image: atunImg },
      { name: 'Pechuga de Pato', description: 'Confit de pato, puré de manzana y jus', price: '26.00', image: patoImg },
      { name: 'Costillas BBQ', description: 'Costillas de cerdo glaseadas 8 horas', price: '23.00', image: costillasImg },
      { name: 'Burger Marea', description: 'Carne angus, queso gruyère, cebolla caramelizada', price: '15.00', image: burgerImg },
      { name: 'Ribeye 350g', description: 'Corte argentino con mantequilla de hierbas', price: '32.00', image: ribeyeImg }
    ],
    bar: [
      { name: 'Negroni Clásico', description: 'Gin, Campari, vermut rojo y naranja', price: '12.00', image: negroniImg },
      { name: 'Negroni Blanco', description: 'Gin, Lillet Blanc, suze y pomelo', price: '13.00', image: negroniBlancoImg },
      { name: 'Old Fashioned', description: 'Bourbon, angostura, azúcar y naranja', price: '13.00', image: oldFashionedImg },
      { name: 'Manhattan', description: 'Whiskey rye, vermut dulce, angostura', price: '13.00', image: manhattanImg },
      { name: 'Espresso Martini', description: 'Vodka, licor de café, espresso doble', price: '12.00', image: espressoMartiniImg },
      { name: 'Margarita de Autor', description: 'Tequila reposado, cointreau, limón', price: '12.00', image: margaritaImg },
      { name: 'Mezcal Sour', description: 'Mezcal artesanal, limón, clara de huevo', price: '13.50', image: mezcalSourImg },
      { name: 'Paloma Rosa', description: 'Tequila blanco, pomelo rosa, soda', price: '11.00', image: palomaImg },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda y naranja', price: '10.00', image: aperolImg },
      { name: 'Hugo Spritz', description: 'Prosecco, st-germain, menta y limón', price: '10.50', image: hugoImg },
      { name: 'Gin Tonic Premium', description: 'Gin de autor, tónica artesanal', price: '11.00', image: ginTonicImg },
      { name: 'Moscow Mule', description: 'Vodka, ginger beer, limón y menta', price: '10.00', image: moscowMuleImg },
      { name: 'Mojito Clásico', description: 'Ron blanco, hierba buena, limón', price: '10.00', image: mojitoImg },
      { name: 'Dark & Stormy', description: 'Ron oscuro, ginger beer, limón', price: '11.00', image: darkStormyImg },
      { name: 'Whiskey Sour', description: 'Bourbon, limón, clara de huevo', price: '12.00', image: whiskeySourImg },
      { name: 'Cosmopolitan', description: 'Vodka, cointreau, arándano, lima', price: '11.00', image: cosmopolitanImg },
      { name: 'Daiquiri', description: 'Ron blanco, limón, azúcar', price: '10.00', image: daiquiriImg },
      { name: 'Mai Tai', description: 'Ron ámbar, curacao, orgeat, limón', price: '12.00', image: maiTaiImg }
    ],
    postres: [
      { name: 'Tarta de Limón', description: 'Merengue italiano y masa quebrada', price: '6.50', image: tartaLimonImg },
      { name: 'Tarta de Chocolate', description: 'Chocolate 70%, ganache y cacao', price: '7.00', image: tartaChocolateImg },
      { name: 'Brownie & Helado', description: 'Brownie tibio con helado de vainilla', price: '7.00', image: brownieImg },
      { name: 'Cheesecake NY', description: 'Base de galleta y frutos rojos', price: '6.50', image: cheesecakeImg },
      { name: 'Tiramisú', description: 'Receta tradicional italiana', price: '7.50', image: tiramisuImg },
      { name: 'Panna Cotta', description: 'Crema italiana con coulis de frutos rojos', price: '6.50', image: pannaCottaImg },
      { name: 'Crème Brûlée', description: 'Natilla francesa con costra caramelizada', price: '7.50', image: cremeBruleeImg },
      { name: 'Mousse de Maracuyá', description: 'Mousse aérea con maracuyá fresco', price: '6.50', image: mousseImg },
      { name: 'Tarta de Fresas', description: 'Crème pâtissière y fresas frescas', price: '7.00', image: tartaFresasImg },
      { name: 'Affogato', description: 'Helado de vainilla con espresso', price: '6.00', image: affogatoPostreImg }
    ]
  };

  const categories = [
    { id: 'cafe', name: 'Café', icon: Coffee },
    { id: 'cocina', name: 'Cocina', icon: ChefHat },
    { id: 'bar', name: 'Bar', icon: Wine },
    { id: 'postres', name: 'Postres', icon: Cake }
  ];

  // Calcular paginación
  const currentItems = menuData[activeCategory];
  const totalPages = Math.ceil(currentItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsToShow = currentItems.slice(startIndex, endIndex);

  // Cambiar categoría resetea página
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  // Cambiar página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra <em>Carta</em></h2>
          <p className="section-intro">
            Explora nuestras propuestas gastronómicas
          </p>
        </div>

        <div className="menu-layout">
          {/* Sidebar de categorías */}
          <div className="menu-sidebar">
            <div className="sidebar-header">
              <h3>Categorías</h3>
            </div>
            <div className="menu-categories-vertical">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <IconComponent size={24} strokeWidth={2.5} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contenido scrolleable */}
          <div className="menu-content">
            <div className="menu-card">
              <div className="menu-items" key={activeCategory}>
                {itemsToShow.map((item, index) => (
                  <div 
                    key={`${activeCategory}-${startIndex + index}`} 
                    className="menu-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="menu-item-image-container">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="menu-item-image"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="menu-item-image-overlay"></div>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-info">
                        <h4 className="menu-item-name">{item.name}</h4>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <div className="menu-item-footer">
                        <div className="menu-item-price-label">PRECIO</div>
                        <div className="menu-item-price">${item.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginación */}
              <div className="menu-pagination">
                <button 
                  className="pagination-btn prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                  <span>Anterior</span>
                </button>

                <div className="pagination-numbers">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button 
                  className="pagination-btn next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span>Siguiente</span>
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="menu-action">
            <button className="order-btn" onClick={() => navigate('/order')}>
              <ShoppingBag size={20} strokeWidth={2.5} />
              <span>Armar mi pedido</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
