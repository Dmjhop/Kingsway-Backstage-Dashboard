import Navigation from "./Navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LayoutDashboard } from "lucide-react"

export default function MainNavbar() {
  return (
    <Card className="flex justify-between items-center mt-3 mx-36 px-5 py-3 z-50">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex flex-row items-center basis-1/5">
        BackBoard
      </h1>
      <div className="shrink justify-self-center">
        <LayoutDashboard className="w-16 h-16" />
      </div>
      <Navigation></Navigation>
    </Card>
  )
}
