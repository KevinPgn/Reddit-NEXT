import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./ToggleDarkTheme"
import { Authentication } from "./Authentication"
import { getSession } from "@/components/utils/CacheSession"
import { SignInButton } from "../auth/SignInButton"

export const Headers = async () => {
  const session = await getSession()
  console.log(session)
  return <header className="w-full px-2 border-b border-gray-200 dark:border-zinc-800 h-20">
    <nav className="flex max-w-[1600px] mx-auto items-center justify-between h-20">
      <Link href="/">
        <Image src="/Reddit-Logo.png" loading="lazy" alt="logo" width={170} height={170} />
      </Link>

      <div className="flex items-center gap-4">
        <ModeToggle />
        {!session ? <SignInButton /> : <Authentication />}
      </div>
    </nav>
  </header>
}