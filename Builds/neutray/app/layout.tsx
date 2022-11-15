import '../styles/globals.css'
import Header from "./Header"
import { Providers } from './providers'
import { unstable_getServerSession } from "next-auth/next"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body>
        <Header/>
        {children}      
      </body>
    </html>
  )
}
