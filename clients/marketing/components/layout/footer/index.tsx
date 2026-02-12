'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Youtube } from 'iconsax-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-24">
          {/* Column 1: Brand */}
          <div className="md:col-span-1 flex flex-col justify-between h-full min-h-[100px]">
            <div className="relative w-14 h-14 overflow-hidden rounded-[18px] border border-white/10 shadow-lg">
              <Image src="/logo-chaos.png" alt="Qaos Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="md:col-span-1 space-y-6">
            <h4 className="text-base font-semibold">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  The Strategist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  The Navigator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visual Oracle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Qaos Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Why us */}
          <div className="md:col-span-1 space-y-6">
            <h4 className="text-base font-semibold">Why us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Intent vs Scripts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Zero Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="md:col-span-1 space-y-6">
            <h4 className="text-base font-semibold">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  University
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="md:col-span-1 space-y-6">
            <h4 className="text-base font-semibold">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  Careers{' '}
                  <span className="text-[9px] bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded border border-gray-700 font-bold tracking-wider">
                    WE&apos;RE HIRING
                  </span>
                </a>
              </li>
              <li className="pt-4 flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H12.96l-5.328-6.88-6.105 6.88H8.22l7.633-8.836L7.35 2.25H9.68L14.39 8.357l3.854-6.107ZM17.08 19.498h1.838L6.69 4.29H4.665l12.415 15.208Z" />
                  </svg>
                  Twitter / X
                </a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <Youtube size="16" variant="Bold" color="currentColor" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>© 2026 Qaos Inc.</div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              GDPR
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              CCPA
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Trust and Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
