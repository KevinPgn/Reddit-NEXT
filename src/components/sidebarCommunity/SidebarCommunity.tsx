import { getCommunityInformations } from "./communityInformations.action"

export const SidebarCommunity = async ({communityName}: {communityName: string}) => {
  const community = await getCommunityInformations(communityName)

  if(!community) return <div>Community not found</div>

  return (
    <div className="w-[350px] h-fit border border-gray-200 dark:border-zinc-800 rounded-md">
      <div className="border-t-lg bg-gray-100 dark:bg-zinc-800 h-14"></div>
    </div>
  )
}