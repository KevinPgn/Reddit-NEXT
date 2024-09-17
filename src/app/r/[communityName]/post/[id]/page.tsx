import { SidebarCommunity } from '@/components/sidebarCommunity/SidebarCommunity'
import React from 'react'
import { getPost } from './post.action'
import { PostWithComments } from '@/features/posts/PostWithComments'

interface PostPageProps {
  params: {
    communityName: string
    id: string
  }
}

const PostPage = async ({params}: PostPageProps) => {
  const {communityName, id} = params
  const post = await getPost(id)

    return (
    <section className='max-w-[1500px] mt-5 mx-auto flex gap-5'>
        <div className='flex-1'>
            <PostWithComments post={post} communityName={communityName} />
        </div>

        <SidebarCommunity communityName={communityName} />
    </section>
  )
}

export default PostPage