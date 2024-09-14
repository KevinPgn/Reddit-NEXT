import { PostForm } from "@/components/postForm/PostForm";
import { SidebarHome } from "@/components/sidebarHome/SidebarHome";

export default function Home() {
  return (
  <div className="flex max-w-[1600px] mt-5 mx-auto gap-10">
    <div className="flex-1">
      <PostForm />
    </div>
    <SidebarHome />
  </div>
  );
}
