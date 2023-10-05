import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
          {/* Header */}
      <header className="flex justify-between mx-5 px-4 items-center py-4 border-b">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src="mlmtires.png" alt="MLM Tires" className="w-30 h-11 mr-2" />
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-lg">Home</a></li>
            <li><a href="/products" className="text-lg">Products</a></li>
            <li><a href="#" className="text-lg">Services</a></li>
            <li><a href="#" className="text-lg">Contact</a></li>
          </ul>
        </nav>
      </header>
      {children}
      {/* Footer */}
      <footer className="py-4 border-t">
        <p className="text-center text-sm">© 2023 MLM Tires. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
