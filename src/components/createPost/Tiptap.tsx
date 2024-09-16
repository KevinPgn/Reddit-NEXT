'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import { MenuBar } from './MenuBar'

const Tiptap = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({
      levels: [1, 2, 3]
    })],
    content: content,
  })


  return <>

    <MenuBar editor={editor}/>
    <EditorContent
    className='border min-h-[300px] border-gray-200 dark:border-gray-700 p-3 px-7 rounded-md mt-5'
    editor={editor} />
  </> 
  
}

export default Tiptap
