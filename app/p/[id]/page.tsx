import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import prisma from '../../../lib/prisma';
import PostArticle from '../../../components/post/post-article';
import PostBtns from '../../../components/post/post-btns';
import UserSimpleLink from '../../../components/user/user-simple-link';


export async function getPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: postId
    },
    include: {
      author: {
        select: { name: true, email: true, image: true },
      },
    },
  });
  return post
}

const PostPage = async({params: {id}}: {params: {id: string}}) => {
  const session = await getServerSession(authOptions);
  const post = await getPost(id);

  return (
    <div className='flex flex-col px-32 py-10'>
      {/* <div className='flex flex-col items-center fixed right-11'>
        <Image className='rounded-full overflow-hidden' src={post.author.image} alt="user_image" width={100} height={100}/>
        <span className='font-bold'>{post.author.name || 'Unknown author'}</span>
      </div> */}
      <div className='flex flex-col items-center fixed right-11 w-10'>
        <UserSimpleLink user={post.author}/>
      </div>
      <PostArticle post={post}/>
      <PostBtns isOwner={session?.user.email === post.author.email} isPublished={post.published} postId={id} />
    </div>
  );
};

export default PostPage;