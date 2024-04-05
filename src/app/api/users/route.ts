// Importe o Prisma Client
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return NextResponse.error();
  }
};
