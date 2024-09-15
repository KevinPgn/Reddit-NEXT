import { getCommunityInformations } from "./communityInformations.action"
import Image from "next/image"
import { DescriptionArea } from "./DescriptionArea"
import { Cake } from "lucide-react"
import { BtnCreatePost } from "@/features/button/BtnCreatePost"
import { getSession } from "../utils/CacheSession"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const SidebarCommunity = async ({communityName}: {communityName: string}) => {
  const community = await getCommunityInformations(communityName)
  const session = await getSession()

  if(!community) return <div>Community not found</div>

  return (
    <div className="w-[350px] h-fit border border-gray-200 dark:border-zinc-800 rounded-md">
      <div className="border-t-lg bg-gray-100 dark:bg-zinc-800 h-12 flex items-center px-5 font-bold">
        <span>About Community</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
            {community.imageUrl ? (
            <Image
                src={community.imageUrl}
                alt={community.name}
                width={40}
                height={40}
                className="rounded-full"
            />
            ) : (
            <div className="w-14 h-14 bg-blue-500 dark:bg-purple-800 rounded-full"></div>
            )}

            <span className="text-lg font-semibold">r/{community.name}</span>
        </div>

        {session?.user?.id === community.creatorId ? (
          <DescriptionArea description={community.description} communityName={community.name} toast={toast}/> 
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400">{community.description}</p>
        )}

        <div className="flex items-center gap-2 mt-4">
          <Cake size={18} className="text-gray-600 dark:text-gray-400"/>
          <span className="block text-sm text-gray-600 font-semibold dark:text-gray-400">
            Created: {new Date(community.createdAt).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
          </span>
        </div>

        <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 mt-4 mb-3"></div>
        <BtnCreatePost />
      </div>
        <ToastContainer />
    </div>
  )
}