"use client"
import Link from "next/link"
import { Home, TrendingUp, Zap, Compass } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const Links = () => {
  const pathname = usePathname()

  return <div className="flex flex-col gap-2 mt-5">
    <Link href="/" className={cn("flex items-center hover:bg-gray-100 rounded-md dark:hover:bg-zinc-800 px-4 py-2 gap-2", pathname === "/" && "bg-gray-100 dark:bg-zinc-800 text-blue-500 dark:text-green-300 font-bold")}>
      <Home className="w-5 h-5" />
      Home
    </Link>
    <Link href="/" className={cn("flex items-center hover:bg-gray-100 rounded-md dark:hover:bg-zinc-800 px-4 py-2 gap-2", pathname === "/popular" && "bg-gray-100 dark:bg-zinc-800")}>
      <TrendingUp className="w-5 h-5" />
      Popular
    </Link>
    <Link href="/" className={cn("flex items-center hover:bg-gray-100 rounded-md dark:hover:bg-zinc-800 px-4 py-2 gap-2", pathname === "/all" && "bg-gray-100 dark:bg-zinc-800")}>
      <Zap className="w-5 h-5" />
      All
    </Link>
    <Link href="/" className={cn("flex items-center hover:bg-gray-100 rounded-md dark:hover:bg-zinc-800 px-4 py-2 gap-2", pathname === "/explore" && "bg-gray-100 dark:bg-zinc-800")}>
      <Compass className="w-5 h-5" />
      Explore
    </Link>
  </div>
}