import Image from "next/image";
import Link from "next/link";

export default function UserSimpleLink({user}){
  const authorName = user ? user.name : "Unknown author";
  return(
    <div className="aspect-6/7 h-full pt-1/4 flex flex-col items-center">
      <div className="h-full basis-4/5 flex justify-center items-center">
        <div className="absolute z-0 text-xl font-bold">Visit</div>
        <Link className="overflow-hidden rounded-full aspect-square w-[80%] hover:opacity-20 z-10 transition-opacity cursor-pointer" href={`/user/${user.name}`}>
          <Image className="" src={user.image} alt="user_image" width={250} height={250} />
        </Link>
      </div>
      <div className="w-full basis-1/5 flex justify-center">
        <div className='font-bold text-xl'>{authorName}</div>
      </div>
    </div>
  )
}