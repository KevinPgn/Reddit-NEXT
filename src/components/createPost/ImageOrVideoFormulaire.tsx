interface ImageOrVideoFormulaireProps {
  imageUrl: string
  setImageUrl: (imageUrl: string) => void
}

export const ImageOrVideoFormulaire = ({imageUrl, setImageUrl}: ImageOrVideoFormulaireProps) => {
  return <>
    <p>Image or Video</p>
  </>
}