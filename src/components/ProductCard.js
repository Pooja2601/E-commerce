import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <Link
      href={`/products/${item.id}`}
      className="w-full sm:w-64 h-62 rounded-lg border border-gray-300 hover:cursor-pointer hover:shadow-lg"
    >
      <Image
        src={item.images.featured_image}
        width={260}
        height={100}
        alt={item.title}
        className="p-2 rounded-sm"
      />
      <div className="flex p-3 justify-start items-start">
        <StarIcon className="text-orange-500 w-5 h-5 mr-2" />
        <p className="text-orange-500 w-5 h-5 mr-2">{item.rating}</p>
      </div>

      <div className="flex justify-between p-3 h-20">
        <div>
          <h1 className="font-semibold">{item.title}</h1>
          {/* <p className="w-40 truncate">This is discription</p> */}
        </div>
      </div>
      <div className="text-green-500 p-3 font-bold">
        {item.sale.currency} {item.sale.offer_price}
        <span className="text-gray-400 ml-2">
          <del>{item.sale.regular_price}</del>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
