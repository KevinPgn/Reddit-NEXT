import { Button } from "@/components/ui/button"

export const SubmitBtn = ({text}: {text: string}) => {
  return <>
    <Button className="bg-orange-500 w-fit px-7 hover:bg-orange-600 dark:bg-green-500 text-white">{text}</Button>
  </>
}