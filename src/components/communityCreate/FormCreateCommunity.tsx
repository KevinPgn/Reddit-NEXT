"use client"
import { Input } from "@/components/ui/input"
import { createCommunity } from "./formCommunity.action"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface FormData {
  name: string;
}

export const FormCreateCommunity = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "r/"
    }
  })
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    const test = await createCommunity(data)
    console.log(test)
  }

  return (
    <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="text-md font-bold mb-1">Name</label>
      <p className="text-sm text-gray-500 dark:text-zinc-500 mb-3">Community names including capitalization cannot be changed!</p>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Community name is required",
          pattern: {
            value: /^r\/[a-zA-Z0-9]+$/,
            message: "Name must start with r/ and be alphanumeric"
          },
          minLength: {
            value: 4,
            message: "Name must be at least 4 characters long (including r/)"
          },
          maxLength: {
            value: 23,
            message: "Name must be at most 23 characters long (including r/)"
          }
        }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <Input
              {...field}
              onChange={(e) => {
                let value = e.target.value;
                if (!value.startsWith("r/")) {
                  value = "r/" + value.replace(/^r\//, "");
                }
                field.onChange(value);
              }}
              placeholder="r/CommunityName"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
          </div>
        )}
      />
      <div className="flex justify-end mt-4 gap-3">
        <Button
        onClick={() => {
          router.push("/")
        }}
        type="button" variant="outline">Cancel</Button>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 dark:text-white">Create Community</Button>
      </div>
    </form>
  )
}