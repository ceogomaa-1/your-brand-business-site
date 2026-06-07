import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Your Brand Business Site",
  description: "Built with Jarvis OS1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
