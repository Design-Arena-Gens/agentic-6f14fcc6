import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <p>
            WhatsApp: <a href="https://wa.me/919999999999" target="_blank" className="text-brand hover:underline">+91 99999 99999</a>
          </p>
          <p>
            Phone: <a href="tel:+919999999999" className="text-brand hover:underline">+91 99999 99999</a>
          </p>
          <p>
            Email: <a href="mailto:hello@sabjibazaar.local" className="text-brand hover:underline">hello@sabjibazaar.local</a>
          </p>
          <p className="text-sm text-slate-600">Open daily 6:00?21:00</p>
        </div>
        <div className="card p-6 space-y-3">
          <h2 className="text-xl font-semibold">Visit us</h2>
          <p>Sabji Bazaar, Main Market Road, Your City</p>
          <Link
            href="https://maps.google.com/?q=Main%20Market%20Road"
            target="_blank"
            className="inline-block mt-2 text-brand hover:underline"
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
    </div>
  )
}
