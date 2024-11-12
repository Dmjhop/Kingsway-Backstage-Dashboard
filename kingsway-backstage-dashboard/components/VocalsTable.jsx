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

export default function VocalsTable(props) {
  return (
    <div className="row-start-1 col-start-1 flex shrink flex-col order-2">
      <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
        Vocals
      </h2>
      <Table className="">
        <TableHeader>
          <TableRow className="font-normal text-2xl">
            <TableHead>Person</TableHead>
            {/* <TableHead>Role</TableHead> */}
            <TableHead className="text-center">VOX|IEM|MD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.people.map((person) => (
            <TableRow key={person.id} className="font-normal text-2xl">
              <TableCell className="font-normal text-2xl flex flex-row items-center gap-x-3">
                <Image
                  src={person.photo}
                  width={50}
                  height={50}
                  style={props.styles}
                  alt={`This is the profile pic of ${person.name}`}
                />
                {person.name}
              </TableCell>
              {/* <TableCell>{person.position}</TableCell> */}
              <TableCell className="text-center">{person.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
