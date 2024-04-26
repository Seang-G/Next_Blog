import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// PUT /api/publish/:id
export async function PUT(request: Request, {params:{id}}) {
  const post = await prisma.post.update({
    where: { id },
    data: { published: true },
  });

  return NextResponse.json({}, {status: post.published?200:500})
}