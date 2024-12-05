"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useState } from "react"
import { useEffect } from "react"
import { getTeamListing } from "@/app/api/getTeamListing"

import { teamListing } from "@/components/teamListing"

// const myHeaders = new Headers()
// myHeaders.append("Authorization", process.env.API_SECRET)

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
//   // cache: "force-cache",
// }

// Finding a list of service types can be found using this call:
// https://api.planningcenteronline.com/services/v2/service_types

export default function ServiceSettings(props) {
  let serviceLists = props.serviceList
  //   console.log(serviceLists)
  let [selectedService, setSelectedService] = useState("285446")
  let [selectedTeams, setSelectedTeams] = useState(["Production"])
  let teamList = []

  console.log(serviceLists.data.data)

  const handleChange = (e) => {
    console.log(e)
    setSelectedService(e)
    teamList = getTeamListing(selectedService)
  }
  console.log("this is outside of the handlechange method " + selectedService)

  // console.log(teamListing(selectedService))
  return (
    <div>
      <h2>Select below the Service you want?</h2>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" suppressHydrationWarning>
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Service Types</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedService}
            onValueChange={handleChange}
            onChange={handleChange}>
            {serviceLists.data.data.map((type) => {
              return (
                <DropdownMenuRadioItem key={type.id} value={type.id}>
                  {type.attributes.name}
                </DropdownMenuRadioItem>
              )
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1>Here is the Selected Service ID</h1>
      <p>{selectedService}</p>
      <h2>What teams would you like displayed?</h2>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Teams for that Service?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedTeams}
            onValueChange={setSelectedTeams}>
            {teamList.map((type) => {
              return (
                <DropdownMenuRadioItem key={type.id} value={type.id}>
                  {type.attributes.name}
                </DropdownMenuRadioItem>
              )
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
