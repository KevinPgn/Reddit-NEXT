"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Video, ListPlus} from "lucide-react"
import { ImageOrVideoFormulaire } from "./ImageOrVideoFormulaire"
import { PostFormulaire } from "./PostFormulaire"
import { useState } from "react"

export const CreatePostForm = ({communityName}: {communityName: string}) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  
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
        </TabsContent>
        <TabsContent value="image">
            <ImageOrVideoFormulaire 
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            />
        </TabsContent>
    </Tabs>
  </div>
}