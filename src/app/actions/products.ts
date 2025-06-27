"use server"

import { addProduct } from "@/prisma-db"
import { redirect } from "next/navigation"
import { updateProduct } from "@/prisma-db"
import { deleteProduct } from "@/prisma-db"
import { revalidatePath } from "next/cache"

export type Errors = {
  image?: string,
  title?: string,
  description?: string
}

export type FormState = {
  errors: Errors,
   values?: {
    image?: string,
  title?: string,
  description?: string
   }
}

export async function createProduct(prevState: FormState, formData: FormData) {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;

    const errors: Errors = {}

  if(!image) {
    errors.image = "Загрузити фотку"
  }
  if(!title) {
    errors.title = "Вкажить назву"
  }

  if(!description) {
    errors.description = "Вкажить описання"
  }

  if(Object.keys(errors).length > 0) {
    return {errors, values: {
    image,
  title,
  description,
   }}
  }
     await addProduct(image, title, description);
    redirect("/products-db");
  }

  // 
  export async function editProduct(id: number, prevState: FormState, formData: FormData) {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;

    const errors: Errors = {}

  if(!image) {
    errors.image = "Загрузити фотку"
  }
  if(!title) {
    errors.title = "Вкажить назву"
  }

  if(!description) {
    errors.description = "Вкажить описання"
  }

  if(Object.keys(errors).length > 0) {
    return {errors, values: {
    image,
  title,
  description,
   }}
  }
     await updateProduct(id, image, title, description);
    redirect("/products-db");
  }

  export async function removeProduct(id: number) {
    await deleteProduct(id)
    revalidatePath("/products-db")
  }