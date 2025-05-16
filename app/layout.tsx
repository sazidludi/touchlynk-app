import "@styles/globals.css";
import { ThemeProvider } from "@components/ui/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TouchLynk Dashboard",
  description: "Advanced football analytics for every player",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans"> {/* Uses Tailwind's default sans stack */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
