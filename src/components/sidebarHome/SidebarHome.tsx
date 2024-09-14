import Image from "next/image"
import { Button } from "@/components/ui/button"

export const SidebarHome = () => {
  return <div className="w-[350px] h-fit border border-gray-200 dark:border-zinc-800 rounded-md">
    <Image src="/banner.png" alt="banner" width={350} height={350} className="rounded-t-md" />

    <div className="p-4">
        <div className="flex items-center gap-2">
            <Image src="/hero-image.png" alt="pfp" width={35} height={35} className="relative bottom-7" />
            <span className="font-semibold relative bottom-3">Home</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-zinc-500 relative bottom-2">Your personal Reddit frontpage. Come here to check in with your favorite communities!</p>
        <div className="w-full h-[1px] bg-gray-200 dark:bg-zinc-800 mt-4 mb-4"></div>

        <Button variant="outline" className="w-full mb-3">
            Create Post
        </Button>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 dark:text-white">
            Create Community
        </Button>
    </div>
  </div>
}