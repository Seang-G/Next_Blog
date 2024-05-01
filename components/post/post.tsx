import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import styles from "../styles/post.module.css"

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email?: string;
    image?: string;
  }|null
  content?: string;
  published: boolean;
};

const Post = ({ post }: { post: PostProps }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div className="bg-gradient-to-r from-rose-500/30 to-black/30 w-[90%] h-40 rounded-3xl py-5 px-10 flex justify-between mb-3 overflow-hidden shadow-xl">
      <div>
        <Link href={`/p/${post.id}`} className="text-4xl font-bold">{post.title}</Link>
        <ReactMarkdown className="text-xl pl-5 mt-2 opacity-20">
          {post.content.slice(0, 300)}
        </ReactMarkdown>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 min-w-32">
        {/* <div className="material-symbols-outlined text-lg"><span className="text-6xl font-light">account_circle</span></div> */}
        <Image className="rounded-full overflow-hidden" src={post.author.image} alt="user_image" width={70} height={70} />
        <div className='font-bold'>{authorName}</div>
      </div>
    </div>
  );
};

export default Post;