import Post from "../../components/post"
import prisma from "../../lib/prisma"
// import styles from "../../styles/home.module.css"

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
    <div className="w-5/6 h-[80vh]  bg-black bg-opacity-15 my-10 mx-auto rounded-lg flex flex-col justify-start gap-10 p-10 overflow-y-scroll scroll-">
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Blog
