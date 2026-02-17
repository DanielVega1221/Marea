import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Plus, Minus, ArrowLeft, ShoppingBag, X, Eye, Copy, Check, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'
import './OrderPage.css'

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

function OrderPage() {
  const navigate = useNavigate()
  const { cartItems, addToCart, removeFromCart, getTotal, clearCart, updateItemNote } = useCart()
  const [activeCategory, setActiveCategory] = useState('cafe')
  const [currentPage, setCurrentPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [tempSelections, setTempSelections] = useState({})
  const [activeProduct, setActiveProduct] = useState(null)
  
  const ITEMS_PER_PAGE = 4

  // Limpiar el carrito cuando se salga de la página
  useEffect(() => {
    return () => {
      clearCart()
    }
  }, [clearCart])

  const menuData = {
    cafe: [
      { name: 'Espresso', description: 'Shot doble de café de origen único', price: '3.00', category: 'cafe', image: espressoImg },
      { name: 'Flat White', description: 'Espresso con microespuma sedosa', price: '4.50', category: 'cafe', image: flatWhiteImg },
      { name: 'Cappuccino', description: 'Espresso, leche vaporizada y espuma', price: '4.00', category: 'cafe', image: cappuccinoImg },
      { name: 'Latte', description: 'Espresso con leche vaporizada', price: '4.50', category: 'cafe', image: latteImg },
      { name: 'Americano', description: 'Espresso doble con agua caliente', price: '3.50', category: 'cafe', image: americanoImg },
      { name: 'Macchiato', description: 'Espresso manchado con espuma', price: '3.75', category: 'cafe', image: macchiatoImg },
      { name: 'Mocha', description: 'Espresso, chocolate belga y leche', price: '5.00', category: 'cafe', image: mochaImg },
      { name: 'Cold Brew', description: 'Café de extracción en frío 24h', price: '5.00', category: 'cafe', image: coldBrewImg },
      { name: 'Affogato', description: 'Espresso sobre helado de vainilla', price: '6.00', category: 'cafe', image: affogatoImg },
      { name: 'Café de Olla', description: 'Café con canela y piloncillo', price: '4.00', category: 'cafe', image: cafeOllaImg },
      { name: 'Croissant Mantequilla', description: 'Hojaldre artesanal francés', price: '4.50', category: 'cafe', image: croissantImg },
      { name: 'Pain au Chocolat', description: 'Croissant con chocolate valrhona', price: '5.00', category: 'cafe', image: painChocolatImg },
      { name: 'Muffin Arándanos', description: 'Con arándanos frescos', price: '4.00', category: 'cafe', image: muffinImg },
      { name: 'Tostada Aguacate', description: 'Pan masa madre, aguacate y semillas', price: '8.50', category: 'cafe', image: tostadaAguacateImg }
    ],
    cocina: [
      { name: 'Ceviche de la Casa', description: 'Pescado fresco, leche de tigre, maíz y camote', price: '16.00', category: 'cocina', image: cevicheImg },
      { name: 'Aguachile Verde', description: 'Camarones, chile serrano, pepino y cilantro', price: '17.00', category: 'cocina', image: aguachileImg },
      { name: 'Tostadas de Atún', description: 'Atún sellado, aguacate y ponzu', price: '15.00', category: 'cocina', image: tostadaAtunImg },
      { name: 'Ensalada Marea', description: 'Mix de hojas, queso de cabra, nueces y vinagreta', price: '12.00', category: 'cocina', image: ensaladaImg },
      { name: 'Burrata Caprese', description: 'Burrata italiana, jitomate reliquia y albahaca', price: '14.00', category: 'cocina', image: burrataImg },
      { name: 'Carpaccio de Res', description: 'Corte fino, rúgula, parmesano y aceite de trufa', price: '16.00', category: 'cocina', image: carpaccioImg },
      { name: 'Tacos de Pulpo', description: 'Pulpo braseado, salsa verde y cebolla morada', price: '18.00', category: 'cocina', image: tacosPulpoImg },
      { name: 'Pasta al Limón', description: 'Linguini, limón, parmesano y albahaca', price: '14.00', category: 'cocina', image: pastaLimonImg },
      { name: 'Risotto de Hongos', description: 'Arroz carnaroli, porcini y trufa negra', price: '18.50', category: 'cocina', image: risottoImg },
      { name: 'Ravioles de Langosta', description: 'Pasta fresca rellena, salsa de azafrán', price: '22.00', category: 'cocina', image: raviolesImg },
      { name: 'Salmón Sellado', description: 'Con puré de coliflor y espárragos', price: '22.00', category: 'cocina', image: salmonImg },
      { name: 'Atún Aleta Amarilla', description: 'Costra de ajonjolí, puré wasabi', price: '24.00', category: 'cocina', image: atunImg },
      { name: 'Pechuga de Pato', description: 'Confit de pato, puré de manzana y jus', price: '26.00', category: 'cocina', image: patoImg },
      { name: 'Costillas BBQ', description: 'Costillas de cerdo glaseadas 8 horas', price: '23.00', category: 'cocina', image: costillasImg },
      { name: 'Burger Marea', description: 'Carne angus, queso gruyère, cebolla caramelizada', price: '15.00', category: 'cocina', image: burgerImg },
      { name: 'Ribeye 350g', description: 'Corte argentino con mantequilla de hierbas', price: '32.00', category: 'cocina', image: ribeyeImg }
    ],
    bar: [
      { name: 'Negroni Clásico', description: 'Gin, Campari, vermut rojo y naranja', price: '12.00', category: 'bar', image: negroniImg },
      { name: 'Negroni Blanco', description: 'Gin, Lillet Blanc, suze y pomelo', price: '13.00', category: 'bar', image: negroniBlancoImg },
      { name: 'Old Fashioned', description: 'Bourbon, angostura, azúcar y naranja', price: '13.00', category: 'bar', image: oldFashionedImg },
      { name: 'Manhattan', description: 'Whiskey rye, vermut dulce, angostura', price: '13.00', category: 'bar', image: manhattanImg },
      { name: 'Espresso Martini', description: 'Vodka, licor de café, espresso doble', price: '12.00', category: 'bar', image: espressoMartiniImg },
      { name: 'Margarita de Autor', description: 'Tequila reposado, cointreau, limón', price: '12.00', category: 'bar', image: margaritaImg },
      { name: 'Mezcal Sour', description: 'Mezcal artesanal, limón, clara de huevo', price: '13.50', category: 'bar', image: mezcalSourImg },
      { name: 'Paloma Rosa', description: 'Tequila blanco, pomelo rosa, soda', price: '11.00', category: 'bar', image: palomaImg },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda y naranja', price: '10.00', category: 'bar', image: aperolImg },
      { name: 'Hugo Spritz', description: 'Prosecco, st-germain, menta y limón', price: '10.50', category: 'bar', image: hugoImg },
      { name: 'Gin Tonic Premium', description: 'Gin de autor, tónica artesanal', price: '11.00', category: 'bar', image: ginTonicImg },
      { name: 'Moscow Mule', description: 'Vodka, ginger beer, limón y menta', price: '10.00', category: 'bar', image: moscowMuleImg },
      { name: 'Mojito Clásico', description: 'Ron blanco, hierba buena, limón', price: '10.00', category: 'bar', image: mojitoImg },
      { name: 'Dark & Stormy', description: 'Ron oscuro, ginger beer, limón', price: '11.00', category: 'bar', image: darkStormyImg },
      { name: 'Whiskey Sour', description: 'Bourbon, limón, clara de huevo', price: '12.00', category: 'bar', image: whiskeySourImg },
      { name: 'Cosmopolitan', description: 'Vodka, cointreau, arándano, lima', price: '11.00', category: 'bar', image: cosmopolitanImg },
      { name: 'Daiquiri', description: 'Ron blanco, limón, azúcar', price: '10.00', category: 'bar', image: daiquiriImg },
      { name: 'Mai Tai', description: 'Ron ámbar, curacao, orgeat, limón', price: '12.00', category: 'bar', image: maiTaiImg }
    ],
    postres: [
      { name: 'Tarta de Limón', description: 'Merengue italiano y masa quebrada', price: '6.50', category: 'postres', image: tartaLimonImg },
      { name: 'Tarta de Chocolate', description: 'Chocolate 70%, ganache y cacao', price: '7.00', category: 'postres', image: tartaChocolateImg },
      { name: 'Brownie & Helado', description: 'Brownie tibio con helado de vainilla', price: '7.00', category: 'postres', image: brownieImg },
      { name: 'Cheesecake NY', description: 'Base de galleta y frutos rojos', price: '6.50', category: 'postres', image: cheesecakeImg },
      { name: 'Tiramisú', description: 'Receta tradicional italiana', price: '7.50', category: 'postres', image: tiramisuImg },
      { name: 'Panna Cotta', description: 'Crema italiana con coulis de frutos rojos', price: '6.50', category: 'postres', image: pannaCottaImg },
      { name: 'Crème Brûlée', description: 'Natilla francesa con costra caramelizada', price: '7.50', category: 'postres', image: cremeBruleeImg },
      { name: 'Mousse de Maracuyá', description: 'Mousse aérea con maracuyá fresco', price: '6.50', category: 'postres', image: mousseImg },
      { name: 'Tarta de Fresas', description: 'Crème pâtissière y fresas frescas', price: '7.00', category: 'postres', image: tartaFresasImg },
      { name: 'Affogato', description: 'Helado de vainilla con espresso', price: '6.00', category: 'postres', image: affogatoPostreImg }
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

  const getTempSelection = (item) => {
    const key = `${item.category}-${item.name}`
    return tempSelections[key] || { quantity: 0, note: '' }
  }

  // Paginación
  const currentItems = menuData[activeCategory]
  const totalPages = Math.ceil(currentItems.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const itemsToShow = currentItems.slice(startIndex, endIndex)

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const setActiveAndClearOthers = (item) => {
    const currentKey = `${item.category}-${item.name}`
    
    // Si ya es el producto activo, no hacer nada
    if (activeProduct && activeProduct === currentKey) {
      return
    }

    // Limpiar selección temporal de otros productos
    setTempSelections(prev => ({
      [currentKey]: prev[currentKey] || { quantity: 0, note: '' }
    }))
    
    setActiveProduct(currentKey)
  }

  const handleTempQuantityChange = (item, change) => {
    setActiveAndClearOthers(item)
    const key = `${item.category}-${item.name}`
    
    setTempSelections(prev => {
      const current = prev[key] || { quantity: 0, note: '' }
      const newQuantity = Math.max(0, current.quantity + change)
      
      return {
        ...prev,
        [key]: { ...current, quantity: newQuantity }
      }
    })
  }

  const handleNoteChange = (item, value) => {
    setActiveAndClearOthers(item)
    const key = `${item.category}-${item.name}`
    
    setTempSelections(prev => ({
      ...prev,
      [key]: { ...(prev[key] || { quantity: 0, note: '' }), note: value }
    }))
  }

  const handleAddToCart = (item) => {
    const key = `${item.category}-${item.name}`
    const selection = tempSelections[key]
    
    if (!selection || selection.quantity === 0) {
      return
    }

    // Agregar al carrito la cantidad de veces especificada
    for (let i = 0; i < selection.quantity; i++) {
      addToCart(item, selection.note)
    }

    // Limpiar selección temporal de este producto
    setTempSelections(prev => {
      const newSelections = { ...prev }
      delete newSelections[key]
      return newSelections
    })
    
    setActiveProduct(null)
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
        if (item.note) {
          lines.push(`     📝 ${item.note}`)
        }
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
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="menu-grid">
                {itemsToShow.map((item, index) => {
                  const cartQuantity = getItemQuantity(item)
                  const tempSelection = getTempSelection(item)
                  const noteKey = `${item.category}-${item.name}`
                  const isActive = activeProduct === noteKey
                  const showNote = tempSelection.quantity > 0
                  
                  return (
                    <div 
                      key={`${activeCategory}-${startIndex + index}`} 
                      className={`product-card ${isActive ? 'active' : ''}`}
                    >
                      <div className="product-image-container">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="product-image"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="product-image-overlay"></div>
                      </div>
                      
                      <div className="product-content">
                        <div className="product-info">
                          <h4 className="product-name">{item.name}</h4>
                          <p className="product-description">{item.description}</p>
                          <div className="product-footer">
                            <div className="product-price">${item.price}</div>
                            {cartQuantity > 0 && (
                              <div className="in-cart-badge">
                                En carrito: {cartQuantity}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="product-controls">
                          <div className="quantity-controls-temp">
                            <button 
                              className="qty-btn-temp"
                              onClick={() => handleTempQuantityChange(item, -1)}
                              disabled={tempSelection.quantity === 0}
                            >
                              <Minus size={18} />
                            </button>
                            <span className="qty-display-temp">{tempSelection.quantity}</span>
                            <button 
                              className="qty-btn-temp"
                              onClick={() => handleTempQuantityChange(item, 1)}
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                          
                          <button 
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(item)}
                            disabled={tempSelection.quantity === 0}
                          >
                            <ShoppingBag size={18} />
                            <span>Agregar al pedido</span>
                          </button>
                        </div>
                        
                        {showNote && (
                          <div className="product-note-input">
                            <textarea
                              placeholder="Notas: ej. sin cebolla, poco queso..."
                              value={tempSelection.note}
                              onChange={(e) => handleNoteChange(item, e.target.value)}
                              rows="2"
                              className="note-textarea"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
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
                              {item.note && (
                                <div className="bill-item-note">
                                  <MessageSquare size={12} />
                                  {item.note}
                                </div>
                              )}
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
                          <div className="order-item-info">
                            <span className="order-item-name">{item.name}</span>
                            {item.note && (
                              <span className="order-item-note">
                                <MessageSquare size={14} />
                                {item.note}
                              </span>
                            )}
                          </div>
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
