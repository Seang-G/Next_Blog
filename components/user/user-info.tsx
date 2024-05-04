import Image from "next/image";
import prisma from "../../lib/prisma";

async function getUserInfo(name:string) {
  name = decodeURI(name)
  const userInfo = await prisma.user.findUnique({
    where: {
      name: name
    },
    select: {
      name: true,
      color: true,
      image: true
    }
  })

  return userInfo;
}

export default async function UserInfo({name}:{name:string}) {
  const userInfo = await getUserInfo(name);
  return(
    <div className="w-full flex flex-col items-center aspect-6/7">
      <div className="w-full basis-4/5 flex justify-center items-center">
        <Image src={userInfo.image} alt="user_image" width={250} height={250} className="overflow-hidden rounded-full aspect-square w-[80%]"/>
      </div>
      <div className="w-full basis-1/5 flex justify-center">
        <div className="font-bold text-[300%]">{userInfo.name}</div>
      </div>
    </div>
    // <UserInfoLoading />
  )
}