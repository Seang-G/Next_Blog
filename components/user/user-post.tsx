import Link from "next/link";
import { PostProps } from "../post/post";
import ReactMarkdown from "react-markdown";

export default function UserPost ({ post }: { post: PostProps }) {
  const slicedContent = post.content.replace(/\n/g, '').slice(0, 300);

  return (
    <div className="bg-gradient-to-r from-rose-500/30 to-black/30 w-[90%] h-80 rounded-3xl py-5 px-10 flex justify-between mb-7 overflow-hidden shadow-xl">
      <div className="basis-[90%]">
        <Link href={`/p/${post.id}`} className="text-3xl font-bold">{post.title}</Link>
        <ReactMarkdown className="text-xl pl-5 mt-10 opacity-50">
          {slicedContent+(slicedContent.length===300?"...":"")}
        </ReactMarkdown>
      </div>
    </div>
  );
};