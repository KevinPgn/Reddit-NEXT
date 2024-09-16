"use client"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback, useTransition } from "react"
import { voteOnPost } from "./post.action"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface VotesPostProps {
  postId: string;
  initialVotes: number;
  initialUserVote?: "UP" | "DOWN" | any;
}

export const VotesPost = ({ postId, initialVotes, initialUserVote }: VotesPostProps) => {
  const [isPending, startTransition] = useTransition()
  const { data: session } = useSession()
  const router = useRouter()
  
  const handleVote = useCallback((voteType: "UP" | "DOWN") => {
    if (!session) {
      router.push("/api/auth/signin")
      return
    }
    
    startTransition(async () => {
      await voteOnPost({ postId, voteType })
    })
  }, [postId, session, router, startTransition])

  return (
    <div className="flex flex-col items-center justify-center py-3">
      <Button 
        variant="outline" 
        className={`w-10 h-10 p-0 ${initialUserVote === "UP" ? "bg-blue-500" : ""}`}
        onClick={() => handleVote("UP")}
        disabled={isPending}
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
      <span className="text-sm font-bold my-1">{initialVotes}</span>
      <Button 
        variant="outline" 
        className={`w-10 h-10 p-0 ${initialUserVote === "DOWN" ? "bg-red-500" : ""}`}
        onClick={() => handleVote("DOWN")}
        disabled={isPending}
      >
        <ArrowDown className="w-4 h-4" />
      </Button>
    </div>
  )
}