import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import Navbar from '@/component/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App Lands_Sport',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
            </div>
          </div>
        </body>
    </html>
  )
}
