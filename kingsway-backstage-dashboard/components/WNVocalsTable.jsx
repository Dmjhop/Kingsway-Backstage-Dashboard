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

export default function WNVocalsTable(props) {
  const getRidForVocalVals = [
    "Acoustic Guitar",
    "Bass",
    "Drums",
    "Electric",
    "Keys",
  ]

  // console.log(props.people)

  let trueVocalList = []

  trueVocalList = props.people.filter(
    (person) => !getRidForVocalVals.includes(person.position)
  )
  return (
    <div className="row-start-1 col-start-1 flex shrink flex-col order-1">
      <h2 className="w-[283px] h-[50px] text-center text-[#00bbe4] text-[32px] font-bold justify-items-center mx-auto">
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
          {trueVocalList.map((person) => (
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
