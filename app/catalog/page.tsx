"use client"

import { useMemo, useState } from 'react'
import { CATEGORIES, Product, searchProducts } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'

export default function CatalogPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('')
  const [seasonal, setSeasonal] = useState(false)

  const results = useMemo(() => searchProducts(query, category ? (category as any) : undefined, seasonal), [query, category, seasonal])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Catalog</h1>
      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search vegetables..."
          className="w-full md:max-w-sm rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <div className="flex items-center gap-3">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border border-slate-300 px-3 py-2">
            <option value="">All categories</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={seasonal} onChange={(e) => setSeasonal(e.target.checked)} />
            Seasonal only
          </label>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {results.length === 0 && (
          <div className="text-slate-600">No results. Try another search.</div>
        )}
      </div>
    </div>
  )
}
