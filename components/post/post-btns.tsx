'use client'

import { useRouter } from "next/navigation";
import Button from "../button";
import { useState } from "react";
import Loading from "../../app/loading";
import Loader from "../loading/loader";

export default function PostBtns({isOwner, isPublished, postId}: {isOwner: boolean, isPublished: boolean, postId: string}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState("");

  async function deletePost(): Promise<void> {
    if(confirm("Are you sure you want to delete this?")){
      setIsLoading("Deleting")
      const res = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });
      if (res.status==200) {
        router.push("/");
        router.refresh();
      };
      setIsLoading("")
    }
  }
  
  async function publishPost(): Promise<void> {
    if(confirm("Are you sure you want to publish this?")){
      setIsLoading("Publishing")
      const res = await fetch(`/api/publish/${postId}`, {
        method: 'PUT',
      });
      if (res.status==200) {
        router.push("/");
        router.refresh();
      }
      setIsLoading("")
    }
  }

  return(
    isOwner&&<div className='absolute top-30'>
      {!isPublished && <Button text="Publish" className={'bg-emerald-500 bg-opacity-30 p-3 rounded-lg w-20 h-10 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color] mr-3'} onClick={publishPost} />}
      <Button text="Delete" className='bg-rose-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color] h-10 mr-3' onClick={deletePost} />
      <Button text="Edit" className='bg-cyan-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color] h-10' onClick={()=>{router.push(`/create/${postId}`)}} />
      {isLoading.length !== 0&&<Loader text={isLoading}/>}
    </div>
  )

}