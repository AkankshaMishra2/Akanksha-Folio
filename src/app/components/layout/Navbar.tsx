'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Home', href: '#Hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  {name : 'Spotlight',href:'#achievements'}
]

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-sm transform rotate-45 flex items-center justify-center overflow-hidden">
        <span className="text-white font-bold text-lg transform -rotate-45">A</span>
      </div>
      <span className="text-xl font-light tracking-wider bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">KANKSHA</span>
    </div>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20 text-white transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <Logo />
            </a>
          </div>
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    "text-gray-300 hover:text-white",
                    "border border-transparent hover:border-purple-500/50",
                    "transition-all duration-300 transform hover:scale-105",
                    "hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                "text-gray-400 hover:text-white hover:bg-purple-500/10",
                "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              )}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-purple-500/20">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                "text-gray-300 hover:text-white",
                "border border-transparent hover:border-purple-500/50",
                "transition-all duration-300 transform hover:scale-105",
                "hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}