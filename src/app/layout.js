import React, { useEffect, useState } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import Headroom from 'react-headroom';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
          {/* Header */}
      <Headroom className="head-color">
        <header className="flex justify-between mx-5 px-4 items-center py-4 border-b head-color">
            {/* Logo and Company Name */}
            <div className="flex items-center">
              <img src="mlmtires.png" alt="MLM Tires" className="w-40 h-15 mr-3" />
            </div>
            
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-8">
                <li><a href="/" className="text-lg">Home</a></li>
                <li><a href="/products" className="text-lg">Products</a></li>
                <li><a href="#" className="text-lg">Returns</a></li>
                <li><a href="#" className="text-lg">Contact</a></li>
              </ul>
            </nav>
        </header>
      </Headroom>
      {children}
      {/* Footer */}
      <footer className="py-4 border-t restrict-footer">
        <p className="text-center text-sm">© 2023 MLM Tires. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
