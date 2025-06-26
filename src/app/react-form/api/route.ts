import { addProduct } from "@/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();
  const { image, title, description } = body;
  const product = await addProduct(image, title, description);
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}