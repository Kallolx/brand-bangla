import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
}

interface CartContextType {
  cartCount: number;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
    setCartCount(prev => prev + item.quantity);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const itemToRemove = prev.find(item => item.id === id);
      if (itemToRemove) {
        setCartCount(count => count - itemToRemove.quantity);
      }
      return prev.filter(item => item.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 