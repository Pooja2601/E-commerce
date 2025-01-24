"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../utils/useCart";
const AddToCart = ({ product }) => {
  const { addItem } = useCart(product);
  const handleCartAdd = () => {
    addItem(product);
    toast.success(`${product.name} Item added to cart`);
  };
  return (
    <div>
      <button
        onClick={handleCartAdd}
        className="w-full mt-4 py-2 px-6 bg-orange-500 text-white rounded-md hover:bg-red-600"
      >
        Add To Cart
      </button>
      <Toaster />
    </div>
  );
};

export default AddToCart;
