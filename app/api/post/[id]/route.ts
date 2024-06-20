import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';

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

export async function PUT(request: Request, {params: {id}}){
  const session = await getServerSession(authOptions);
  const req = await request.json();
  const { title, content } = req;
  const post = await prisma.post.update({
    where: {
      id: String(id)
    },
    data: {
      title: title,
      content: content
    }
  })
  const user = await prisma.user.findUnique({
    where: {
      name: session.user.name
    }
  })

  if (post.authorId !== user.id) {
    return NextResponse.json({}, {status: 403});
  }

  return NextResponse.json({}, {status: post.id?200:500});
}