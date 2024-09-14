import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {Menu} from "lucide-react"
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
import { SignOutButton } from "../auth/SignOutButton"
import Link from "next/link"

export const Authentication = ({session}: {session: any}) => {
  return <div className="flex px-4 items-center gap-3 border border-gray-200 dark:border-zinc-800 rounded-full p-2">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="w-5 h-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-5'>
      <DropdownMenuItem>
          <Link href="/create-community">
            <span>Create Community</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/create-post">
            <span>Create Post</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/settings">
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Avatar className="w-8 h-8">
      <AvatarImage src={session?.user?.image ?? ""}/>
    </Avatar>
  </div>
}