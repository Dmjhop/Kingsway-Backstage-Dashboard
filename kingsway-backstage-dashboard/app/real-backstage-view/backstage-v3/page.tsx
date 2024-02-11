import PersonCard from "@/components/ui/PersonCard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewServiceForm from "@/components/ui/NewServiceForm"
import SmallCardBackground from "@/components/ui/SmallCardBackground"
import VerticalCardBackground from "@/components/ui/VerticalCardBackground"
import LargeCardBackground from "@/components/ui/LargeCardBackground"

export default async function BackstageView() {
  return (
    <div>
      {/* Header Component */}
      <header className="w-[731px] h-[68px] text-center text-white text-5xl font-black ">
        Kingsway Worship Dashboard
      </header>
      {/* Dashboard Entire Component */}
      <div
        className="grid grid-rows-3 grid-cols-4 justify-center mx-8
      ">
        {/* Header Component */}

        {/* Service Order Component */}
        <div className="row-start-1 row-span-1 justify-self-center">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium row-start-1 mx-auto">
            Service Order
          </h2>
          <SmallCardBackground></SmallCardBackground>
        </div>

        {/* MD Assignments Component */}
        <div className="row-start-2 row-span-1">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
            MD Assignments
          </h2>
          <SmallCardBackground></SmallCardBackground>
        </div>

        {/* Vocal Assignments Component */}
        <div className="col-start-2 row-start-1 row-span-2 justify-self-center">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-items-center mx-auto">
            Vocals
          </h2>
          <VerticalCardBackground></VerticalCardBackground>
        </div>

        {/* In Ear Monitors Assignments Component */}
        <div className="col-start-3 row-start-1 row-span-2 justify-self-center">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium justify-self-center mx-auto">
            In Ear Monitors
          </h2>
          <VerticalCardBackground></VerticalCardBackground>
        </div>

        {/* Instrument Packs Component */}
        <div className="col-start-4">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
            Instrument Packs
          </h2>
          <SmallCardBackground></SmallCardBackground>
        </div>

        {/* Wired IEMs Component */}
        <div className="col-start-4 row-start-2">
          <h2 className="w-[283px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
            Wired IEMs
          </h2>
          <SmallCardBackground></SmallCardBackground>
        </div>

        {/* Lower 3rd Row */}

        <div className="flex flex-row mx-auto gap-3">
          {/* Stage Layout Component */}
          <div className="">
            <h2 className="w-[370px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
              Stage Layout
            </h2>
            <LargeCardBackground></LargeCardBackground>
          </div>

          {/* Notes Component */}
          <div className="">
            <h2 className="w-[370px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
              Notes
            </h2>
            <LargeCardBackground></LargeCardBackground>
          </div>

          {/* Production Team */}
          <div className="">
            <h2 className="w-[370px] h-[50px] text-center text-white text-[32px] font-medium mx-auto">
              Production Team
            </h2>
            <LargeCardBackground></LargeCardBackground>
          </div>
        </div>
      </div>
    </div>
  )
}
