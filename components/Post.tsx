import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "../styles/post.module.css"

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

const PostPage = ({ post }: { post: PostProps }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <Link href={`/p/${post.id}`} className={styles.post}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </Link>
  );
};

export default PostPage;