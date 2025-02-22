import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"
import "./globals.css"
import MainNavbar from "@/components/ui/MainNavbar"
import NextAuth from "next-auth/next"
import { ReactNode } from "react"
const dotenv = require("dotenv")
dotenv.config()

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Backstage Worship Dashboard",
  description: "Created by David Hopkins II",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
