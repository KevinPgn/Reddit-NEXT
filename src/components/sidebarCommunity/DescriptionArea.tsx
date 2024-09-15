"use client"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export const DescriptionArea = ({ description }: { description: string | null }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      description: description ?? ""
    }
  })

  return <>
    <form className="mt-3">
      <Textarea {...register("description")} placeholder="e.g. This is a community for people who love to code with AI." />
      <Button className="bg-orange-500 dark:text-white hover:bg-orange-600 w-full mt-3" type="submit">Save</Button>
    </form>
  </>
}