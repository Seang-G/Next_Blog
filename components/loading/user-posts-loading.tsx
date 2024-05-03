import UserPostLoading from "./user-post-loading";

export default function UserPostsLoading() {
  return <div className="animate-pulse gap-4 grid grid-cols-2">
    <UserPostLoading />
    <UserPostLoading />
    <UserPostLoading />
    <UserPostLoading />
  </div>
}