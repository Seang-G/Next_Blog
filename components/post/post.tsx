import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import UserInfo from "../user/user-info";
import UserSimpleLink from "../user/user-simple-link";
// import styles from "../styles/post.module.css"

export type PostProps = {
  id: string;
  title: string;
  author?: {
    name: string;
    email?: string;
    image?: string;
  }|null
  content?: string;
  published?: boolean;
};

const Post = ({ post }: { post: PostProps }) => {
  
  const slicedContent = post.content.replace(/\n/g, '').slice(0, 500);
  return (
    <div className="bg-gradient-to-r from-rose-500/30 to-black/30 w-[90%] h-80 rounded-3xl py-5 px-10 flex justify-between mb-12 overflow-hidden shadow-xl">
      <div className="basis-[90%]">
        <Link href={`/p/${post.id}`} className="text-4xl font-bold">{post.title}</Link>
        <ReactMarkdown className="text-xl pl-5 mt-10 opacity-70">
          {slicedContent+(slicedContent.length===500?"...":"")}
        </ReactMarkdown>
      </div>
      
      <div className="basis-[10%]">
        <UserSimpleLink user={post.author}/>
        {/* <UserInfo /> */}
      </div>
    </div>
  );
};

export default Post;