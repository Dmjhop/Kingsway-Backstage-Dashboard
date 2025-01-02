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

export default function OnlineProdTable(props) {
  return (
    <div className=" row-start-2 col-start-4 flex shrink flex-col order-7">
      <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
        Online
      </h2>
      <Table>
        <TableHeader className="text-xl lg:font-normal lg:text-2xl">
          <TableRow>
            <TableHead>Person</TableHead>
            <TableHead className="text-center">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.people.map((person) => (
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
