import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  try {
    const productData = await request.json();

    if (!productData.title) {
      return NextResponse.json(
        { message: "Title is required." },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        title: productData.title,
        description: productData.description || "",
        category: productData.category || "",
        price: productData.price || 0,
        discountPercentage: productData.discountPercentage || 0,
        rating: productData.rating || 0,
        stock: productData.stock || 0,
        tags: productData.tags || [],
        brand: productData.brand || "",
        sku: productData.sku || "",
        weight: productData.weight || 0,
        dimensions: productData.dimensions || {},
        warrantyInformation: productData.warrantyInformation || "",
        shippingInformation: productData.shippingInformation || "",
        availabilityStatus: productData.availabilityStatus || "",
        reviews: productData.reviews || {},
        returnPolicy: productData.returnPolicy || "",
        minimumOrderQuantity: productData.minimumOrderQuantity || 1,
        meta: productData.meta || {},
        thumbnail: productData.thumbnail || "",
        images: productData.images || [],
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error("Error during product creation:", error);
    return NextResponse.json(
      { message: `Error during product creation: ${error.message}` },
      { status: 500 }
    );
  }
};
