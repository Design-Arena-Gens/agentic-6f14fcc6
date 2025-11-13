export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-max py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} Sabji Bazaar. All rights reserved.</p>
        <p>
          Fresh vegetables for homes, restaurants, and wholesale. Call/WhatsApp: <a href="https://wa.me/919999999999" className="text-brand hover:underline" target="_blank">+91 99999 99999</a>
        </p>
      </div>
    </footer>
  )
}
