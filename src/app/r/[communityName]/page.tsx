import { PostForm } from '@/components/postForm/PostForm'
import { SidebarCommunity } from '@/components/sidebarCommunity/SidebarCommunity'
import React from 'react'

interface CommunityNamePageProps {
    params: {
        communityName: string
    }
}

const CommunityNamePage = ({ params }: CommunityNamePageProps) => {
  const { communityName } = params

    return (
    <section className='flex mt-3 max-w-6xl mx-auto gap-8'>
        <div className='flex-1'>
            <PostForm />
        </div>

        <SidebarCommunity communityName={communityName}/>
    </section>
  )
}

export default CommunityNamePage