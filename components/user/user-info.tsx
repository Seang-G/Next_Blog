import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../../lib/auth";
import prisma from "../../lib/prisma";

async function getUserInfo() {
  const session = await getServerSession(authOptions);
  const userInfo = await prisma.user.findUnique({
    where: {
      email: session.user.email
    },
    select: {
      name: true,
      email: true,
      image: true
    }
  })

  return userInfo;
}

export default async function UserInfo() {
  const userInfo = await getUserInfo();
  return(
    <div>
      <div>{userInfo.name}</div>
      <div>{userInfo.email}</div>
      <Image src={userInfo.image} alt="user_image" width={100} height={100}/>
      
    </div>
  )
}