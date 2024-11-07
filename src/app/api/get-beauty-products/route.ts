import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: "beauty",
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching beauty products:", error);
    return NextResponse.json(
      { message: `Error fetching beauty products: ${error}` },
      { status: 500 }
    );
  }
};
