import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
// Заполнение БД тестовыми данными
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { image: "f1", title: "Продукт 1",  description: "Описание 1" },
        { image: "a2",title: "Продукт 2", description: "Описание 2" },
        { image: "c3",title: "Продукт 3",  description: "Описание 3" },
      ],
    });
  }
};
seedProducts();

// CRUD-операції
export async function getProducts(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if(query) {
    return prisma.product.findMany({
  where: {
    OR: [
      {
        image: {
          contains: query,
        },
      },
      {
        title: {
          contains: query,
        },
      },
      {
        description: {
          contains: query,
        },
      },
    ],
  },
})
  }
  return prisma.product.findMany();
}
export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
  });
}
export async function addProduct(
    image: string,
  title: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.create({
    data: { image, title, description },
  });
}
export async function updateProduct(
  id: number,
  image: string,
  title: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.update({
    where: { id },
    data: { image, title, description },
  });
}
export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: { id },
  });
}