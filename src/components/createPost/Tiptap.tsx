'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent
  className='border border-gray-200 dark:border-gray-700 p-3 px-7 rounded-md mt-10'
  editor={editor} />
}

export default Tiptap
