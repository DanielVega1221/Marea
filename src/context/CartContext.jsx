import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((item, note = '') => {
    setCartItems(prev => {
      const existingItem = prev.find(i => 
        i.name === item.name && i.category === item.category && i.note === note
      )
      
      if (existingItem) {
        return prev.map(i =>
          i.name === item.name && i.category === item.category && i.note === note
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      
      return [...prev, { ...item, quantity: 1, note: note || '' }]
    })
  }, [])

  const removeFromCart = useCallback((item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => 
        i.name === item.name && i.category === item.category && i.note === item.note
      )
      
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(i =>
          i.name === item.name && i.category === item.category && i.note === item.note
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      }
      
      return prev.filter(i => 
        !(i.name === item.name && i.category === item.category && i.note === item.note)
      )
    })
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const getTotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity)
    }, 0)
  }, [cartItems])

  const getItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }, [cartItems])

  const updateItemNote = useCallback((item, newNote) => {
    setCartItems(prev => prev.map(i =>
      i.name === item.name && i.category === item.category && i.note === item.note
        ? { ...i, note: newNote }
        : i
    ))
  }, [])

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotal,
      getItemCount,
      updateItemNote
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
