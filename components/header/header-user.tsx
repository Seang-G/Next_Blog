"use client"
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import HeaderUserLoading from "../loading/header-user-loading";
import UserDefaultImage from "../svgs/user-default-image";
import Button from "../button";
import { useRouter } from "next/navigation";

export default function HeaderUser(){
  const {data: session, status} = useSession();
  const router = useRouter();
  if (status==='loading'){
    return(
      <HeaderUserLoading />
    );
  }

  return(
    <div className='justify-end w-full flex items-center gap-5'>
      {session?
      <div className='inline-flex justify-around gap-3'>
        <Button text="+ New" href={"/create"} className='bg-emerald-500 bg-opacity-70 transition-[background-color] hover:bg-opacity-100' />
        <Button text="Drafts" href={"/drafts"} className='bg-black bg-opacity-30 transition-[background-color] hover:bg-opacity-100' />
        <Button text="My Page" href={`/user/${session.user.name}`} className='bg-black bg-opacity-30 transition-[background-color] hover:bg-opacity-100' />
        <Button text="Log out"
        className='bg-rose-500 bg-opacity-70 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100' 
        onClick={()=>{
          if(confirm("Are you sure to log out?")){
            signOut()
            router.push("/")
          }
          
          }} />
      </div>:
      <div>
        <Button text="Log in" 
        href={"/api/auth/signin"}
        className='bg-emerald-500 bg-opacity-70 transition-[background-color] hover:bg-opacity-100' 
        />
      </div>}  
      {session?
      <Image className='rounded-full' src={session.user.image} alt='user_image' width={50} height={50}/>
      :<UserDefaultImage className="h-[50px] text-gray-400"/> }
    </div>
  )
}