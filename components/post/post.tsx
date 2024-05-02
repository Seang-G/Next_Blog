import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import UserInfo from "../user/user-info";
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
      <div className="basis-[90%]">
        <Link href={`/p/${post.id}`} className="text-4xl font-bold">{post.title}</Link>
        <ReactMarkdown className="text-xl pl-5 mt-2 opacity-20">
          {post.content.slice(0, 300)}
        </ReactMarkdown>
      </div>
      
      <div className="basis-[10%]">
        <div className="aspect-6/7 w-full pt-1/4 flex flex-col items-center">
          <div className="w-full basis-4/5 flex justify-center items-center">
            <Image className="overflow-hidden rounded-full aspect-square w-[80%]" src={post.author.image} alt="user_image" width={250} height={250} />
          </div>
          <div className="w-full basis-1/5 flex justify-center items-center">
            <div className='font-bold'>{authorName}</div>
          </div>
        </div>
        {/* <UserInfo /> */}
      </div>
    </div>
  );
};

export default Post;