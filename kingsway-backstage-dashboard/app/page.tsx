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
import MainNavbar from "@/components/ui/MainNavbar"

export default function Home() {
  return (
    <main className="">
      <MainNavbar></MainNavbar>
      <h1>Kingsway Worship Backstage lol</h1>
    </main>
  )
}
