import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  )
}
