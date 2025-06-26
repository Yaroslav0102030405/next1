import { getProducts } from "@/prisma-db";
type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
};
export default async function ProductsPrismaDBPage() {
  const products: Product[] = await getProducts();

  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.image}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">{product.title}</p>
        </li>
      ))}
    </ul>
  );
}