import Footer from '@/components/Footer'
import SearchHeader from '@/components/SearchHeader'
import { Inter } from 'next/font/google'
import './../globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next js',
  description: 'Google Clone Generated by create next app',
}
export default function SearchLayout({ children }) {
  return (
      <div className={inter.className }>
        <SearchHeader/>
        {children}
      </div>
  )
}
