"use client"
import { useForm, Controller } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { updateCommunityDescription } from "./communityInformations.action"

export const DescriptionArea = ({ description, communityName, toast }: { description: string | null, communityName: string, toast: any }) => {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      description: description ?? "",
      communityName: communityName
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    try{
      toast.success("Community description updated")
      await updateCommunityDescription(data)
    } catch (error) {
      toast.error("Error updating community description")
    }
  })

  return <>
    <form className="mt-3" onSubmit={onSubmit}>
      <Controller
        name="description"
        control={control}
        rules={{ required: true, minLength: 5, maxLength: 100 }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Textarea
              {...field}
              placeholder="e.g. This is a community for people who love to code with AI."
              className={error ? 'border-red-500' : ''}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">
                {error.type === 'required' && 'Description is required'}
                {error.type === 'minLength' && 'Description must be at least 5 characters'}
                {error.type === 'maxLength' && 'Description must not exceed 100 characters'}
              </p>
            )}
          </>
        )}
      />
      <Button disabled={isSubmitting} className="bg-orange-500 dark:text-white hover:bg-orange-600 w-full mt-3" type="submit">Save</Button>
    </form>
    </>
}