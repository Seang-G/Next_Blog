// import styles from "../../styles/drafts.module.css"
import { getServerSession } from 'next-auth';
import prisma from "../../lib/prisma";
import Post from "../../components/post";
import { authOptions } from "../../lib/auth";

async function getDrafts() {
  const session = await getServerSession(authOptions);
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return drafts;
}

const Drafts = async() => {
  const drafts = await getDrafts();

  return (
    <div>
      <h1>My Drafts</h1>
      <main>
        {drafts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Drafts;