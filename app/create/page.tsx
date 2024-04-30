"use client"

import Router from 'next/router';
import {useState} from 'react';
// import styles from "../../styles/create.module.css"
import { useRouter } from 'next/navigation';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const submitData = async (e) => {
    e.preventDefault();
    const body = { title, content };
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if(res.status==200) {
      router.push("/drafts")
      router.refresh()
    }
  };

  return (
    <form onSubmit={submitData} className='flex flex-col gap-1 py-14 px-20'>
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
        rows={24}
        value={content}
        className='text-md p-3 rounded-b-xl bg-white bg-opacity-10'
      />
      <div>
        <input disabled={!content || !title} type="submit" value="Create" className='p-3 bg-emerald-500 bg-opacity-70 rounded-lg cursor-pointer hover:bg-opacity-100 mr-3 mt-5 font-bold'/>
        or&nbsp;
        <a href="#" onClick={() => router.push('/')} className='text-rose-500 text-md text-opacity-70 hover:text-opacity-100'>
         Cancel
        </a>
      </div>
    </form>
  );
};

export default WritePage;