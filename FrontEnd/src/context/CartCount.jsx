import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <CartContext.Provider value={{ count, countHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
