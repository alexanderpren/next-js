import Link from "next/link"
import { useRouter } from "next/router"

interface propsActiveLink {
  text: string
  url: string
}

const style = {
  color: "#0070f3",
  textDecoration: "underline"
}

export const ActiveLink = ({ text, url }: propsActiveLink) => {
  const { asPath } = useRouter()
  return (
    <Link href={url} style={asPath === url ? style : undefined}>
      {text}
    </Link>
  )
}
