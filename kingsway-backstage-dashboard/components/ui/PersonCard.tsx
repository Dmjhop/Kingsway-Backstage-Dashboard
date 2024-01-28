"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"

export default function PersonCard() {
  return (
    <Card className="card-container flex">
      <CardHeader className="avatar-container flex justify-center w-48 h-48">
        <Avatar>
          <AvatarImage
            className="rounded-full"
            src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/78435458_10156842180863174_1020558987730354176_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=mYvDiOIpUUYAX8cY_Nr&_nc_ht=scontent-iad3-2.xx&oh=00_AfAhSXc6x5AdIq2MQSjNpH1rHIrkO2AuPmkELnwZZf38Ng&oe=65DE4BBB"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </CardHeader>
      <div className="text-container flex flex-col content-center ">
        <CardTitle className="name-text flex self-center">
          <h1>Josh D.</h1>
        </CardTitle>
        <CardDescription className="role-text flex self-center">
          <h2>Worship Leader - Male</h2>
        </CardDescription>
      </div>
    </Card>
  )
}
