import UserInfo from "../../../components/user/user-info";
import { Suspense } from "react";
import UserInfoLoading from "../../../components/loading/user-info-loading-v";
import UserPosts from "../../../components/user/user-posts";
import UserPostsLoading from "../../../components/loading/user-posts-loading";

export default async function UserPage({params:{name}}) {
  

  return(
    <div className="mx-auto flex justify-center gap-10 pt-10">
      <div className='basis-1/4 pt-5'>
      <Suspense fallback={<UserInfoLoading />}>
        {/* @ts-expect-error Server Component */}
        <UserInfo name={name}/>
      </Suspense>
      </div>
      <div className="basis-3/4">
        <Suspense fallback={<UserPostsLoading />}>
          {/* @ts-expect-error Server Component */}
          <UserPosts name={name}/>
        </Suspense>
      </div>
    </div>
  )
}