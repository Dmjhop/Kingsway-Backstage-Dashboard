"use client"

import * as React from "react"
import Link from "next/link"
import {
  Blinds,
  ChevronRightSquare,
  PlusSquare,
  RotateCw,
  Monitor,
  List,
} from "lucide-react"

import { Card } from "./card"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { DarkModeToggle } from "./DarkModeToggle"

//   ? Need to add the descriptions of each page

const components: { title: string; href: string; description: string }[] = [
  {
    title: "People Home",
    href: "/people",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Worship Team",
    href: "/people/#worship-team",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Production Team",
    href: "/people/#production-team",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Worship Team + Add Member",
    href: "/people/#worship-team",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Production Team + Add Member",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navigation() {
  return (
    <>
      <Card className="flex justify-center p-2">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Services Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/services">
                        <List className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Services
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Lets see what is happening next at Kingsway Church
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <ChevronRightSquare />
                    <ListItem href="/services#queue" title="Services Queue">
                      What is next in line <ChevronRightSquare />
                    </ListItem>
                  </li>
                  <ListItem
                    href="/services#recurring"
                    title="Recurring Services">
                    What happens each Sunday <RotateCw />
                  </ListItem>
                  <ListItem
                    href="/services#add-new-service"
                    title="Add New Service">
                    Add a new Service here! <PlusSquare />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* People Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <NavigationMenuTrigger>People</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-col-2 gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
                  {/* <li className="col-span-">
                    <ListItem href="/people" title="People Home">
                      People Home
                    </ListItem>
                  </li> */}
                  <ListItem
                    href="/people#worship-team"
                    title="Worship Team List"
                    className="row-start-1">
                    Worship Team List
                  </ListItem>
                  <ListItem
                    href="/people#production-team"
                    title="Production Team List"
                    className="">
                    Production Team List
                  </ListItem>
                  <li className=" col-start-2">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col  rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/people">
                        <List className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          People
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Manage People on the Worship & Production Teams
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Backstage View Button */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link
                href="/real-backstage-view/backstage-v3"
                legacyBehavior
                passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Monitor className="pr-1" />
                  Backstage View
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DarkModeToggle></DarkModeToggle>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Card>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
