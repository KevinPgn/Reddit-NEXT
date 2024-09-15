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
        <section className='flex mt-3 max-w-6xl mx-auto gap-8'>
            <div className='flex-1'>
                <CreatePostForm communityName={communityName}/>
            </div>

            <RulesReddit />
        </section>
  )
}

export default CreatePostPage