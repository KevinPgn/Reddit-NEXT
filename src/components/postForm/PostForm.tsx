import { Image, Link2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const PostForm = () => {
  return <div className="w-[600px] max-lg:w-full border shadow-sm rounded-md p-3 flex items-center gap-4">
    <img src="/pfp.png" loading="lazy" className="w-10 h-10 rounded-full" alt="pfp reddit" />
    <Input className="w-[400px] bg-transparent" placeholder="Create Post" />
    <Button variant="outline" className="px-3">
      <Image className="w-5 h-5" />
    </Button>
    <Button variant="outline" className="px-3">
      <Link2 className="w-5 h-5" />
    </Button>
  </div>    
}