"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import NewServiceForm from "@/components/ui/NewServiceForm"

export default function Services() {
  return (
    <div suppressHydrationWarning>
      <h1>Services Page</h1>
      <Dialog>
        <DialogTrigger>
          <Button>New Service</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Service</DialogTitle>
            <DialogDescription>Add a new service :)</DialogDescription>
          </DialogHeader>
          <NewServiceForm></NewServiceForm>
        </DialogContent>
      </Dialog>
    </div>
  )
}
