import Post, { PostProps } from "../../components/post"
import prisma from "../../lib/prisma"
import styles from "../../styles/home.module.css"

export const revalidate = 10;

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  });

  return posts;
}

const Blog = async() => {

  const posts = await getPosts();

  return (
    <div className={styles.page}>
      <h1>Public Feed</h1>
      <main>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Blog
