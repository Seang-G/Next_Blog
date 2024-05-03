import prisma from "../../lib/prisma"
import UserPost from "./user-post"

const getPosts = async(name:string) => {
  name = name.replace("%20", " ")
  const posts = prisma.post.findMany({
    where: {author:{name: name}, published:true},
    select: {id:true, title:true, content:true},
    orderBy: {id:"desc"}
  })

  return posts
}

export default async function UserPosts({name}) {
  const posts = await getPosts(name)
  return(
    <div className='grid grid-cols-2'>
      {posts.map(post=>{
        return <UserPost key={post.id} post={post}/>
      })}
    </div>
  )
}