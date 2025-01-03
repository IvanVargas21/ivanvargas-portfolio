import React from 'react'
import {Menu, X} from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants';


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-10 py-3 backdrop-blur-lg border-b border-neutral-700/80 w-full">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div>
              <p className="text-xl tracking-tight">ivan<span className="text-green-500"> vargas</span></p>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                  <li key={index}>
                  <a
                    href={item.href}
                    className="relative text-white hover:text-green-500 transition-all duration-300 ease-in-out"
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