import React from "react"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

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

async function createService(data: FormData) {
  "use server"
  const firstName = data.get("First name")?.valueOf()
  const lastName = data.get("Last name")?.valueOf()

  console.log(firstName + lastName)
}

export default function NewServiceForm() {
  return (
    <>
      <form action={createService} className="flex gap-3 flex-col">
        <label htmlFor="" className="flex flex-col">
          First Name
          <input
            type="text"
            placeholder="First name"
            name="First name"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-sky-300 focus-within:bg-sky-300 outline-none"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          Last Name
          <input
            type="text"
            placeholder="Last name"
            name="Last name"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-sky-300 focus-within:bg-sky-300 outline-none"
          />
        </label>

        <Button type="submit">Create New Service</Button>
      </form>
    </>
  )
}
