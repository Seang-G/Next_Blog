import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// DELETE /api/post/:id
export async function DELETE(req: Request, {params: {id}}) {
  const post = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json({}, {status:post.id == id?200:500})
}

export async function GET(req, {params: {id}}) {
  const post = await prisma.post.findUnique({
    where: {
      id: String(id),
    },
    include: {
      author: {
        select: { name: true, email: true, image: true },
      },
    },
  });
  return NextResponse.json(post);
}