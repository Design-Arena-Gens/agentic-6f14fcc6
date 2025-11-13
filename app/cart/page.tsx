"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'

function whatsappOrderText(items: ReturnType<typeof useCart>['items'], total: number) {
  const lines = [
    'New Sabji Order:',
    ...items.map(i => `- ${i.name}: ${i.qtyKg} kg x ?${i.pricePerKg}/kg = ?${i.qtyKg * i.pricePerKg}`),
    `Total: ?${total}`,
  ]
  return encodeURIComponent(lines.join('\n'))
}

export default function CartPage() {
  const { items, updateQty, removeItem, total, clear } = useCart()

  const waMsg = whatsappOrderText(items, total)
  const waHref = `https://wa.me/919999999999?text=${waMsg}`

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {items.length === 0 ? (
        <div className="card p-6 text-slate-600">
          Your cart is empty. <Link href="/catalog" className="text-brand hover:underline">Browse catalog</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="card p-4 flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-slate-500">?{item.pricePerKg}/kg</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded border" onClick={() => updateQty(item.id, Math.max(1, item.qtyKg - 1))}>-</button>
                  <input
                    type="number"
                    min={1}
                    value={item.qtyKg}
                    onChange={(e) => updateQty(item.id, Math.max(1, Number(e.target.value) || 1))}
                    className="w-16 rounded border text-center"
                  />
                  <button className="px-3 py-1.5 rounded border" onClick={() => updateQty(item.id, item.qtyKg + 1)}>+</button>
                </div>
                <div className="w-24 text-right font-semibold">?{item.qtyKg * item.pricePerKg}</div>
                <button className="text-red-600 text-sm hover:underline" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <aside className="card p-4 h-fit">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span>?{total}</span>
            </div>
            <a href={waHref} target="_blank" className="btn-primary mt-4 w-full text-center">Order via WhatsApp</a>
            <button className="mt-2 w-full text-sm text-slate-600 hover:underline" onClick={clear}>Clear cart</button>
            <p className="mt-3 text-xs text-slate-500">We will confirm availability and delivery time on WhatsApp.</p>
          </aside>
        </div>
      )}
    </div>
  )
}
