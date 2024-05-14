import Post, { PostProps } from "./post";
import PostArticle from "./post-article";

export default function Preview({post}:{post:PostProps}){
  return(
    <div className='min-h-[50vh]'>
      <PostArticle post={post}/>
    </div>
  )
}