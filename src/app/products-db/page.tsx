import { getProducts } from "@/prisma-db";
// import Link from "next/link";
// import { removeProduct } from "../actions/products";
import ProductDetail from "./product-detail";

export type Product = {
  id: number;
  image: string;
  title: string;
  description: string | null;
};
export default async function ProductsPrismaDBPage({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const {query} = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    // <ul className="space-y-4 p-4">
    //   {products.map((product) => (
    //     <li
    //       key={product.id}
    //       className="p-4 bg-white shadow-md rounded-lg text-gray-700"
    //     >
    //       <h2 className="text-xl font-semibold">
    //         <Link href={`/products-db/${product.id}`}>{product.image}</Link>    
    //       </h2>
    //       <p>{product.description}</p>
    //       <p className="text-lg font-medium">{product.title}</p>
    //      <form action={removeProduct.bind(null, product.id)}>
    //        <button type="submit" className="px-4 py-2 mt-4 text-white bg-red-500 hover:bg-red-800 rounded-md cursor-pointer">Видалити</button>
    //      </form>
    //     </li>
    //   ))}
    // </ul>
    <ProductDetail products={products} />
  );
}