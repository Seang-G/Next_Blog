'use client'

import { useRouter } from "next/navigation";

export default function PostBtns({isOwner, isPublished, postId}: {isOwner: boolean, isPublished: boolean, postId: string}) {
  const router = useRouter();

  async function deletePost(): Promise<void> {
    const res = await fetch(`/api/post/${postId}`, {
      method: 'DELETE',
    });
    if (res.status==200) {
      router.back();
      router.refresh();
    };
  }
  
  async function publishPost(): Promise<void> {
    const res = await fetch(`/api/publish/${postId}`, {
      method: 'PUT',
    });
    if (res.status==200) {
      router.back();
      router.refresh();
    }
  }

  return(
    isOwner&&<div className='absolute top-30'>
      {isPublished && <button className={'bg-emerald-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color] mr-3'} onClick={publishPost}>Publish</button>}
      <button className='bg-rose-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color]' onClick={deletePost}>Delete</button>
    </div>
  )

}