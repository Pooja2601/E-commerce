"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";
import Link from "next/link";
import Searchbar from "../components/SearchBar";
// Lazy load ProductCard for better performance
const ProductCard = lazy(() => import("../components/ProductCard"));

const Page = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [take, setTake] = useState(10); // Number of products per page
  const [skip, setSkip] = useState(0); // Offset
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await fetch(
          `https://prodapp.lifepharmacy.com/api/v1/products?take=${take}&skip=${skip}`
        );
        const data = await response.json();
        setProducts(data?.data?.products); // Ensure API returns `data` array
        setFilteredProducts(data?.data?.products || []);
        setTotal(30); // Ensure API returns `total` count
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, [skip]);
  return (
    <div>
      <div className="bg-[url(/images/banner.jpeg)] h-80 pt-20 pb-20">
        {/* Banner */}
        <h2 className="text-white text-5xl text-center font-semibold">
          More than a <span className="text-orange-400">pharmacy</span>
          {" - "}
          Your partner in <span className="text-rose-500">wellness</span>!
        </h2>
        <Searchbar
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      {/* Cards */}
      {/* Show Loader While Fetching */}
      {isLoading ? (
        <div className="text-center text-gray-500 mt-4">
          Loading products...
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="text-center text-gray-500 mt-4">
              Loading products...
            </div>
          }
        >
          <div className="m-4 flex flex-wrap gap-6 justify-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                No products found.
              </p>
            )}
          </div>
        </Suspense>
      )}
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setSkip((prev) => Math.max(0, prev - take))}
          disabled={skip === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="py-2">Page {Math.floor(skip / take) + 1}</span>
        <button
          onClick={() =>
            setSkip((prev) => (prev + take < total ? prev + take : prev))
          }
          disabled={skip + take >= total}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Link
        href="/products"
        className="inline-block text-orange-400 p-5 font-bold hover:underline"
      >
        View All {">"}
      </Link>
    </div>
  );
};

export default Page;
