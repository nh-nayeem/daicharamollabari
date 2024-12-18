'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              মোল্লা বাড়ী
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/about'
                  ? 'bg-green-700 text-white'
                  : 'text-green-100 hover:bg-green-700'
              }`}
            >
              পরিচিতি
            </Link>
            <Link
              href="/family"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/family'
                  ? 'bg-green-700 text-white'
                  : 'text-green-100 hover:bg-green-700'
              }`}
            >
              মোল্লা পরিবার
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/contact'
                  ? 'bg-green-700 text-white'
                  : 'text-green-100 hover:bg-green-700'
              }`}
            >
              যোগাযোগ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:bg-green-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/about'
                ? 'bg-green-700 text-white'
                : 'text-green-100 hover:bg-green-700'
            }`}
          >
            পরিচিতি
          </Link>
          <Link
            href="/family"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/family'
                ? 'bg-green-700 text-white'
                : 'text-green-100 hover:bg-green-700'
            }`}
          >
            মোল্লা পরিবার
          </Link>
          <Link
            href="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/contact'
                ? 'bg-green-700 text-white'
                : 'text-green-100 hover:bg-green-700'
            }`}
          >
            যোগাযোগ
          </Link>
        </div>
      </div>
    </nav>
  );
}
