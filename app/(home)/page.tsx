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
    <div className="w-5/6 h-[80vh]  bg-black bg-opacity-15 my-10 mx-auto rounded-lg flex flex-col justify-start gap-3 p-10 overflow-y-scroll">
      {posts.map((post) => (
        <div key={post.id} className="flex h-[23%]">
          <Post post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Blog
