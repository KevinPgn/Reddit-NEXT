import { PostForm } from '@/components/postForm/PostForm'
import { SidebarCommunity } from '@/components/sidebarCommunity/SidebarCommunity'
import React from 'react'
import { getCommunityInfo } from './communityInfo.action'
import { Post } from '@/features/posts/Post'

interface CommunityNamePageProps {
    params: {
        communityName: string
    }
}

const CommunityNamePage = async ({ params }: CommunityNamePageProps) => {
  const { communityName } = params
  const community = await getCommunityInfo(communityName)

    return (
    <section className='flex mt-3 max-w-6xl mx-auto gap-8'>
        <div className='flex-1'>
            <PostForm />
            {community?.posts.map((post) => (
                <Post key={post.id} post={post} communityName={communityName}/>
            ))}
        </div>

        <SidebarCommunity communityName={communityName}/>
    </section>
  )
}

export default CommunityNamePage