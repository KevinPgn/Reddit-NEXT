"use client"
import { Share as ShareIcon } from "lucide-react"

export const Share = ({communityName, postId}: {communityName: string, postId: string}) => {
  return <div
  onClick={() => {
    navigator.clipboard.writeText(`https://localhost:3000/r/${communityName}/post/${postId}`)
  }}
  className="flex cursor-pointer hover:bg-gray-100 dark:hover:bg-[#262424] p-2 rounded-md items-center gap-2">
  <ShareIcon className="w-4 h-4" />
  <span className="text-sm text-gray-500 dark:text-gray-400">Share</span>
</div>
}