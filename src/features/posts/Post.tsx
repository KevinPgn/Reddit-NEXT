import { VotesPost } from "./VotesPost"
import { MessageSquare, Share } from "lucide-react"

export const Post = ({post, communityName}: {post: any, communityName: string}) => {  
  return <div className="w-[600px] flex min-h-[170px] h-fit border border-gray-200 rounded-md dark:border-gray-700 mt-3">
    <div className="w-[60px] min-h-[170px] h-full bg-gray-100 dark:bg-gray-700 rounded-l-md">
      <VotesPost postcount={post._count.votes}/>
    </div>

    <div className="flex-1 p-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">r/{communityName}</span>
        <p className="text-sm text-gray-500 dark:text-gray-400">Posted by u/{post.author.name}</p>
      </div>

      <h1 className="text-lg font-bold mt-4">{post.title}</h1>
      <div
      dangerouslySetInnerHTML={{ __html: post.content }}
      className="mt-4"
      ></div>
      
      <div className="flex items-center gap-5 mt-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{post._count.comments} comments</span>
        </div>
        <div className="flex items-center gap-2">
          <Share className="w-4 h-4" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Share</span>
        </div>
      </div>
    </div>
  </div>
}