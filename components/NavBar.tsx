"use client"

import Link from 'next/link'
import { useCart } from './CartProvider'

export const NavBar: React.FC = () => {
  const { items } = useCart()
  const count = items.reduce((n, i) => n + 1, 0)
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="container-max py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-brand" />
          <span className="font-semibold text-xl">Sabji Bazaar</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/catalog" className="hover:text-brand">Catalog</Link>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
          <Link href="/cart" className="relative">
            <span className="hover:text-brand">Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-brand text-white rounded-full px-1.5 py-0.5">{count}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
