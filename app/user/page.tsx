import UserInfo from "../../components/user/user-info";
import { Suspense } from "react";



export default async function UserPage() {
  

  return(
    <Suspense>
      {/* @ts-expect-error Server Component */}
      <UserInfo />
    </Suspense>
  )
}