import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => 
        i.name === item.name && i.category === item.category
      )
      
      if (existingItem) {
        return prev.map(i =>
          i.name === item.name && i.category === item.category
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => 
        i.name === item.name && i.category === item.category
      )
      
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(i =>
          i.name === item.name && i.category === item.category
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
      }
      
      return prev.filter(i => 
        !(i.name === item.name && i.category === item.category)
      )
    })
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity)
    }, 0)
  }

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotal,
      getItemCount
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
