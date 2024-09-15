"use client"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { updateCommunityDescription } from "./communityInformations.action"

export const DescriptionArea = ({ description, communityName }: { description: string | null, communityName: string }) => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      description: description ?? "",
      communityName: communityName
    }
  })

  const onSubmit = handleSubmit(async (data) => {
     await updateCommunityDescription(data)
  })

  return <>
    <form className="mt-3" onSubmit={onSubmit}>
      <Textarea 
      defaultValue={description ?? ""}
      {...register("description")} placeholder="e.g. This is a community for people who love to code with AI." />
      <Button disabled={isSubmitting} className="bg-orange-500 dark:text-white hover:bg-orange-600 w-full mt-3" type="submit">Save</Button>
    </form>
  </>
}