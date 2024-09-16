import { PostForm } from "@/components/postForm/PostForm";
import { SidebarHome } from "@/components/sidebarHome/SidebarHome";
import { NoPosts } from "@/features/posts/NoPosts";
import { Post } from "@/features/posts/Post";
import { getPosts } from "@/features/posts/post.action";

export default async function Home() {
  const posts = await getPosts()

  return (
  <div className="flex max-w-[1600px] mt-5 mx-auto gap-10">
    <div className="flex-1">
      <PostForm />
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} communityName={post.community.name} />
        ))
      )}
    </div>
    <SidebarHome />
  </div>
  );
}
