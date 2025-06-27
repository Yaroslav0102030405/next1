"use client"

// import { Submit } from "@/components/submitBtn";
import { FormState, editProduct } from "@/app/actions/products";
// import { getProduct } from "@/prisma-db";
import { useActionState } from "react";
import { Product } from "./../../products-db/page";

export default function EditProductForm({product}: {product: Product}) {
//   const {id } = await params

//   const product = await getProduct(parseInt(id))
  
    const initialState: FormState = {
errors: {},
values: {
    image: "",
  title: "",
  description: "",
   }
  }
  const [state, formAction, isPeding] = useActionState((prevState: FormState, formData: FormData) => {
    return editProduct(product.id, prevState, formData)}, initialState)

  

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
        Название
        <input
          type="text"
          className="block w-full p-2 text-black border rounded bg-white"
          name="image"
          defaultValue={product.image}
        />
      </label>
      {state.errors.image && <p className="text-red-500">{state.errors.image}</p>}
      </div>
      <div>
        <label className="text-white">
        Цена
        <input
          type="textr"
          className="block w-full p-2 text-black border rounded bg-white"
          name="title"
          defaultValue={product.title}
        />
      </label>
       {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
      </div>
     <div>
       <label className="text-white">
        Описание
        <textarea
          className="block w-full p-2 text-black border rounded bg-white"
          name="description"
          defaultValue={product.description && ""}
        />
      </label>
         {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
     </div>
     <button type="submit" disabled={isPeding} className="bg-blue-400">
      {isPeding ? "Відправляється" : "Відправити"}
     </button>
      {/* <Submit /> */}
    </form>
  );
}