"use client"

import Router from 'next/router';
import {useState} from 'react';
// import styles from "../../styles/create.module.css"
import { useRouter } from 'next/navigation';

const Draft = () => {
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
    <div>
      <form onSubmit={submitData}>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input disabled={!content || !title} type="submit" value="Create" />
        <a href="#" onClick={() => Router.push('/')}>
          or Cancel
        </a>
      </form>
    </div>
  );
};

export default Draft;