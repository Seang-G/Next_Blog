import PostLoading from "./post-loading";

export default function PostsLoading() {
  return <div className="animate-pulse gap-4 flex flex-col items-center">
    <PostLoading />
    <PostLoading />
    <PostLoading />
    <PostLoading />
  </div>
}