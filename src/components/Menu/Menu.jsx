import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag, Coffee, ChefHat, Wine, Cake, ChevronLeft, ChevronRight } from 'lucide-react'
import './Menu.css'

function Menu() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('cafe');
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 4;

  const menuData = {
    cafe: [
      { name: 'Espresso', description: 'Shot doble de café de origen único', price: '3.00' },
      { name: 'Flat White', description: 'Espresso con microespuma sedosa', price: '4.50' },
      { name: 'Cappuccino', description: 'Espresso, leche vaporizada y espuma', price: '4.00' },
      { name: 'Latte', description: 'Espresso con leche vaporizada', price: '4.50' },
      { name: 'Americano', description: 'Espresso doble con agua caliente', price: '3.50' },
      { name: 'Macchiato', description: 'Espresso manchado con espuma', price: '3.75' },
      { name: 'Mocha', description: 'Espresso, chocolate belga y leche', price: '5.00' },
      { name: 'Cold Brew', description: 'Café de extracción en frío 24h', price: '5.00' },
      { name: 'Affogato', description: 'Espresso sobre helado de vainilla', price: '6.00' },
      { name: 'Café de Olla', description: 'Café con canela y piloncillo', price: '4.00' },
      { name: 'Croissant Mantequilla', description: 'Hojaldre artesanal francés', price: '4.50' },
      { name: 'Pain au Chocolat', description: 'Croissant con chocolate valrhona', price: '5.00' },
      { name: 'Muffin Arándanos', description: 'Con arándanos frescos', price: '4.00' },
      { name: 'Tostada Aguacate', description: 'Pan masa madre, aguacate y semillas', price: '8.50' }
    ],
    cocina: [
      { name: 'Ceviche de la Casa', description: 'Pescado fresco, leche de tigre, maíz y camote', price: '16.00' },
      { name: 'Aguachile Verde', description: 'Camarones, chile serrano, pepino y cilantro', price: '17.00' },
      { name: 'Tostadas de Atún', description: 'Atún sellado, aguacate y ponzu', price: '15.00' },
      { name: 'Ensalada Marea', description: 'Mix de hojas, queso de cabra, nueces y vinagreta', price: '12.00' },
      { name: 'Burrata Caprese', description: 'Burrata italiana, jitomate reliquia y albahaca', price: '14.00' },
      { name: 'Carpaccio de Res', description: 'Corte fino, rúgula, parmesano y aceite de trufa', price: '16.00' },
      { name: 'Tacos de Pulpo', description: 'Pulpo braseado, salsa verde y cebolla morada', price: '18.00' },
      { name: 'Pasta al Limón', description: 'Linguini, limón, parmesano y albahaca', price: '14.00' },
      { name: 'Risotto de Hongos', description: 'Arroz carnaroli, porcini y trufa negra', price: '18.50' },
      { name: 'Ravioles de Langosta', description: 'Pasta fresca rellena, salsa de azafrán', price: '22.00' },
      { name: 'Salmón Sellado', description: 'Con puré de coliflor y espárragos', price: '22.00' },
      { name: 'Atún Aleta Amarilla', description: 'Costra de ajonjolí, puré wasabi', price: '24.00' },
      { name: 'Pechuga de Pato', description: 'Confit de pato, puré de manzana y jus', price: '26.00' },
      { name: 'Costillas BBQ', description: 'Costillas de cerdo glaseadas 8 horas', price: '23.00' },
      { name: 'Burger Marea', description: 'Carne angus, queso gruyère, cebolla caramelizada', price: '15.00' },
      { name: 'Ribeye 350g', description: 'Corte argentino con mantequilla de hierbas', price: '32.00' }
    ],
    bar: [
      { name: 'Negroni Clásico', description: 'Gin, Campari, vermut rojo y naranja', price: '12.00' },
      { name: 'Negroni Blanco', description: 'Gin, Lillet Blanc, suze y pomelo', price: '13.00' },
      { name: 'Old Fashioned', description: 'Bourbon, angostura, azúcar y naranja', price: '13.00' },
      { name: 'Manhattan', description: 'Whiskey rye, vermut dulce, angostura', price: '13.00' },
      { name: 'Espresso Martini', description: 'Vodka, licor de café, espresso doble', price: '12.00' },
      { name: 'Margarita de Autor', description: 'Tequila reposado, cointreau, limón', price: '12.00' },
      { name: 'Mezcal Sour', description: 'Mezcal artesanal, limón, clara de huevo', price: '13.50' },
      { name: 'Paloma Rosa', description: 'Tequila blanco, pomelo rosa, soda', price: '11.00' },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda y naranja', price: '10.00' },
      { name: 'Hugo Spritz', description: 'Prosecco, st-germain, menta y limón', price: '10.50' },
      { name: 'Gin Tonic Premium', description: 'Gin de autor, tónica artesanal', price: '11.00' },
      { name: 'Moscow Mule', description: 'Vodka, ginger beer, limón y menta', price: '10.00' },
      { name: 'Mojito Clásico', description: 'Ron blanco, hierba buena, limón', price: '10.00' },
      { name: 'Dark & Stormy', description: 'Ron oscuro, ginger beer, limón', price: '11.00' },
      { name: 'Whiskey Sour', description: 'Bourbon, limón, clara de huevo', price: '12.00' },
      { name: 'Cosmopolitan', description: 'Vodka, cointreau, arándano, lima', price: '11.00' },
      { name: 'Daiquiri', description: 'Ron blanco, limón, azúcar', price: '10.00' },
      { name: 'Mai Tai', description: 'Ron ámbar, curacao, orgeat, limón', price: '12.00' }
    ],
    postres: [
      { name: 'Tarta de Limón', description: 'Merengue italiano y masa quebrada', price: '6.50' },
      { name: 'Tarta de Chocolate', description: 'Chocolate 70%, ganache y cacao', price: '7.00' },
      { name: 'Brownie & Helado', description: 'Brownie tibio con helado de vainilla', price: '7.00' },
      { name: 'Cheesecake NY', description: 'Base de galleta y frutos rojos', price: '6.50' },
      { name: 'Tiramisú', description: 'Receta tradicional italiana', price: '7.50' },
      { name: 'Panna Cotta', description: 'Crema italiana con coulis de frutos rojos', price: '6.50' },
      { name: 'Crème Brûlée', description: 'Natilla francesa con costra caramelizada', price: '7.50' },
      { name: 'Mousse de Maracuyá', description: 'Mousse aérea con maracuyá fresco', price: '6.50' },
      { name: 'Tarta de Fresas', description: 'Crème pâtissière y fresas frescas', price: '7.00' },
      { name: 'Affogato', description: 'Helado de vainilla con espresso', price: '6.00' }
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
                    <div className="menu-item-info">
                      <h4 className="menu-item-name">{item.name}</h4>
                      <p className="menu-item-description">{item.description}</p>
                      <div className="menu-item-price">${item.price}</div>
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
