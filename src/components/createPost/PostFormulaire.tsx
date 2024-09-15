interface PostFormulaireProps {
  title: string
  content: string
  setTitle: (title: string) => void
  setContent: (content: string) => void
}

export const PostFormulaire = ({title, content, setTitle, setContent}: PostFormulaireProps) => {
  return <>
    <p>Post</p>
  </>
}