import { SkeletonCard } from "@/features/skeleton/SkeletonCard";
import { SkeletonForm } from "@/features/skeleton/SkeletonForm";

export default function Loading() {
  return <div className="flex max-w-[1600px] mt-5 mx-auto gap-10">
  <div className="flex-1">
    <SkeletonForm />
  </div>
  <SkeletonCard />
</div>
}