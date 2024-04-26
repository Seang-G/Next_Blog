'use client'
import ReactMarkdown from 'react-markdown';
import {redirect, useRouter} from 'next/navigation';
import { PostProps } from '../../../components/post';
import styles from "../../../styles/p.module.css"
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Post = ({params: {id}}: {params: {id: string}}) => {
  const [post, setPost] = useState<null|PostProps>(null);
  const [isOwner, setIsOwner] = useState(false);
  const {data:session} = useSession();
  const router = useRouter();
  
  async function getPost(): Promise<void> {
    const response = await fetch(`/api/post/${id}`, {
      method: 'GET'
    });
    const json = await response.json();
    setPost(json);
  };
  
  async function deletePost(): Promise<void> {
    const res = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (res.status==200) {
      router.push("/drafts");
      router.refresh();
    };
  }
  
  async function publishPost(): Promise<void> {
    const res = await fetch(`/api/publish/${id}`, {
      method: 'PUT',
    });

    if (res.status==200) router.push("/");
  }
  
  useEffect(()=> {
    getPost();
  }, [])

  useEffect(()=>{
    if (post) {
      setIsOwner(session?.user?.email === post.author?.email)
    }
  }, [post])

  return (
    <div className={styles.p}>
      {isOwner&&<div>
        <h2>{post.title} {!post.published&&"(Draft)"}</h2>
        <p>By {post?.author?.name || 'Unknown author'}</p>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </div>}
      {isOwner&&<div>
        {
          !post.published && (
            <button onClick={() => publishPost()}>Publish</button>
          )
        }
        {
          (
            <button onClick={() => deletePost()}>Delete</button>
          )
        }
      </div>}
    </div>
  );
};

export default Post;