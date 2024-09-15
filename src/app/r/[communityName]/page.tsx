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
    <section className='flex mt-3 max-w-6xl mx-auto'>
        <div className='flex-1'>

        </div>

        <SidebarCommunity communityName={communityName}/>
    </section>
  )
}

export default CommunityNamePage