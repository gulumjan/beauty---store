import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: "jewelery",
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching beauty products:", error);
    return NextResponse.json(
      { message: `Error fetching beauty products: ${error.message}` },
      { status: 500 }
    );
  }
};
