import { CreatePostForm } from '@/components/createPost/CreatePostForm'
import { RulesReddit } from '@/features/rulesReddit/RulesReddit'

interface CreatePostPageProps {
  params: {
    communityName: string
  }
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ params }) => {
  const { communityName } = params
  
    return (
        <section className='w-full flex mt-5 max-w-[1100px] mx-auto gap-8'>
            <div className='flex-1'>
                <CreatePostForm communityName={communityName}/>
            </div>
            
            <RulesReddit />
        </section>
  )
}

export default CreatePostPage