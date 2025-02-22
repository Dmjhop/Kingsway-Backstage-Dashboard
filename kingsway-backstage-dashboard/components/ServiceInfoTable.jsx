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

export default function ServiceInfoTable(props) {
  return (
    <div className="row-start-1 col-start-3 flex shrink flex-col  lg:order-3">
      <h2 className=" text-center text-[#00bbe4] text-[32px] font-bold  mx-auto">
        Service Info
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="text-xl lg:font-normal lg:text-2xl">
            <TableHead>Person</TableHead>
            {/* <TableHead>Role</TableHead> */}
            <TableHead className="text-center">Role</TableHead>
          </TableRow>
        </TableHeader>
        {/* <TableHeader>
          <TableRow>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody className="font-normal text-2xl">
          {/* <TableRow className="text-lg lg:font-normal lg:text-2xl">
            <TableCell>Sermon Series</TableCell>
            <TableCell className="text-lg lg:font-normal lg:text-2xl text-center">
              {props.sermonSeriesTitle}
            </TableCell>
          </TableRow> */}
          {/* <TableRow className="text-lg lg:font-normal lg:text-2xl">
            <TableCell>Sermon Title</TableCell>
            <TableCell className="text-lg lg:font-normal lg:text-2xl text-center">
              {props.sermonTitle}
            </TableCell>
          </TableRow> */}
          {props.people.map((person) => (
            <TableRow
              key={person.name}
              className="text-lg lg:font-normal lg:text-2xl">
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
              <TableCell className="text-lg lg:font-normal lg:text-2xl text-center">
                {person.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
