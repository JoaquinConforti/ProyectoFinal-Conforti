import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find(p => p.id === item.id);

    if (existingItem) {
      setCart(
        cart.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + quantity }
            : p
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
