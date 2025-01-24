import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import AddToCart from "../../../components/AddToCart";
import Button from "../../../components/Button";
import { getProductById } from "../../../services/productService";
import NotFound from "../../not-found";

const ProductDetails = async ({ params: { slug } }) => {
  const productDetails = await getProductById(slug);
  const {
    data: { product_details = {} },
  } = productDetails || {};
  const { title, description, id, sale, images } = product_details || {};
  if (!productDetails) {
    return <NotFound />;
  }
  const clientProduct = {
    name: title,
    description: description,
    id: id,
    price: sale?.offer_price,
    currency: sale?.currency,
    images: images?.featured_image,
  };

  return (
    <div className="m-2 px-20">
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="w-100 h-100">
          <Image
            priority
            src={images?.featured_image}
            width={360}
            height={360}
            alt={title}
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-md border rounded-md shadow-lg p-6 bg-white">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="flex pt-2 gap-2">
            <CheckIcon className="w-6 h-6 text-lime-600" />
            <span className="font-semibold">In Stock</span> |
            <Button />
          </div>

          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500">Price:</p>
            <p className="text-xl font-semibold">{sale?.offer_price}</p>
            <AddToCart product={clientProduct} />
          </div>
        </div>
      </div>
      <p
        className="mt-8 text-2xl font-extralight border p-6 bg-white"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default ProductDetails;
