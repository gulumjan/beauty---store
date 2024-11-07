import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_API_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const POST = async () => {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json(
      { message: "Session or user email not found", test: session },
      { status: 401 }
    );
  }

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    console.log("Existing user:", findUser);

    if (findUser) {
      return NextResponse.json(
        { message: "User already exists", details: findUser },
        { status: 409 }
      );
    }

    const [firstName, lastName] = session.user.name?.split(" ") ?? ["", ""];
    const data = await prisma.user.create({
      data: {
        email: session.user.email,
        firstName: firstName || "Unknown",
        lastName: lastName || "",
        photo: session.user.image || "",
        password: "",
      },
    });

    console.log("New user created in Prisma:", data);

    const { error } = await supabase.from("User").insert([
      {
        email: session.user.email,
        firstName: firstName || "Unknown",
        lastName: lastName || "",
        photo: session.user.image || "",
      },
    ]);

    if (error) {
      console.error("Error inserting user into Supabase:", error);
      return NextResponse.json(
        { message: `Error inserting user into Supabase: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error during sign-in: ${error}` },
      { status: 500 }
    );
  }
};
