import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { message: "Product ID is required." },
      { status: 400 }
    );
  }

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: `Product with ID '${id}' not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return NextResponse.json(
      { message: `Error fetching product by ID: ${error}` },
      { status: 500 }
    );
  }
};
