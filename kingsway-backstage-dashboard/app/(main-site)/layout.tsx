import MainNavbar from "@/components/ui/MainNavbar"

export default function MainSiteLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <MainNavbar></MainNavbar>
      {children}
    </div>
  )
}
