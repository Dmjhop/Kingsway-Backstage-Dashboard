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

export default function BroadcastProdTable2(props) {
  const getRidForCamVals = [
    "Broadcast Coordinator",
    "Video Switcher",
    "Broadcast Audio",
  ]

  // console.log(props.people)

  let cameraList = []

  cameraList = props.people.filter(
    (person) => !getRidForCamVals.includes(person.position)
  )

  // console.log("This is the result: " + cameraList)

  return (
    <div className="row-start-2 col-start-3 flex shrink flex-col order-6">
      <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
        Camera
      </h2>
      <Table className="h-[100px] ">
        <TableHeader>
          <TableRow className="text-xl lg:font-normal lg:text-2xl">
            <TableHead>Person</TableHead>
            <TableHead className="text-center">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cameraList.map((person) => (
            <TableRow key={person.id} className="lg:font-normal lg:text-2xl">
              <TableCell className="text-lg lg:font-normal lg:text-2xl flex flex-row items-center gap-x-3">
                <Image
                  src={person.photo}
                  width={50}
                  height={50}
                  style={props.styles}
                  alt={`This is the profile pic of ${person.name}`}
                />
                {person.name}
              </TableCell>
              <TableCell className="text-lg lg:font-normal lg:text-2xl text-center">
                {person.position}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
