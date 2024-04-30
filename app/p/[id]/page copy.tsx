import ReactMarkdown from 'react-markdown';
import {useRouter} from 'next/navigation';
import { PostProps } from '../../../components/post/post';
// import styles from "../../../styles/p.module.css"
import { useSession } from 'next-auth/react';
import { Suspense, useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import mdToHtml from '../../../lib/md';
import Image from 'next/image';
import Loading from '../../loading';


const PostPage = ({params: {id}}: {params: {id: string}}) => {
  const [post, setPost] = useState<null|PostProps>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const {data:session} = useSession();
  const router = useRouter();

  async function getPost(): Promise<void> {
    const response = await fetch(`/api/post/${id}`, {
      method: 'GET'
    });
    const json = await response.json();
    // json.conntent = await mdToHtml(json.content);
    setPost(json);
  };
  
  async function deletePost(): Promise<void> {
    const res = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (res.status==200) {
      router.back();
      router.refresh();
    };
  }
  
  async function publishPost(): Promise<void> {
    const res = await fetch(`/api/publish/${id}`, {
      method: 'PUT',
    });

    if (res.status==200) {
      router.back();
      router.refresh();
    }
  }
  
  useEffect(()=> {
    getPost();
  }, [])

  useEffect(()=>{
    if (post) {
      setIsOwner(session?.user?.email === post.author?.email)
      setIsLoaded(true);
    }
  }, [post])

  return (
    isLoaded&&
    <Suspense fallback={<Loading/>}>
    <div className='flex flex-col px-32 py-10 gap-5'>
      <div className='flex flex-col items-center fixed right-11'>
        <Image className='rounded-full overflow-hidden' src={post.author.image} alt="user_image" width={100} height={100}/>
        <span className='font-bold'>{post.author.name || 'Unknown author'}</span>
      </div>
      <div>
        <h2 className='text-center font-bold text-4xl'>{post?.title} 
          <small className='font-light text-xl text-cyan-200'>{!post?.published&&"(Draft)"}</small>
        </h2>
      </div>
      {isOwner&&<div>
        {!post.published && <button className={'bg-emerald-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color] mr-3'} onClick={publishPost}>Publish</button>}
        <button className='bg-rose-500 bg-opacity-30 p-3 rounded-lg w-20 text-center cursor-pointer hover:bg-opacity-100 transition-[background-color]' onClick={deletePost}>Delete</button>
      </div>}
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]} className='text-lg'>{post?.content}</ReactMarkdown>
    </div>
    </Suspense>
  );
};

export default PostPage;