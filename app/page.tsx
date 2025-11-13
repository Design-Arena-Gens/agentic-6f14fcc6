import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Fresh, seasonal sabji delivered daily
          </h1>
          <p className="text-slate-600 text-lg">
            From farm to kitchen ? we supply homes, restaurants, and wholesale buyers with the freshest vegetables at fair prices.
          </p>
          <div className="flex gap-4">
            <Link href="/catalog" className="btn-primary">Browse Catalog</Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-50">Contact Us</Link>
          </div>
          <ul className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <li className="card p-4">Same-day local delivery</li>
            <li className="card p-4">Bulk/wholesale pricing</li>
            <li className="card p-4">Seasonal specials</li>
            <li className="card p-4">Hotel/restaurant supply</li>
          </ul>
        </div>
        <div className="relative h-72 sm:h-96 w-full rounded-lg overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop" alt="Vegetables" fill className="object-cover" />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Picks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['tomato','potato','onion','cucumber'].map((slug) => (
            <div key={slug} className="card p-4">
              <div className="h-40 relative w-full overflow-hidden rounded-md">
                <Image src={slug === 'tomato' ? 'https://images.unsplash.com/photo-1546470427-68a4e85d8b4e?q=80&w=1200&auto=format&fit=crop' : slug === 'potato' ? 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop' : slug === 'onion' ? 'https://images.unsplash.com/photo-1576698483491-c0e117d2f3a5?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1543339308-43f2d6b24f1b?q=80&w=1200&auto=format&fit=crop'} alt={slug} fill className="object-cover" />
              </div>
              <div className="mt-3 font-semibold capitalize">{slug}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
