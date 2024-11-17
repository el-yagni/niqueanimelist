import { Gabarito } from 'next/font/google'
import '@/app/globals.css'
import Naavbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'NiqueAnimeList',
  description: 'Silahkan di kunjungi tonton animenya biar admin senang hehe🤣',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        
        <header>
          <Naavbar/>
        </header>
        {children}</body>
    </html>
  )
}
