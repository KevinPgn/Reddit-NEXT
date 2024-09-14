import { FileQuestion } from "lucide-react"

export const NoPosts = () => {
  return <div className="w-full mt-5 h-72 border border-gray-200 dark:border-gray-700 justify-center items-center flex flex-col rounded-lg p-4">
    <div className="flex items-center w-fit p-5 bg-orange-500/20 rounded-full">
      <FileQuestion className="w-10 h-10 text-orange-500" />
    </div>
    <p className="text-xl font-bold mt-3">No post have been created</p>
  </div>
}