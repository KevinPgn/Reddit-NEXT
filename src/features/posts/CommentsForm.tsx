"use client"
import { createComment } from "@/app/r/[communityName]/post/[id]/post.action"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {Controller} from "react-hook-form"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {useRouter} from "next/navigation"

export const CommentsForm = ({postId, session}: {postId: string, session: any}) => {
  const {control, handleSubmit, formState: {errors}} = useForm()
  const router = useRouter()
  const onSubmit = async (data: any) => {
    if(!session){
        router.push("/api/auth/signin")
    }
    try{
      await createComment({...data, postId})
      toast.success("Comment created successfully")
    } catch (error) {
      toast.error("Failed to create comment")
    }
  }

  return <div className="flex flex-col gap-2">
    <ToastContainer />
    <p className="text-sm font-bold">Comment right there</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="content"
        rules={{required: true, minLength: 1, maxLength: 1000}}
        render={({field}) => (
          <Textarea {...field} />
        )}
      />
      {errors.content && <p className="text-sm text-red-500">Content is required</p>}
      <Button 
      className="bg-orange-500 mt-3 hover:bg-orange-600"
      type="submit">Comment</Button>
    </form>
  </div>
}