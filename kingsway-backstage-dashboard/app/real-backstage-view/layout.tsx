import "../globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function BackstageTVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-[1920px] h-[1080px] bg-slate-500">
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
