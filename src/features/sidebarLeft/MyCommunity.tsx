import {ChevronDown, ChevronUp} from "lucide-react"
import { communityCreatedByTheConnectedUser } from "./community.action"
import Image from "next/image"
import Link from "next/link"

export const MyCommunity = async ({sessionId}: {sessionId: any}) => {
  const community = await communityCreatedByTheConnectedUser({sessionId})

  return <>
    <div className="flex items-center cursor-pointer mt-7 justify-between">
        <h2 className="text-xs text-gray-500 dark:text-gray-400 font-bold">MY COMMUNITY</h2>
        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </div>

    {community?.data?.map((community: any) => (
      <Link href={`/r/${community.name}`} key={community.id} className="flex items-center gap-2 mt-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md p-2 cursor-pointer">
        {community.imageUrl ? <Image src={community.imageUrl} alt={community.name} width={20} height={20} className="rounded-full" /> : <div className="w-7 h-7 bg-blue-500 rounded-full" />}
        <p className="text-md font-medium dark:text-gray-300">r/{community.name}</p>
      </Link>
    ))}
  </>
}