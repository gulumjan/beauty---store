import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_API_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const POST = async (request: Request) => {
  // Get the current session from NextAuth
  const session = await getServerSession(authOptions);

  // Log session data for debugging
  console.log("Session data:", session);

  // Check if session or user email is available
  if (!session || !session.user || !session.user.email) {
    return NextResponse.json(
      { message: "Session or user email not found", test: session },
      { status: 401 }
    );
  }

  try {
    // Check for existing user in the database
    const findUser = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    console.log("Existing user:", findUser);

    // If user exists, return a conflict response
    if (findUser) {
      return NextResponse.json(
        { message: "User already exists", details: findUser },
        { status: 409 }
      );
    }

    // Create a new user in Prisma
    const [firstName, lastName] = session.user.name?.split(" ") ?? ["", ""];
    const data = await prisma.user.create({
      data: {
        email: session.user.email,
        firstName: firstName || "Unknown",
        lastName: lastName || "",
        photo: session.user.image || "",
        password: "", // Assuming password is not needed as it's managed by NextAuth
      },
    });

    console.log("New user created in Prisma:", data);

    // Save user data in Supabase
    const { error } = await supabase
      .from("User") // Ensure this matches your Supabase table name
      .insert([
        {
          email: session.user.email,
          firstName: firstName || "Unknown",
          lastName: lastName || "",
          photo: session.user.image || "",
        },
      ]);

    // Handle Supabase insert error
    if (error) {
      console.error("Error inserting user into Supabase:", error);
      return NextResponse.json(
        { message: `Error inserting user into Supabase: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    console.error("Error during sign-in:", error);
    console.error("Full error details:", error);

    return NextResponse.json(
      { message: `Error during sign-in: ${error.message}` },
      { status: 500 }
    );
  }
};
