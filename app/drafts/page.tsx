import styles from "../../styles/drafts.module.css"
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import prisma from "../../lib/prisma";
import Post from "../../components/post";

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
    <div className={styles.page}>
      <h1>My Drafts</h1>
      <main>
        {drafts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Drafts;