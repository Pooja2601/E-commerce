"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../utils/useCart";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Cart = () => {
  const {
    cartCount,
    cartItems,
    cartTotalCount,
    incrementCartItems,
    decrementCartItems,
    deleteAllItems,
    deleteById,
  } = useCart();
  return (
    <div className="m-5 px-20">
      {cartCount > 0 ? (
        <>
          <h2 className="text-xl font-semibold">Cart Items: {cartCount}</h2>
          <button
            onClick={deleteAllItems}
            className="text-orange-400 mt-2 hover:text-red-700 hover:cursor-pointer font-bold"
          >
            Clear All <TrashIcon className="inline-block w-4 h-4" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">
            Your shopping cart is empty!
          </h2>
          <Link
            href="/products"
            className="text-xl mt-1 text-orange-200 underline"
          >
            Shop here
          </Link>
        </>
      )}
      {cartCount > 0 && (
        <div className="">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border rounded p-4 my-2 bg-white hover:shadow-lg"
            >
              <Link href={`/products/${item.id}`} className="flex items-center">
                <Image
                  src={`${item.images}`}
                  className="w-25 h-20"
                  width={200}
                  height={200}
                  alt={item.name}
                />
                <p className="font-semibold text-xl ml-2">{item.name}</p>
              </Link>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrementCartItems(item.id)}
                    className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                  >
                    <MinusIcon className="w-6 h-6" />
                  </button>
                  <p className="font-semibold text-xl">{item.quantity}</p>
                  <button
                    onClick={() => incrementCartItems(item.id)}
                    className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </button>
                </div>
                <p>
                  x <span className="text-xl font-semibold">{item.price}</span>
                </p>
                <button
                  onClick={() => deleteById(item.id)}
                  className="text-orange-500 hover:text-red-700"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-end border-t py-4 mt-8">
            <p className="text-xl">
              Total{" "}
              <span className="font-bold text-green-500">{cartTotalCount}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
