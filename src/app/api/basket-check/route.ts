import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  try {
    const { userId, productId } = await request.json();

    if (!userId || !productId) {
      return NextResponse.json(
        { message: "User ID and Product ID are required." },
        { status: 400 }
      );
    }

    const favourite = await prisma.basket.findFirst({
      where: {
        userId,
        productId,
      },
    });

    return NextResponse.json({ exists: Boolean(favourite) }, { status: 200 });
  } catch (error: any) {
    console.error("Error checking favourites:", error);
    return NextResponse.json(
      { message: `Error checking favourites: ${error.message}` },
      { status: 500 }
    );
  }
};
