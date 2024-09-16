"use client"
import { Input } from "@/components/ui/input"
import Tiptap from './Tiptap'
import { SubmitBtn } from "@/features/button/SubmitBtn"

interface PostFormulaireProps {
  title: string
  content: string
  setTitle: (title: string) => void
  setContent: (content: string) => void
}

export const PostFormulaire = ({title, content, setTitle, setContent}: PostFormulaireProps) => {
  return <div>
    <div className="flex flex-col mt-3 mb-5">
      <label htmlFor="title" className="text-md font-semibold mb-1">Title</label>
      <Input
        id="title"
        value={title}
        placeholder="e.g. My first post"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Tiptap content={content} setContent={setContent} />
    </div>
  </div>
}