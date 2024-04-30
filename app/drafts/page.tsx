// import styles from "../../styles/drafts.module.css"
import { getServerSession } from 'next-auth';
import prisma from "../../lib/prisma";
import Post from "../../components/post/post";
import { authOptions } from "../../lib/auth";
import PostBtns from '../../components/post/post-btns';

async function getDrafts() {
  const session = await getServerSession(authOptions);
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
  });

  return drafts;
}

const Drafts = async() => {
  const drafts = await getDrafts();

  return (
    <div className="w-5/6 h-[80vh] my-10 mx-auto rounded-lg flex flex-col justify-start gap-4 p-10">
      {drafts.map((post) => (
        <div key={post.id} className="flex h-[23%] gap-5">
          <Post post={post} />
          {/* <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='bg-emerald-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color]'>Publish</div>
            <div className='bg-rose-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color]'>Delete</div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Drafts;