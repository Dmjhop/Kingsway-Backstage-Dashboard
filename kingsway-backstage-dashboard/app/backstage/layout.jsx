import { ThemeProvider } from "@/components/ui/theme-provider"

import clsx from "clsx"

export default function BackstageTVLayout({ children }) {
  return (
    <div className="w-full h-full backPic">
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
