import { SessionProvider } from "next-auth/react"
import Header from "../components/header/header"
import AuthSession from "../components/authSession"
import "../styles/global.css"
import { Gowun_Dodum } from "next/font/google"
import Loading from "./loading"
import Image from "next/image"
import backImg from "../.next/static/image/backImage.png"

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// export const josefinSans = Josefin_Sans();
const gowun = Gowun_Dodum({weight:["400"], subsets:['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      
      <body className={`${gowun.className} bg-gradient-to-r from-[#140F22] to-[#372960] pt-20`}>
        <AuthSession>
          <Header />
          <div className='max-w-[1920px] mx-auto z-10'>
            {children}
          </div>
        </AuthSession>
      </body>
    </html>
  )
}
