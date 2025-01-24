"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter products based on the search input
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );

    setFilteredProducts(filtered);
  };

  return (
    <form className="m-auto w-[600px] relative">
      <div className="relative mt-10">
        <input
          type="search"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 m-2 rounded-full bg-white"
        />
        <MagnifyingGlassIcon className="absolute w-6 h-6 right-1 top-1/2 -translate-y-1/2 " />
      </div>
    </form>
  );
};

export default Searchbar;
