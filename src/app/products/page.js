import React from "react";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/productService";

const Products = async () => {
  const productList = await getProducts();
  const {
    data: { products },
  } = productList;
  return (
    <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products?.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
