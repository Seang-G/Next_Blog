import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';



// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export async function POST(request: Request) {
  const req = await request.json();
  const { title, content } = req;
  const session = await getServerSession(authOptions);
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });

  return NextResponse.json({}, {status: post.id?200:500});
}