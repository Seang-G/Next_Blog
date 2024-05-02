import UserInfo from "../../../components/user/user-info";
import { Suspense } from "react";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import UserInfoLoading from "../../../components/loading/user-info-loading";
import Posts from "../../../components/post/posts";
import PostsLoading from "../../../components/loading/posts-loading";

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

export default async function UserPage({params:{name}}) {
  

  return(
    <div className="h-[800px] w-[1900px] flex gap-10 pt-10">
      <div className='basis-1/4 pt-5'>
      <Suspense fallback={<UserInfoLoading />}>
        {/* @ts-expect-error Server Component */}
        <UserInfo name={name}/>
      </Suspense>
      </div>
      <div className="basis-3/4">
        <Suspense fallback={<PostsLoading />}>
          {/* @ts-expect-error Server Component */}
          <Posts getPosts={getPosts} />
        </Suspense>
      </div>
    </div>
  )
}