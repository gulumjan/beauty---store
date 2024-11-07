import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  try {
    const { userId, productId, category, title, image, price } =
      await request.json();

    if (!userId || !productId || !title) {
      return NextResponse.json(
        { message: "User ID, Product ID, and Title are required." },
        { status: 400 }
      );
    }

    const favourite = await prisma.basket.create({
      data: {
        userId,
        productId,
        category: category || "",
        title,
        image: image || "",
        price: price,
      },
    });

    return NextResponse.json(favourite, { status: 201 });
  } catch (error) {
    console.error("Error adding to favourites:", error);
    return NextResponse.json(
      { message: `Error adding to favourites: ${error}` },
      { status: 500 }
    );
  }
};
