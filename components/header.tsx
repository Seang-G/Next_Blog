"use client"

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
// import styles from "../styles/header.module.css";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
// import { josefinSans } from '../app/layout';

const urlToName = {
  '': "Public Feed",
  'p': "Public Feed",
  'create': "Write New",
  'drafts': "Drafts",
}

const josefinSans = Josefin_Sans({subsets:['latin']});

const Header = () => {
  const { data: session, status } = useSession();
  const [pageName, setPageName] = useState("");
  const pathname = usePathname();

  useEffect(()=>{
    console.log(pathname)
    setPageName(urlToName[pathname.split("/")[1]])
  }, [pathname])

  return (
    <div className='w-full h-20 backdrop-blur-sm bg-white bg-opacity-[4%] border-b-2 border-white border-opacity-10 grid grid-cols-3 place-items-center px-20'>
      <div className='w-full'><Link href={"/"} className={`${josefinSans.className} text-2xl w-fit`}>Next-Blog</Link></div>
      <div className='text-center bg-gradient-to-r from-white to-[#F96262] text-transparent bg-clip-text text-4xl font-black'>{pageName}</div>
      <div className='justify-end w-full flex items-center gap-5'>
        {session?
        <div className='inline-flex justify-around gap-3'>
          <Link href={"/create"} className='bg-emerald-500 bg-opacity-70 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>+ New</Link>
          <Link href={"/drafts"} className='bg-black bg-opacity-30 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>Drafts</Link>
          <Link href={"/"} className='bg-black bg-opacity-30 rounded-md px-2 py-1 cursor-pointer transition-[background-color] hover:bg-opacity-100'>My page</Link>
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
        <div className='material-symbols-outlined cursor-pointer'><span className='text-4xl'>account_circle</span></div>
      </div>
    </div>
  )
};

export default Header;


/* HTML: <div class="triangle"></div> */