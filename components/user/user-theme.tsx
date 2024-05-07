'use client';

import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../button";
import Loader from "../loading/loader";

const colors = ['red', 'blue', 'yellow', 'deepred']

export default function UserTheme({userName}:{userName:string}) {
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const {data:session} = useSession();
  const router = useRouter();

  const updateTheme = async() => {
    if (confirm("Are you sure you want to update theme color?")){
      const session = await getSession();
      setIsLoading("Changing");
      const body = { name:session.user.name, theme:selected };
      const res = await fetch(`/api/user/theme`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status==200) {
        router.refresh();
        setIsLoading("");
      } else {
        alert("Error")
        router.push("/");
      }
    }
  };

  if (session?.user?.name !== userName) return <div></div>

  return (
    <div className="flex flex-col items-center gap-5">
    <div className="p-5 w-fit h-fit border-white border-opacity-50 border-4 rounded-3xl shadow-md flex justify-around items-center gap-5">
      {colors.map((color, idx)=>
        <span key={idx} className="w-10 h-10 rounded-full cursor-pointer opacity-80 hover:opacity-100 transition-opacity" style={{backgroundColor:`var(--theme-${color})`, border:color===selected?"3px solid #ffffff99":""}} onClick={()=>{setSelected(color)}}></span>
      )}
    </div>
    <Button text="Change" className='bg-sky-700 w-18 h-10 bg-opacity-70 hover:bg-opacity-100 transition-[background-color]' onClick={updateTheme}/>
    {isLoading==="Changing"&&<Loader text="Changing Theme"/>}
    </div>
  )
}