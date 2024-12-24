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

export default function ChrInRoom2(props) {
  const getRidForCamVals = ["In Room Tech Coordinator", "FOH Sound"]

  // console.log(props.people)

  let cameraList = []

  cameraList = props.people.filter(
    (person) => !getRidForCamVals.includes(person.position)
  )
  return (
    <div className="row-start-2 col-start-2 flex flex-col order-4">
      <h3 className="w-[283px] h-[50px] text-center text-[#76b972] text-[32px] font-bold justify-items-center mx-auto">
        {`In Room (cont'd)`}
      </h3>
      <Table className="">
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
