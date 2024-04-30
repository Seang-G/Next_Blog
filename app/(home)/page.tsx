import Post from "../../components/post/post"
import prisma from "../../lib/prisma"
// import styles from "../../styles/home.module.css"

export const revalidate = 10;

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true, image: true}
      }
    }
  });

  return posts;
}

const Blog = async() => {

  const posts = await getPosts();

  return (
    <div className="w-5/6 h-full my-10 mx-auto rounded-lg flex flex-col justify-start gap-4 p-10">
      {posts.map((post) => (
        <div key={post.id} className="flex h-[23%]">
          <Post post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Blog
