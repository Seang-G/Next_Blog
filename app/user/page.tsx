import UserInfo from "../../components/user/user-info";
import { Suspense } from "react";
import prisma from "../../lib/prisma";
import { getServerSession } from "next-auth";
import Post from "../../components/post/post";
import { authOptions } from "../../lib/auth";

async function getPosts() {
  const session = await getServerSession(authOptions);
  const posts = await prisma.post.findMany({
    where: {author: {email: session.user.email}},
    include: {
      author: {
        select: {name: true, image: true}
      },
    },
    orderBy: {id: 'desc'}

  });

  return posts;
}

export default async function UserPage() {
  const posts = await getPosts();

  return(
    <div className="flex gap-10 pt-10">
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <UserInfo />
      </Suspense>
      <div className="overflow-y-scroll">
        {posts.map(post=>{
          return(
            <Suspense key={post.id}>
              <Post post={post} />
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}