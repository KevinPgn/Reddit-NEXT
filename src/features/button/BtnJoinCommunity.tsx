import { Button } from "react-day-picker"

export const BtnJoinCommunity = ({communityName}: {communityName: string}) => {
  return <>
    <Button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600">Join for post</Button>
  </>
}