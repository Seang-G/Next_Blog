import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostProps } from "./post";


export default function PostArticle({post}: {post:PostProps}) {
  return(
    <div className='flex flex-col gap-10'>
      <div>
        <h2 className='text-center font-bold text-4xl'>{post.title} 
          <small className='font-light text-xl text-cyan-200'>{!post.published&&"(Draft)"}</small>
        </h2>
      </div>
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]} className='text-lg'>{post.content}</ReactMarkdown>
    </div>
  )
}