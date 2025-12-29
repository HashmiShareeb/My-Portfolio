import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Shareeb Hashmi',
  description: 'Portfolio of Shareeb Hashmi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth focus:scroll-auto list-none">
      <body
        className={`${poppins.className}  bg-zinc-100 dark:bg-slate-950 text-slate-600 dark:text-slate-100 transition-colors duration-300 `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
