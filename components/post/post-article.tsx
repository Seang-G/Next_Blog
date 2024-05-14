import remarkGfm from "remark-gfm";
import { PostProps } from "./post";
import Markdown from "react-markdown";
import styles from "./post.module.css"

import { mdComponents } from "./md-components";


export default function PostArticle({post}: {post:PostProps}) {
  return(
    <div className={'flex flex-col gap-10'}>
      <div className='bg-black bg-opacity-10 border-b-2 border-b-stone-50 h-28 flex items-center justify-center'>
        <h2 className='text-center font-bold text-4xl'>{post.title} 
          <small className='font-light text-xl text-cyan-200'>{!post.published&&"(Draft)"}</small>
        </h2>
      </div>
        <Markdown 
        remarkPlugins={[remarkGfm]}
          components={mdComponents}
        >{post.content}</Markdown>
    </div>
  )
}