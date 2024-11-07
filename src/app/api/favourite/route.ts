import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  try {
    const { userId, productId, category, title, image } = await request.json();
    console.log("🚀 ~ POST ~ userId:", userId);

    if (!userId || !productId || !title) {
      return NextResponse.json(
        { message: "User ID, Product ID, and Title are required." },
        { status: 400 }
      );
    }

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json(
        { message: "User does not exist." },
        { status: 400 }
      );
    }

    const favourite = await prisma.favourite.create({
      data: {
        userId,
        productId,
        category: category || "",
        title,
        image: image || "",
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
