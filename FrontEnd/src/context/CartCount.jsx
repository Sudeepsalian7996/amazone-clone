import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const countHandler = () => {
    setCount(count + 1);
  };

  const searchTextHandler = (search) => {
    setSearchText(search);
  };

  useEffect(() => {
    setSearchText("");
  }, [location.pathname]);

  return (
    <CartContext.Provider
      value={{ count, countHandler, searchText, searchTextHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
