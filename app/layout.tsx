import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/components/CartProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabji Bazaar | Fresh Vegetables Delivered',
  description: 'Fresh, seasonal vegetables for homes, hotels, and wholesale.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          <main className="container-max py-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
