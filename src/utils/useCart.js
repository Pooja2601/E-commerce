import React, { useContext, useEffect, useState } from "react";
import { ProductCtx } from "../context/Provider";
export const useCart = () => {
  const { cartItems, setCartItems } = useContext(ProductCtx);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalCount, setCartTotalCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.length);
    findTotalPrice();
    populateCartItems();
  }, [cartItems]);

  const findTotalPrice = () => {
    let amount = 0;
    cartItems.forEach((item) => (amount += item.price * item.quantity));
    setCartTotalCount(amount);
  };
  const populateCartItems = () => {
    //    if items are in localstorage but not in context (happens when we refresh page)
    if (cartItems.length === 0) {
      const products = localStorage.getItem("products");
      if (products) {
        const temp = JSON.parse(products);
        setCartItems(temp);
      }
    }
  };
  const addItem = (product) => {
    // check if item already exists in cart
    const existingProductIndex = cartItems?.findIndex(
      (item) => item.id === product.id
    );
    const updatedCart = [...cartItems];
    if (existingProductIndex != -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // else if add items
      updatedCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const deleteById = (productId) => {
    const newProducts = cartItems.filter((product) => productId != product.id);
    setCartItems(newProducts);
    if (newProducts.length === 0) {
      localStorage.removeItem("products");
    } else {
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  };

  const deleteAllItems = () => {
    localStorage.removeItem("products");
    setCartItems([]);
  };

  const incrementCartItems = (productId) => {
    const newProducts = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
    setCartItems(newProducts);
  };
  const decrementCartItems = (productId) => {
    const newProducts = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
    setCartItems(newProducts);
  };
  return {
    cartCount,
    cartTotalCount,
    cartItems,
    addItem,
    deleteAllItems,
    deleteById,
    incrementCartItems,
    decrementCartItems,
  };
};
