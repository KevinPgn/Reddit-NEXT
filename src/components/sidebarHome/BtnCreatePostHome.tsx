"use client"
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog"
import Link from "next/link"

export const BtnCreatePostHome = ({communityData}: {communityData: any}) => {
  console.log(communityData.map((community: any) => community.community.name))
  return <>
    <Dialog>
      <DialogTrigger className="w-full border border-gray-200 dark:border-zinc-800 rounded-md p-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 duration-75">
          Create Post
      </DialogTrigger>
      <DialogContent>
        {communityData.map((community: any) => (
          <Link href={`/r/${community.community.name}/create`} key={community.community.id}>
            <div className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 duration-75 rounded-md">
              {community.community.name}
            </div>
          </Link>
        ))}
      </DialogContent>
    </Dialog>
  </>
}