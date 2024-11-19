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

export default function BandTable(props) {
  // const picStyles = {
  //   borderRadius: "50%",
  //   boxShadow: `0px 0px 16px 3px rgb(0,187,228, 0.7)`,
  // }
  return (
    <div className="row-start-1 col-start-2 flex shrink flex-col order-3">
      <h2 className="text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
        Band
      </h2>
      <Table className="">
        <TableHeader>
          <TableRow className="font-normal text-2xl">
            <TableHead>Person</TableHead>
            <TableHead className="text-center">Instrument</TableHead>
            <TableHead className="text-center">IEM|MD|Inst Pack</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.band1.map((person) => (
            <TableRow key={person.id} className="font-normal text-2xl ">
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
              <TableCell className="text-center">{person.notes}</TableCell>
            </TableRow>
          ))}
          {props.band2.map((person) => (
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
              <TableCell className="text-center">{person.position}</TableCell>
              <TableCell className="text-center">{person.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
