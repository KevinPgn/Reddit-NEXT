import { RulesReddit } from '@/features/rulesReddit/RulesReddit'
import React from 'react'

interface CreatePostPageProps {
  params: {
    communityName: string
  }
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ params }) => {
  const { communityName } = params
  
    return (
        <section className='flex mt-3 max-w-6xl mx-auto gap-8'>
            <div className='flex-1'>
                
            </div>
            
            <RulesReddit />
        </section>
  )
}

export default CreatePostPage