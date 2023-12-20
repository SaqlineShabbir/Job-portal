import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job-portal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} relative h-full font-sans antialiased`}>
        
        <main className='relative flex flex-col min-h-screen '>
          {/* TODO Navbar here */}
          <Navigation></Navigation>
         <div  className='flex-grow flex-1'> {children}</div>
          {/* TODO Footer here */}
          <Footer></Footer>
          </main>
       
       </body>
    </html>
  )
}
