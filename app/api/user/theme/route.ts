import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma";
import { authOptions } from "../../../../lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:Request) {
  const session = await getServerSession(authOptions);
  const req = await request.json();
  const { name, theme } = req;
  
  if (name !== session.user.name) return NextResponse.json({}, {status: 401})

  const user = await prisma.user.update({
    where: {
      name: session.user.name,
    },
    data: {
      color: theme
    }
  })

  return NextResponse.json({}, {status: user.id?200:500});
}