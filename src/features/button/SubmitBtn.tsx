"use client"
import { Button } from "@/components/ui/button"

export const SubmitBtn = ({text, onClick}: {text: string, onClick: any}) => {
  return <>
    <Button className="bg-orange-500 w-fit mt-5 px-7 hover:bg-orange-600 dark:bg-green-500 text-white" onClick={onClick}>{text}</Button>
  </>
}