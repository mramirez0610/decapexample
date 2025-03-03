import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  //useContext is so sweet

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    const inCart = cart.find((cartItem) => cartItem.id === item.id);

    // crazy ternary operator practice
    setCart(
      inCart
        ? cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...cart, { ...item, quantity: 1 }]
    );
  };

  const removeItem = (id) => {
    const inCart = cart.find((cartItem) => cartItem.id === id);

    // ternary operators look kinda gross
    setCart(
      inCart.quantity > 1
        ? cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        : cart.filter((cartItem) => cartItem.id !== id)
    );

    /*
    ugly (?) if else statement

    if (inCart.quantity > 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
    */
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
