"use client"
import React from "react"
// import { useForm } from "react-hook-form"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// async function createService(data: FormData) {
//   "use server"
//   const firstName = data.get("First name")?.valueOf()
//   const lastName = data.get("Last name")?.valueOf()

//   console.log(firstName + lastName)
// }

export default function NewServiceForm() {
  return (
    <>
      <form action="" className="flex gap-3 flex-col">
        <Label
          htmlFor="text"
          className="grid w-full max-w-sm items-center gap-1.5">
          Service Preset
        </Label>
        {/* Need to figure out how to add the dropdown component in Shadcn for the form */}
        <select
          name="service presets"
          id="service presets"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="">Choose a Preset</option>
          <option value="sunday-service">Sunday Service</option>
          <option value="worship-night">Worship Night</option>
          <option value="rooted">Rooted</option>
          <option value="christmas-eve">Christmas Eve</option>
          <option value="easter">Easter</option>
        </select>

        <Label
          htmlFor="text"
          className="grid w-full max-w-sm items-center gap-1.5">
          Service Date:
        </Label>
        <Input
          type="date"
          placeholder="Date"
          name="Service Date"
          className=""
        />

        <Label
          htmlFor="text"
          className="grid w-full max-w-sm items-center gap-1.5">
          Service Name:
        </Label>
        <Input
          type="text"
          placeholder="Service Name"
          name="Service Name"
          className=""
        />

        <Button type="submit">Create New Service</Button>
      </form>
    </>
  )
}
