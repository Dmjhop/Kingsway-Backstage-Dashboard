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

export default function InRoomProdTable(props) {
  return (
    <div className="row-start-2 col-start-1 flex flex-col order-4">
      <h3 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
        In Room
      </h3>
      <Table className="">
        <TableHeader>
          <TableRow className="font-normal text-2xl">
            <TableHead>Person</TableHead>
            <TableHead className="text-center">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.people.map((person) => (
            <TableRow key={person.id} className="font-normal text-2xl">
              <TableCell className="font-normal flex flex-row items-center gap-x-3">
                <Image
                  src={person.photo}
                  width={50}
                  height={50}
                  style={props.styles}
                  alt={`This is the profile pic of ${person.name}`}
                />
                {person.name}
              </TableCell>
              <TableCell className="text-center">{person.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
