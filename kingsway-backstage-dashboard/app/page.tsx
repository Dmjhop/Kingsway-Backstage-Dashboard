import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/ui/Navigation"

export default function Home() {
  return (
    <main className="">
      <h1>Kingsway Worship Backstage</h1>
      <Link href={`/backstage-tv-display`}>Backstage View</Link>
    </main>
  )
}
