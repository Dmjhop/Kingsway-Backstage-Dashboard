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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Kingsway Worship Backstage</h1>
      <Link href={`/backstage-tv-display`}>Backstage View</Link>
    </main>
  )
}
