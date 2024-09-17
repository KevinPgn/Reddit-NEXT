import { VotesPost } from "./VotesPost"
import { MessageSquare } from "lucide-react"
import Link from "next/link"
import {getPostVotes} from "./post.action"
 import { getSession } from "@/components/utils/CacheSession" 
import { Share } from "./Share"

export const PostWithComments = async ({post, communityName}: {post: any, communityName: string}) => {  
  const session = await getSession()
  const {total : voteCount, userVote} = await getPostVotes(post.id, session?.user?.id)
  
  return (
    <div className="w-[600px] max-lg:w-full mb-3 flex border border-gray-200 rounded-md dark:border-[#262424] mt-3 overflow-hidden">
      <div className="w-[60px] bg-gray-100 dark:bg-[#191818]">
        <VotesPost postId={post.id} initialVotes={voteCount} initialUserVote={userVote}/>
      </div>

      <div className="flex-1 p-3">
        <div className="flex items-center gap-2">
          <Link href={`/r/${communityName}`} className="text-sm font-bold">r/{communityName}</Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">Posted by u/{post.author.name}</p>
        </div>

        <h1 className="text-lg hover:underline font-bold mt-4"><Link href={`/r/${communityName}/post/${post.id}`}>{post.title}</Link></h1>
        <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="mt-4"
        ></div>
        {post.imageUrl && (
          <div className="relative aspect-video w-full mt-4">
            <img
              src={post.imageUrl}
              alt="Uploaded image"
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex items-center gap-5 mt-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm text-gray-500 dark:text-gray-400">{post._count.comments} comments</span>
          </div>
          <Share communityName={communityName} postId={post.id} />
        </div>
      </div>
    </div>
  )
}