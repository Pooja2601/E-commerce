"use client";
import React, { useState } from "react";

export const ProductCtx = React.createContext(null);
const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ProductCtx.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ProductCtx.Provider>
  );
};

export default Provider;
