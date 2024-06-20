"use client"

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../../../components/loading/loader';
import Button from '../../../components/button';
import Link from 'next/link';
import Preview from '../../../components/post/preview';

const EditPage = ({params:{id}}: {params:{id:string}}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const router = useRouter();

  const updatePost = async(title:string, content:string, postId:string) => {
    if (confirm("Are you sure you want to update this?")){
      setIsLoading("Updating");
      const body = { title, content };
      const res = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status===200) {
        router.push("/");
        router.refresh();
        setIsLoading("");
      } else if (res.status===403) {
        alert("Wrong Access.");
        router.push("/");
        setIsLoading("");
      }
    }
  };

  const getPost = async(postId:string) => {
    setIsLoading(" ");
    const res = await fetch(`/api/post/${postId}`, {
      method: 'get'
    });
    const json = await res.json();
    setTitle(json.title);
    setContent(json.content);
    setIsLoading("");
  }

  useEffect(()=>{
    getPost(id)
  }, [])

  return (
    <div className='flex flex-col gap-1 py-14 px-20'>
      <div className='flex justify-start mb-3'>
        <Button text='Preview' className='font-bold bg-indigo-600' onClick={()=>setIsPreview(pre=>!pre)}/>
      </div>
      {isPreview&&<Preview post={{id:'', title:title, content:content, published:true}}/>}
      {!isPreview&&
      <input
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        value={title}
        className='text-4xl p-3 rounded-t-xl bg-white bg-opacity-10'
      />}
      {!isPreview&&
      <textarea
        cols={50}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={18}
        value={content}
        className='text-xl text-md p-3 rounded-b-xl bg-white bg-opacity-10'
      />}
      <div>
        <Button text='Update' className='p-3 bg-emerald-500 bg-opacity-70 rounded-lg cursor-pointer hover:bg-opacity-100 mr-3 mt-5 font-bold w-16 h-12' onClick={()=>updatePost(title, content, id)} disabled={!content || !title}/>
        or&nbsp;
        <Link href="/" className='text-rose-500 text-md text-opacity-70 hover:text-opacity-100'>
         Cancel
        </Link>
        {isLoading.length>0&&<Loading text={isLoading}/>}
      </div>
    </div>
  );
};

export default EditPage;