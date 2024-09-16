"use client"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const VotesPost = ({postcount}: {postcount: number}) => {
  return <div className="flex flex-col items-center justify-center py-3">
    <Button variant="outline" className="w-10 h-10 p-0">
      <ArrowUp className="w-4 h-4" />
    </Button>
    <span className="text-sm font-bold my-1">{postcount}</span>
    <Button variant="outline" className="w-10 h-10 p-0">
      <ArrowDown className="w-4 h-4" />
    </Button>
  </div>
}