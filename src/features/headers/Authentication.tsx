"use client"
import { useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {Menu} from "lucide-react"

export const Authentication = () => {
  const { data: session } = useSession()

  return <div className="flex px-4 items-center gap-3 border border-gray-200 dark:border-zinc-800 rounded-full p-2">
    <Menu className="w-5 h-5 cursor-pointer" />
    <Avatar className="w-8 h-8">
      <AvatarImage src={session?.user?.image ?? ""}/>
    </Avatar>
  </div>
}