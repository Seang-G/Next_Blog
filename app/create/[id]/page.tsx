"use client"

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../../../components/loading/loader';
import Button from '../../../components/button';
import Link from 'next/link';

const EditPage = ({params:{id}}: {params:{id:string}}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const updatePost = async(title:string, content:string, postId:string) => {
    if (confirm("Are you sure you want to update this?")){
      setIsLoading(true);
      const body = { title, content };
      const res = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status==200) {
        router.push("/");
        router.refresh();
        setIsLoading(false);
      }
    }
  };

  const getPost = async(postId:string) => {
    const res = await fetch(`/api/post/${postId}`, {
      method: 'get'
    });
    const json = await res.json();
    console.log(json)
    setTitle(json.title);
    setContent(json.content);
  }

  useEffect(()=>{
    getPost(id)
  }, [])

  return (
    <div className='flex flex-col gap-1 py-14 px-20'>
      <input
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        value={title}
        className='text-4xl p-3 rounded-t-xl bg-white bg-opacity-10'
      />
      <textarea
        cols={50}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={18}
        value={content}
        className='text-xl text-md p-3 rounded-b-xl bg-white bg-opacity-10'
      />
      <div>
        <Button text='Update' className='p-3 bg-emerald-500 bg-opacity-70 rounded-lg cursor-pointer hover:bg-opacity-100 mr-3 mt-5 font-bold w-16 h-12' onClick={()=>updatePost(title, content, id)} disabled={!content || !title}/>
        or&nbsp;
        <Link href="/" className='text-rose-500 text-md text-opacity-70 hover:text-opacity-100'>
         Cancel
        </Link>
        {isLoading&&<Loading text='Updating'/>}
      </div>
    </div>
  );
};

export default EditPage;