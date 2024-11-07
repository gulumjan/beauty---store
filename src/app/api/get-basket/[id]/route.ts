import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const userId = parseInt(params.id, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const baskets = await prisma.basket.findMany({
      where: { userId },
    });

    return NextResponse.json(baskets, { status: 200 });
  } catch (error) {
    console.error("Error fetching favourites:", error);
    return NextResponse.json(
      { message: `Error fetching favourites: ${error}` },
      { status: 500 }
    );
  }
};
