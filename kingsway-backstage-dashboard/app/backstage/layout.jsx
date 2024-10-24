import { ThemeProvider } from "@/components/ui/theme-provider"

import clsx from "clsx"

import backImage from "@/public/backstagebackground.png"
import Image from "next/image"

import otherstyles from "@/styles/otherstyles.module.css"

export default function BackstageTVLayout({ children }) {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </div>
  )
}
