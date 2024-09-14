import { JoinedCommunity } from "./JoinedCommunity"
import { Links } from "./Links"
import { MyCommunity } from "./MyCommunity"
import { getSession } from "@/components/utils/CacheSession"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <div className="w-[220px] py-2 px-4 border-r overflow-y-auto border-gray-200 dark:border-zinc-800" style={{height: "calc(100vh - 80px)"}}>
    <Links />
    <MyCommunity sessionId={session?.user?.id}/>
    <JoinedCommunity />
  </div>
}