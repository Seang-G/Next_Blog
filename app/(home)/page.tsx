import { Suspense } from "react";
import Posts from "../../components/post/posts";
import prisma from "../../lib/prisma"
import PostsLoading from "../../components/loading/posts-loading";

export const revalidate = 10;

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true, image: true}
      },
    },
    orderBy: {id: 'desc'}

  });

  return posts;
}

const Blog = async() => {

  return (
    <div className="w-5/6 h-full my-10 mx-auto rounded-lg flex flex-col justify-start gap-4 p-10">
      <Suspense fallback={<PostsLoading />}>
        {/* @ts-expect-error Server Component */}
        <Posts getPosts={getPosts}/>
      </Suspense>
    </div>
  )
}

export default Blog
