import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Reducers
  const addCart = (item) => {
    const check = cartItems.find((v) => v.isbn13 === item.isbn13);
    if (check) {
      setCartItems(cartItems.map((v) => (v.isbn13 === item.isbn13 ? item : v)));
    } else {
      setCartItems((p) => [...p, item]);
    }
  };
  const removeCart = (id) => {
    const cart = cartItems.filter((v) => v.isbn13 !== id);
    setCartItems(cart);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
