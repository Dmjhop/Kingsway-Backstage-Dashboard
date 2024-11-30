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
  Phone,
  Search,
  Cog,
  Home,
  Smartphone,
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
                  <Home className="pr-1" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Home Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href="/preview" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Search className="pr-1" />
                  Preview Mode
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Home Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Smartphone className="pr-1" />
                  Mobile Mode
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Backstage View Button */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href="/backstage/sunday-default" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Monitor className="pr-1" />
                  Backstage Mode
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
            {/* Home Navigation */}
            <NavigationMenuItem className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href="/settings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Cog className="pr-1" />
                  Settings
                </NavigationMenuLink>
              </Link>
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
