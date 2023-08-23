import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sebastian',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='spikes relative bg-black h-96'>
        <Navbar/>

        </header>
        {children}
        </body>
    </html>
  )
}
