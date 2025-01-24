"use client";
import { LinkIcon } from "@heroicons/react/24/solid";
import React from "react";

const Button = () => {
  return (
    <button
      onClick={""}
      className="text-orange-500  font-bold hover:cursor-pointer hover:text-red-500 inline-block"
    >
      <LinkIcon className="w-5 h-5 inline-block mr-2" />
      Share Link
    </button>
  );
};

export default Button;
