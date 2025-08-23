"use client"
import ClockComp from "@/components/ClockComp"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import localFont from "next/font/local"

const worshipFont = localFont({
  src: "./futuraCyrillicBold.ttf",
  variable: "--font-futura",
})

export default function WorshipNight() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

  const vocalsList = [
    {
      id: "1",
      name: "Kait",
      notes: "VOX | IEM 1",
    },
    {
      id: "2",
      name: "Tami",
      notes: "VOX | IEM 2",
    },
    {
      id: "3",
      name: "Devin",
      notes: "VOX | IEM 3",
    },
    {
      id: "4",
      name: "Rachel",
      notes: "VOX | IEM 4",
    },
    {
      id: "5",
      name: "Vic",
      notes: "VOX | IEM 5",
    },
    { id: "6", name: "Gui | John | Brendan | Gabe | Yaaseen", notes: "Wired" },
  ]

  const instrumentPacks = [
    {
      id: "1",
      name: "Kait",
      notes: "Wired AG1",
    },
    {
      id: "2",
      name: "Vic",
      notes: "Wired AG2",
    },
  ]

  const musicDirectors = [
    {
      id: "1",
      name: "Kait",
      notes: "Switch MD",
    },
    {
      id: "2",
      name: "Brendan",
      notes: "Wired MD 1",
    },
  ]

  const layoutStyles = {
    position: "static",
    top: "0px",
    left: "1100px",
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px 20px 20px 20px",
  }

  return (
    <div className={worshipFont.variable}>
      {/* <Snowfall /> */}
      <div className="max-h-screen">
        {/* Header Component */}
        <header className=" text-[#7cd656] text-5xl font-black flex flex-col lg:flex-row justify-between mx-10 py-9 lg:px-8">
          <h1
            className={`text-3xl text-center lg:font-extrabold lg:text-5xl font-futura`}>
            behold. worship nite - south dashboard
          </h1>
          <h2
            className={`text-2xl text-center lg:font-extrabold lg:text-5xl order-1`}>
            {today}
          </h2>
          <ClockComp />
        </header>
        <div
          className="flex flex-col lg:grid  lg:grid-cols-5 lg:mx-8  lg:px-6  lg:grid-rows-[minmax(1fr,_540px)_minmax(1fr,_540px)]

      ">
          <div className="row-start-1 col-start-1 flex shrink flex-col order-1 lg:order-1">
            <h2
              className={`font-futura text-center text-[#7cd656] text-[32px] font-bold  mx-auto`}>
              Vocals
            </h2>
            {/* VOCAL LISTING */}
            <Table className="">
              <TableHeader>
                <TableRow className="text-xl lg:font-normal lg:text-2xl">
                  <TableHead className={`font-futura`}>Person</TableHead>
                  {/* <TableHead>Role</TableHead> */}
                  <TableHead className={`font-futura text-center`}>
                    VOX|IEM
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vocalsList.map((person) => (
                  <TableRow
                    key={person.id}
                    className="lg:font-normal lg:text-2xl">
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl flex flex-row items-center gap-x-3`}>
                      {person.name}
                    </TableCell>
                    {/* <TableCell>{person.position}</TableCell> */}
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl text-center`}>
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* INSTRUMENT PACKS */}
          <div className="row-start-1 col-start-2 col-span-2 flex shrink flex-col order-2 lg:order-2">
            <h2
              className={`font-futura text-center text-[#7cd656] text-[32px] font-bold  mx-auto`}>
              Instrument Packs
            </h2>
            <Table className="">
              <TableHeader>
                <TableRow className="text-xl lg:font-normal lg:text-2xl">
                  <TableHead className={`font-futura `}>Person</TableHead>
                  {/* <TableHead>Role</TableHead> */}
                  <TableHead className={`font-futura text-center`}>
                    Instrument Packs
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instrumentPacks.map((person) => (
                  <TableRow
                    key={person.id}
                    className="lg:font-normal lg:text-2xl">
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl flex flex-row items-center gap-x-3`}>
                      {person.name}
                    </TableCell>
                    {/* <TableCell>{person.position}</TableCell> */}
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl text-center`}>
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* MUSIC DIRECTORS*/}
          <div className="row-start-1 col-start-4 col-span-2 flex shrink flex-col order-3 lg:order-3">
            <h2
              className={`font-futura text-center text-[#7cd656] text-[32px] font-bold  mx-auto`}>
              MDs
            </h2>
            <Table className="">
              <TableHeader>
                <TableRow className="text-xl lg:font-normal lg:text-2xl">
                  <TableHead className={`font-futura`}>Person</TableHead>
                  {/* <TableHead>Role</TableHead> */}
                  <TableHead className={`font-futura text-center`}>
                    MDs
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {musicDirectors.map((person) => (
                  <TableRow
                    key={person.id}
                    className="lg:font-normal lg:text-2xl">
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl flex flex-row items-center gap-x-3`}>
                      {person.name}
                    </TableCell>
                    {/* <TableCell>{person.position}</TableCell> */}
                    <TableCell
                      className={`font-futura text-lg lg:font-normal lg:text-2xl text-center`}>
                      {person.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="row-start-2 col-start-1 flex shrink flex-col order-3 lg:order-4">
            <Image
              src={"/njworshiplogo.png"}
              width={540}
              height={200}
              alt="This is the stage layout"
              style={{
                // borderRadius: "20px 20px 20px 20px",
                // border: "white 5px solid",
                // position: "relative",
                // bottom: "230px",
                // left: "1200px",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            />
            <Image
              src={"/kwlogo.png"}
              width={540}
              height={200}
              alt="This is the stage layout"
              style={{
                // borderRadius: "20px 20px 20px 20px",
                // border: "white 5px solid",
                // position: "relative",
                // bottom: "230px",
                // left: "1200px",
                width: "95%",
                height: "100%",
                display: "flex",
              }}
            />
          </div>
          <div className="row-start-1 col-start-2 col-span-4 row-span-2 flex flex-col order-1 lg:order-2">
            <Image
              src={"/StageLayout.png"}
              width={1280}
              height={800}
              alt="This is the stage layout"
              style={{
                borderRadius: "20px 20px 20px 20px",
                border: "#7cd656 7px solid",
                // position: "fixed",
                // bottom: "100px",
                // left: "700px",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
