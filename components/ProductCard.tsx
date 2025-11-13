"use client"

import Image from 'next/image'
import { Product } from '@/lib/products'
import { useCart } from './CartProvider'

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCart()
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className="relative h-40 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="text-brand font-semibold">?{product.pricePerKg}/kg</span>
        </div>
        <div className="mt-1 text-xs text-slate-500">{product.category}{product.seasonal ? ' ? Seasonal' : ''}</div>
        <button
          onClick={() => addItem({ id: product.id, name: product.name, pricePerKg: product.pricePerKg, image: product.image }, 1)}
          className="btn-primary mt-4"
        >
          Add 1 kg
        </button>
      </div>
    </div>
  )
}
