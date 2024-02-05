import PersonCard from "@/components/ui/PersonCard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewServiceForm from "@/components/ui/NewServiceForm"

export default function BackstageDisplay() {
  return (
    <>
      <h1>Backstage Display</h1>
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
    </>
  )
}
