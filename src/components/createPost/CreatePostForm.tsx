import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Video, ListPlus} from "lucide-react"
import { ImageOrVideoFormulaire } from "./ImageOrVideoFormulaire"
import { PostFormulaire } from "./PostFormulaire"

export const CreatePostForm = ({communityName}: {communityName: string}) => {
  return <div>
    <p className="text-lg font-bold mb-2">Subreddit: <span className="font-semibold text-orange-500 dark:text-orange-400">r/{communityName}</span></p>
    <Tabs defaultValue="post" className="w-full">
        <TabsList className="w-full h-12">
            <TabsTrigger className="w-[50%] h-full" value="post"><ListPlus className="w-4 h-4 mr-2" /> Post</TabsTrigger>
            <TabsTrigger className="w-[50%] h-full" value="image"><Video className="w-4 h-4 mr-2" /> Image & Video</TabsTrigger>
        </TabsList>
        <TabsContent value="post">
            <PostFormulaire />
        </TabsContent>
        <TabsContent value="image">
            <ImageOrVideoFormulaire />
        </TabsContent>
    </Tabs>
  </div>
}