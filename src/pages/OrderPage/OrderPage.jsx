import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Plus, Minus, ArrowLeft, ShoppingBag, X, Eye, Copy, Check } from 'lucide-react'
import './OrderPage.css'

function OrderPage() {
  const navigate = useNavigate()
  const { cartItems, addToCart, removeFromCart, getTotal, clearCart } = useCart()
  const [activeCategory, setActiveCategory] = useState('cafe')
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)

  // Limpiar el carrito cuando se salga de la página
  useEffect(() => {
    return () => {
      clearCart()
    }
  }, [clearCart])

  const menuData = {
    cafe: [
      { name: 'Espresso', description: 'Shot doble de café de origen único', price: '3.00', category: 'cafe' },
      { name: 'Flat White', description: 'Espresso con microespuma sedosa', price: '4.50', category: 'cafe' },
      { name: 'Cappuccino', description: 'Espresso, leche vaporizada y espuma', price: '4.00', category: 'cafe' },
      { name: 'Latte', description: 'Espresso con leche vaporizada', price: '4.50', category: 'cafe' },
      { name: 'Americano', description: 'Espresso doble con agua caliente', price: '3.50', category: 'cafe' },
      { name: 'Macchiato', description: 'Espresso manchado con espuma', price: '3.75', category: 'cafe' },
      { name: 'Mocha', description: 'Espresso, chocolate belga y leche', price: '5.00', category: 'cafe' },
      { name: 'Cold Brew', description: 'Café de extracción en frío 24h', price: '5.00', category: 'cafe' },
      { name: 'Affogato', description: 'Espresso sobre helado de vainilla', price: '6.00', category: 'cafe' },
      { name: 'Café de Olla', description: 'Café con canela y piloncillo', price: '4.00', category: 'cafe' },
      { name: 'Croissant Mantequilla', description: 'Hojaldre artesanal francés', price: '4.50', category: 'cafe' },
      { name: 'Pain au Chocolat', description: 'Croissant con chocolate valrhona', price: '5.00', category: 'cafe' },
      { name: 'Muffin Arándanos', description: 'Con arándanos frescos', price: '4.00', category: 'cafe' },
      { name: 'Tostada Aguacate', description: 'Pan masa madre, aguacate y semillas', price: '8.50', category: 'cafe' }
    ],
    cocina: [
      { name: 'Ceviche de la Casa', description: 'Pescado fresco, leche de tigre, maíz y camote', price: '16.00', category: 'cocina' },
      { name: 'Aguachile Verde', description: 'Camarones, chile serrano, pepino y cilantro', price: '17.00', category: 'cocina' },
      { name: 'Tostadas de Atún', description: 'Atún sellado, aguacate y ponzu', price: '15.00', category: 'cocina' },
      { name: 'Ensalada Marea', description: 'Mix de hojas, queso de cabra, nueces y vinagreta', price: '12.00', category: 'cocina' },
      { name: 'Burrata Caprese', description: 'Burrata italiana, jitomate reliquia y albahaca', price: '14.00', category: 'cocina' },
      { name: 'Carpaccio de Res', description: 'Corte fino, rúgula, parmesano y aceite de trufa', price: '16.00', category: 'cocina' },
      { name: 'Tacos de Pulpo', description: 'Pulpo braseado, salsa verde y cebolla morada', price: '18.00', category: 'cocina' },
      { name: 'Pasta al Limón', description: 'Linguini, limón, parmesano y albahaca', price: '14.00', category: 'cocina' },
      { name: 'Risotto de Hongos', description: 'Arroz carnaroli, porcini y trufa negra', price: '18.50', category: 'cocina' },
      { name: 'Ravioles de Langosta', description: 'Pasta fresca rellena, salsa de azafrán', price: '22.00', category: 'cocina' },
      { name: 'Salmón Sellado', description: 'Con puré de coliflor y espárragos', price: '22.00', category: 'cocina' },
      { name: 'Atún Aleta Amarilla', description: 'Costra de ajonjolí, puré wasabi', price: '24.00', category: 'cocina' },
      { name: 'Pechuga de Pato', description: 'Confit de pato, puré de manzana y jus', price: '26.00', category: 'cocina' },
      { name: 'Costillas BBQ', description: 'Costillas de cerdo glaseadas 8 horas', price: '23.00', category: 'cocina' },
      { name: 'Burger Marea', description: 'Carne angus, queso gruyère, cebolla caramelizada', price: '15.00', category: 'cocina' },
      { name: 'Ribeye 350g', description: 'Corte argentino con mantequilla de hierbas', price: '32.00', category: 'cocina' }
    ],
    bar: [
      { name: 'Negroni Clásico', description: 'Gin, Campari, vermut rojo y naranja', price: '12.00', category: 'bar' },
      { name: 'Negroni Blanco', description: 'Gin, Lillet Blanc, suze y pomelo', price: '13.00', category: 'bar' },
      { name: 'Old Fashioned', description: 'Bourbon, angostura, azúcar y naranja', price: '13.00', category: 'bar' },
      { name: 'Manhattan', description: 'Whiskey rye, vermut dulce, angostura', price: '13.00', category: 'bar' },
      { name: 'Espresso Martini', description: 'Vodka, licor de café, espresso doble', price: '12.00', category: 'bar' },
      { name: 'Margarita de Autor', description: 'Tequila reposado, cointreau, limón', price: '12.00', category: 'bar' },
      { name: 'Mezcal Sour', description: 'Mezcal artesanal, limón, clara de huevo', price: '13.50', category: 'bar' },
      { name: 'Paloma Rosa', description: 'Tequila blanco, pomelo rosa, soda', price: '11.00', category: 'bar' },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda y naranja', price: '10.00', category: 'bar' },
      { name: 'Hugo Spritz', description: 'Prosecco, st-germain, menta y limón', price: '10.50', category: 'bar' },
      { name: 'Gin Tonic Premium', description: 'Gin de autor, tónica artesanal', price: '11.00', category: 'bar' },
      { name: 'Moscow Mule', description: 'Vodka, ginger beer, limón y menta', price: '10.00', category: 'bar' },
      { name: 'Mojito Clásico', description: 'Ron blanco, hierba buena, limón', price: '10.00', category: 'bar' },
      { name: 'Dark & Stormy', description: 'Ron oscuro, ginger beer, limón', price: '11.00', category: 'bar' },
      { name: 'Whiskey Sour', description: 'Bourbon, limón, clara de huevo', price: '12.00', category: 'bar' },
      { name: 'Cosmopolitan', description: 'Vodka, cointreau, arándano, lima', price: '11.00', category: 'bar' },
      { name: 'Daiquiri', description: 'Ron blanco, limón, azúcar', price: '10.00', category: 'bar' },
      { name: 'Mai Tai', description: 'Ron ámbar, curacao, orgeat, limón', price: '12.00', category: 'bar' }
    ],
    postres: [
      { name: 'Tarta de Limón', description: 'Merengue italiano y masa quebrada', price: '6.50', category: 'postres' },
      { name: 'Tarta de Chocolate', description: 'Chocolate 70%, ganache y cacao', price: '7.00', category: 'postres' },
      { name: 'Brownie & Helado', description: 'Brownie tibio con helado de vainilla', price: '7.00', category: 'postres' },
      { name: 'Cheesecake NY', description: 'Base de galleta y frutos rojos', price: '6.50', category: 'postres' },
      { name: 'Tiramisú', description: 'Receta tradicional italiana', price: '7.50', category: 'postres' },
      { name: 'Panna Cotta', description: 'Crema italiana con coulis de frutos rojos', price: '6.50', category: 'postres' },
      { name: 'Crème Brûlée', description: 'Natilla francesa con costra caramelizada', price: '7.50', category: 'postres' },
      { name: 'Mousse de Maracuyá', description: 'Mousse aérea con maracuyá fresco', price: '6.50', category: 'postres' },
      { name: 'Tarta de Fresas', description: 'Crème pâtissière y fresas frescas', price: '7.00', category: 'postres' },
      { name: 'Affogato', description: 'Helado de vainilla con espresso', price: '6.00', category: 'postres' }
    ]
  }

  const categories = [
    { id: 'cafe', name: 'Café' },
    { id: 'cocina', name: 'Cocina' },
    { id: 'bar', name: 'Bar' },
    { id: 'postres', name: 'Postres' }
  ]

  const getItemQuantity = (item) => {
    const cartItem = cartItems.find(i => 
      i.name === item.name && i.category === item.category
    )
    return cartItem ? cartItem.quantity : 0
  }

  const formatOrderForWaiter = () => {
    const lines = ['='.repeat(40)]
    lines.push('PEDIDO MAREA')
    lines.push('='.repeat(40))
    lines.push('')
    
    // Agrupar por categoría
    const grouped = cartItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
    
    const categoryNames = {
      cafe: 'CAFÉ',
      cocina: 'COCINA',
      bar: 'BAR',
      postres: 'POSTRES'
    }
    
    Object.entries(grouped).forEach(([category, items]) => {
      lines.push(`▸ ${categoryNames[category]}`)
      lines.push('-'.repeat(40))
      items.forEach(item => {
        lines.push(`  ${item.quantity}× ${item.name}`)
        lines.push(`     $${item.price} c/u → $${(parseFloat(item.price) * item.quantity).toFixed(2)}`)
      })
      lines.push('')
    })
    
    lines.push('='.repeat(40))
    lines.push(`Subtotal: $${getTotal().toFixed(2)}`)
    lines.push(`IVA (16%): $${(getTotal() * 0.16).toFixed(2)}`)
    lines.push(`TOTAL: $${(getTotal() * 1.16).toFixed(2)}`)
    lines.push('='.repeat(40))
    
    return lines.join('\n')
  }

  const handleCopyOrder = async () => {
    try {
      await navigator.clipboard.writeText(formatOrderForWaiter())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  return (
    <div className="order-page">
      {/* Header con navegación */}
      <div className="order-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={24} />
            <span>Volver</span>
          </button>
          <h1 className="order-title">Arma tu <em>pedido</em></h1>
        </div>
      </div>

      <div className="order-content">
        <div className="container">
          <div className="order-layout">
            {/* Panel izquierdo - Menú */}
            <div className="menu-panel">
              <div className="menu-panel-header">
                <h2>Selecciona tus productos</h2>
                <div className="header-decoration"></div>
              </div>

              <div className="menu-categories">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="menu-grid">
                {menuData[activeCategory].map((item, index) => {
                  const quantity = getItemQuantity(item)
                  return (
                    <div 
                      key={`${item.category}-${index}`} 
                      className="product-card"
                    >
                      <div className="product-info">
                        <h4 className="product-name">{item.name}</h4>
                        <p className="product-description">{item.description}</p>
                        <div className="product-price">${item.price}</div>
                      </div>
                      <div className="product-actions">
                        {quantity > 0 ? (
                          <div className="quantity-controls">
                            <button 
                              className="qty-btn"
                              onClick={() => removeFromCart(item)}
                            >
                              <Minus size={18} />
                            </button>
                            <span className="qty-display">{quantity}</span>
                            <button 
                              className="qty-btn"
                              onClick={() => addToCart(item)}
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            className="add-btn"
                            onClick={() => addToCart(item)}
                          >
                            <Plus size={18} />
                            <span>Agregar</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Panel derecho - Factura */}
            <div className="bill-panel">
              <div className="bill-frame">
                <div className="bill-header">
                  <div className="bill-logo">MAREA</div>
                  <div className="bill-divider"></div>
                  <div className="bill-title">Cuenta</div>
                  <div className="bill-subtitle">Demo Conceptual</div>
                </div>

                <div className="bill-content">
                  {cartItems.length === 0 ? (
                    <div className="bill-empty">
                      <ShoppingBag size={48} strokeWidth={1.5} />
                      <p>Tu cuenta está vacía</p>
                      <span>Agrega productos del menú</span>
                    </div>
                  ) : (
                    <>
                      <div className="bill-items">
                        {cartItems.map((item, index) => (
                          <div key={index} className="bill-item">
                            <button 
                              className="remove-item"
                              onClick={() => removeFromCart(item)}
                              title="Quitar uno"
                            >
                              <X size={14} />
                            </button>
                            <div className="bill-item-details">
                              <div className="bill-item-name">{item.name}</div>
                              <div className="bill-item-qty">× {item.quantity}</div>
                            </div>
                            <div className="bill-item-price">
                              ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bill-divider"></div>

                      <div className="bill-subtotal">
                        <span>Subtotal</span>
                        <span>${getTotal().toFixed(2)}</span>
                      </div>

                      <div className="bill-tax">
                        <span>IVA (16%)</span>
                        <span>${(getTotal() * 0.16).toFixed(2)}</span>
                      </div>

                      <div className="bill-divider thick"></div>

                      <div className="bill-total">
                        <span>Total</span>
                        <span>${(getTotal() * 1.16).toFixed(2)}</span>
                      </div>

                      <div className="bill-actions">
                        <button className="show-btn" onClick={() => setShowModal(true)}>
                          <Eye size={20} />
                          <span>Mostrar pedido</span>
                        </button>
                        <button className="clear-btn" onClick={clearCart}>
                          Limpiar cuenta
                        </button>
                      </div>

                      <div className="waiter-note">
                        Mostrá el pedido al mozo para ordenar fácilmente
                      </div>

                      <div className="bill-note">
                        * Esta es una demo conceptual
                      </div>
                    </>
                  )}
                </div>

                {/* Decoraciones de esquina */}
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del pedido */}
      {showModal && (
        <div className="order-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="order-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-logo">MAREA</div>
              <h2 className="modal-title">Tu <em>pedido</em></h2>
              <p className="modal-subtitle">Mostrá esta pantalla al mozo</p>
            </div>

            <div className="modal-content">
              <div className="order-preview">
                {Object.entries(
                  cartItems.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = []
                    acc[item.category].push(item)
                    return acc
                  }, {})
                ).map(([category, items]) => (
                  <div key={category} className="order-category">
                    <h3 className="order-category-name">
                      {{
                        cafe: 'Café',
                        cocina: 'Cocina',
                        bar: 'Bar',
                        postres: 'Postres'
                      }[category]}
                    </h3>
                    <div className="order-category-items">
                      {items.map((item, index) => (
                        <div key={index} className="order-item-row">
                          <span className="order-item-qty">{item.quantity}×</span>
                          <span className="order-item-name">{item.name}</span>
                          <span className="order-item-price">
                            ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="order-summary">
                  <div className="order-summary-line">
                    <span>Subtotal</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="order-summary-line">
                    <span>IVA (16%)</span>
                    <span>${(getTotal() * 0.16).toFixed(2)}</span>
                  </div>
                  <div className="order-summary-line total">
                    <span>Total</span>
                    <span>${(getTotal() * 1.16).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                className={`copy-order-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyOrder}
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    <span>Copiar como texto</span>
                  </>
                )}
              </button>

              <p className="modal-note">También podés copiar el pedido como texto</p>
            </div>

            {/* Decoraciones de esquina */}
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderPage
