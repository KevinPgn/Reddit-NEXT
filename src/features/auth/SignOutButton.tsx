"use client"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const SignOutButton = () => {
  return <Button className="w-full" variant="destructive" onClick={() => signOut()}>Logout</Button>
}