import React from 'react'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants';


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-10 py-3 lg:px-14 lg:py-2 backdrop-blur-lg border-b border-neutral-700/80 w-full lg:h-16">
      <div className="container px-4 mx-auto relative text-sm lg:pt-1">
        <div className="flex justify-between items-center">
          <p className="text-2xl 2xl:text-3xl tracking-tight">ivan<span className="text-green-500"> vargas</span></p>
          <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                  <li key={index}>
                  <a
                    href={item.href}
                    className="relative text-lg 2xl:text-2xl text-white hover:text-green-500 transition-all duration-300 ease-in-out"
                    style={{ textShadow: '3px 11px 6px rgba(0, 0, 0, 0.41)' }}
                  >
                    <span className="text-green-500">0<span>{index + 1}</span>.</span> {item.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar