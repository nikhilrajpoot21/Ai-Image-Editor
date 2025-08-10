"use client";
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'

const Headers = () => {
  const path = usePathname()
  return (
    <header className='fixed top-3 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
      <div className='backdrop-blur-md bg-white/20 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8'>
        <Link href="/" className='mr-10 md:mr-20'>
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="min-w-24 object-cover"
            width={96}
            height={24}
          />
        </Link>
        {path == '/' && <div className='hidden md:flex space-x-6'>
          <Link href="#features" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Features</Link>
          <Link href="#Premium" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Premium</Link>
          <Link href="#Contact" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Contact</Link>
          </div>}
          <div className='text-white flex items-center gap-3 ml-10 md:ml-20'>Login</div>
      </div>
    </header>
  )
}

export default Headers
