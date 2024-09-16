'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import { MenuBar } from './MenuBar'

const Tiptap = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({
      levels: [1, 2, 3]
    }), Bold, Italic, Strike],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-md xl:prose-lg mx-auto focus:outline-none'
      }
    },
    content: "e.g. Hello World",
  })


  return <>
    <MenuBar editor={editor}/>
    <EditorContent
    className='border min-h-[150px] border-gray-200 dark:border-gray-700 p-3 rounded-md mt-5'
    editor={editor} />
  </> 
  
}

export default Tiptap
