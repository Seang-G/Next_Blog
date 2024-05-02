import PostLoading from "./post-loading";

export default function PostsLoading() {
  return <div className="animate-pulse gap-4">
    <PostLoading />
    <PostLoading />
    <PostLoading />
    <PostLoading />
  </div>
}