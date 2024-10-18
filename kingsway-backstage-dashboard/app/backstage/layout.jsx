import { ThemeProvider } from "@/components/ui/theme-provider"

import clsx from "clsx"

export default function BackstageTVLayout({ children }) {
  return (
    <div className="w-[100vw] h-[100vh] backPic">
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
