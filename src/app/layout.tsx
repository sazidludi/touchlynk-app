
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "TouchLynk Dashboard",
  description: "Advanced football analytics platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
