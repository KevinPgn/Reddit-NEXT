import { FormCreateCommunity } from '@/components/communityCreate/FormCreateCommunity'
import React from 'react'

const CreateCommunityPage = () => {
  return (
    <section className='flex-1 mt-3 max-w-6xl mx-auto dark:border-zinc-800'>
        <h2 className='text-2xl font-extrabold'>Create Community</h2>
        <div className='w-full h-[1px] bg-gray-200 dark:bg-zinc-800 mt-4 mb-2'></div>

        <FormCreateCommunity />
    </section>
  )
}

export default CreateCommunityPage