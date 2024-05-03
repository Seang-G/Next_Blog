"use client"
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import HeaderUserLoading from "../loading/header-user-loading";
import UserDefaultImage from "../svgs/user-default-image";

export default function HeaderUser(){
  const {data: session, status} = useSession();
  
  
  if (status==='loading'){
    return(
      <HeaderUserLoading />
    );
  }

  return(
    <div className='justify-end w-full flex items-center gap-5'>
      {session?
      <div className='inline-flex justify-around gap-3'>
        <Link href={"/create"} className='bg-emerald-500 bg-opacity-70 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>+ New</Link>
        <Link href={"/drafts"} className='bg-black bg-opacity-30 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>Drafts</Link>
        <Link href={`/user/${session.user.name}`} className='bg-black bg-opacity-30 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>My page</Link>
        <div 
        className='bg-rose-500 bg-opacity-70 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100' 
        onClick={()=>signOut()}>Log out
        </div>
      </div>:
      <div>
        <Link 
        href={"/api/auth/signin"}
        className='bg-emerald-500 bg-opacity-70 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100' 
        >Log in
        </Link>
      </div>}  
      {session?
      <Image className='rounded-full' src={session.user.image} alt='user_image' width={50} height={50}/>
      :<UserDefaultImage className="h-[50px] text-gray-400"/> }
    </div>
  )
}