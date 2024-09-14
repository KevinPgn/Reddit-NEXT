"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const BtnCreateCommunity = () => {
  const router = useRouter()

  return <>
    <Button className="w-full bg-orange-500 hover:bg-orange-700 dark:text-white" onClick={() => router.push("/create-community")}>
        Create Community
    </Button>
  </>
}