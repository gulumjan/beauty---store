import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import authOptions

const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  const session = await getServerSession(authOptions);
  console.log("🚀 ~ GET ~ session:", session);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json(
      { message: "Session or user email not found" },
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: `Error fetching user: ${error.message}` },
      { status: 500 }
    );
  }
};
