"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const BtnCreatePost = ({ communityName }: { communityName: string }) => {
  const router = useRouter()
  
  return <>
    <Button variant="outline" className="w-full" onClick={() => router.push(`/r/${communityName}/create`)}>
        Create Post
    </Button>
  </>
}