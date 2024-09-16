"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Video, ListPlus} from "lucide-react"
import { ImageOrVideoFormulaire } from "./ImageOrVideoFormulaire"
import { PostFormulaire } from "./PostFormulaire"
import { useState } from "react"
import { SubmitBtn } from "@/features/button/SubmitBtn"
import { createPost } from "@/app/r/[communityName]/create/createPost.action"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const CreatePostForm = ({communityName}: {communityName: string}) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (imageUrl) {
      try{
        await createPost({communityName, title, content, imageUrl})
        toast.success("Post created successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error creating post")
      }
    } else {
      try{
        await createPost({communityName, title, content})
        toast.success("Post created successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error creating post")
      }
    }
  }

  return <div>
    <p className="text-lg font-bold mb-2">Subreddit: <span className="font-semibold text-orange-500 dark:text-orange-400">r/{communityName}</span></p>
    <Tabs defaultValue="post" className="w-full">
        <TabsList className="w-full h-12">
            <TabsTrigger className="w-[50%] h-full" value="post"><ListPlus className="w-4 h-4 mr-2" /> Post</TabsTrigger>
            <TabsTrigger className="w-[50%] h-full" value="image"><Video className="w-4 h-4 mr-2" /> Image & Video</TabsTrigger>
        </TabsList>
        <TabsContent value="post">
            <PostFormulaire 
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            />
            <SubmitBtn text="Create Post" onClick={handleSubmit} />
        </TabsContent>
        <TabsContent value="image">
            <ImageOrVideoFormulaire 
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            />
        </TabsContent>
    </Tabs>
    <ToastContainer />
  </div>
}