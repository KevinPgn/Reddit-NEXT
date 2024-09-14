import {ChevronDown, ChevronUp} from "lucide-react"

export const MyCommunity = () => {
  return <>
    <div className="flex items-center cursor-pointer mt-7 justify-between">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 font-bold">MY COMMUNITY</h2>
        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </div>
  </>
}