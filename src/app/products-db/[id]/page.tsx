// "use client"

// import { Submit } from "@/components/submitBtn";
// import { FormState, createProduct } from "@/app/actions/products";
import { getProduct } from "@/prisma-db";
// import { useActionState } from "react";
import EditProductForm from "./product-edit-form";
import { Product } from "./../../products-db/page";
import { notFound } from "next/navigation";



export default async function EditProductPage({params,}: {params: Promise<{id: string}>}) {
  const {id} = await params;

  
  const product: Product | null = await getProduct(parseInt(id));

  if(!product) {
    notFound()
  }

  return (
   <><EditProductForm product={product} /></>
  );
}