"use client"
import { UploadDropzone } from "@uploadthing/react"
import { OurFileRouter } from "@/app/api/uploadthing/core"

interface ImageOrVideoFormulaireProps {
  imageUrl: string
  setImageUrl: (imageUrl: string) => void
}

export function ImageOrVideoFormulaire({ imageUrl, setImageUrl }: ImageOrVideoFormulaireProps) {
  return (
    <div className="space-y-4">
      {!imageUrl && (
        <UploadDropzone<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              setImageUrl(res[0].url)
            }
          }}
          onUploadError={(error: Error) => {
            console.error("Upload error:", error)
            // Handle error (e.g., show error message to user)
          }}
        />
      )}
      {imageUrl && (
        <div className="relative aspect-video w-full">
          <img
            src={imageUrl}
            alt="Uploaded image"
            className="object-cover rounded-lg"
            loading="lazy"
          />
          <button
            onClick={() => setImageUrl("")}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}