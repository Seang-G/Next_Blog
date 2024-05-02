"use client"

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
// import styles from "../styles/header.module.css";
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import HeaderUser from './header-user';
import HeaderUserLoading from '../loading/header-user-loading';
// import { josefinSans } from '../app/layout';

const urlToName = {
  '': "Public Feed",
  'p': "Public Feed",
  'create': "Write New",
  'drafts': "Drafts",
  'user': "My Page"
}

const josefinSans = Josefin_Sans({subsets:['latin']});

const Header = () => {
  const [pageName, setPageName] = useState("");
  const pathname = usePathname();

  useEffect(()=>{
    setPageName(urlToName[pathname.split("/")[1]])
  }, [pathname])

  return (
    <div className='w-full h-20 backdrop-blur-sm bg-white bg-opacity-[4%] border-b-2 border-white border-opacity-10 grid grid-cols-3 place-items-center px-20 fixed top-0'>
      <div className='w-full'><Link href={"/"} className={`${josefinSans.className} text-2xl w-fit`}>Next-Blog</Link></div>
      <div className='text-center bg-gradient-to-r from-white to-[#F96262] text-transparent bg-clip-text text-4xl font-black'>{pageName}</div>
      <HeaderUser />
    </div>
  )
};

export default Header;