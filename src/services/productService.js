import { notFound } from "next/navigation";

export async function getProducts() {
  let data = null;
  try {
    // Call an external API endpoint to get posts
    const res = await fetch("https://prodapp.lifepharmacy.com/api/v1/products");
    data = await res.json();
  } catch (err) {
    console.log("Error occured while fetching products!", err);
  }
  if (!data) {
    notFound();
  }
  return data;
}

export async function getProductById(productId) {
  let data = null;
  try {
    // Call an external API endpoint to get posts
    const res = await fetch(
      `https://prodapp.lifepharmacy.com/api/v1/product/${productId}`
    );
    data = await res.json();
  } catch (err) {
    console.log("Error occured while fetching products by id!", err);
  }
  if (!data) {
    notFound();
  }
  return data;
}
