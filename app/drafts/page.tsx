// import styles from "../../styles/drafts.module.css"
import { getServerSession } from 'next-auth';
import prisma from "../../lib/prisma";
import { authOptions } from "../../lib/auth";
import Posts from '../../components/post/posts';
import { Suspense } from 'react';
import PostsLoading from '../../components/loading/posts-loading';

async function getDrafts() {
  const session = await getServerSession(authOptions);
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true, image: true, color:true },
      },
    },
  });

  return drafts;
}

const Drafts = async() => {

  return (
    <div className="w-5/6 h-full my-10 mx-auto rounded-lg flex flex-col justify-start gap-4 p-10">
      <Suspense fallback={<PostsLoading />}>
        {/* @ts-expect-error Server Component */}
        <Posts getPosts={getDrafts} />
      </Suspense>
    </div>
  );
};

export default Drafts;