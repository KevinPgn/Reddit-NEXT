import { Button } from "@/components/ui/button"

export const MenuBar = ({editor}: {editor: any}) => {
  if(!editor) return null
  
  return <>
    <div className="flex flex-wrap gap-5 mt-10">
        <Button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H1</Button>
        <Button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H2</Button>
        <Button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H3</Button>
        <Button 
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">Bold</Button>
        <Button 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">Italic</Button>
        <Button 
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">Strike</Button>
    </div> 
  </>
}