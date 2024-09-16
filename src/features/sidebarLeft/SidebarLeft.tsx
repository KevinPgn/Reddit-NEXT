import { JoinedCommunity } from "./JoinedCommunity"
import { Links } from "./Links"
import { MyCommunity } from "./MyCommunity"
import { getSession } from "@/components/utils/CacheSession"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <div className="hidden absolute top-0 left-0 h-screen bg-[#f6f6f2] dark:bg-[#0a0909] py-2 px-4 border-r overflow-y-auto border-gray-200 dark:border-zinc-800">
    <Links />
    <MyCommunity sessionId={session?.user?.id}/>
    <JoinedCommunity />
  </div>
}