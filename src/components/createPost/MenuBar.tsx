import { Button } from "@/components/ui/button"

export const MenuBar = ({editor}: {editor: any}) => {
  if(!editor) return null
  
  return <>
    <div className="flex flex-wrap gap-5 mt-10">
        <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H1</Button>
        <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H2</Button>
        <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-green-500 text-white" type="button">H3</Button>
    </div> 
  </>
}