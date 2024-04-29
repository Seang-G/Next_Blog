import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import styles from "../styles/post.module.css"

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email?: string;
  }|null
  content: string;
  published: boolean;
};

const Post = ({ post }: { post: PostProps }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div className="bg-gradient-to-r from-rose-500/30 to-black/30 w-[90%] h-full rounded-3xl py-5 px-10 flex justify-between mb-3 overflow-hidden shadow-xl">
      <div>
        <Link href={`/p/${post.id}`} className="text-4xl font-bold">{post.title}</Link>
        <ReactMarkdown className="text-xl pl-5 mt-2">
          {post.content}
        </ReactMarkdown>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="material-symbols-outlined text-lg"><span className="text-6xl font-light">account_circle</span></div>
        <div>{authorName}</div>
      </div>
    </div>
  );
};

export default Post;