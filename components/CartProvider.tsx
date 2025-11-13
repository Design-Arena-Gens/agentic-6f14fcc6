"use client"

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

export type CartItem = {
  id: string
  name: string
  pricePerKg: number
  image: string
  qtyKg: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'qtyKg'>, qtyKg?: number) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qtyKg: number) => void
  clear: () => void
  total: number
}

const CartContext = createContext<CartContextType | null>(null)

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw) setValue(JSON.parse(raw))
    } catch {}
  }, [key])
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])
  return [value, setValue] as const
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useLocalStorage<CartItem[]>('sabji-cart', [])

  const addItem: CartContextType['addItem'] = (item, qtyKg = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => (i.id === item.id ? { ...i, qtyKg: i.qtyKg + qtyKg } : i))
      }
      return [...prev, { ...item, qtyKg }]
    })
  }

  const removeItem: CartContextType['removeItem'] = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const updateQty: CartContextType['updateQty'] = (id, qtyKg) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, qtyKg } : i)))
  }

  const clear = () => setItems([])

  const total = useMemo(() => items.reduce((sum, i) => sum + i.qtyKg * i.pricePerKg, 0), [items])

  const value = useMemo(() => ({ items, addItem, removeItem, updateQty, clear, total }), [items, total])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
