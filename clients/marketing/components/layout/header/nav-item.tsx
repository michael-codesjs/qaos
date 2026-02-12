"use client";

import { useState } from "react";
import MegaMenu from "./mega-menu";

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
}

export default function NavItem({ label, hasDropdown }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Map label to menu type
  const menuType = label.toLowerCase() === "why us" ? "why-us" : "product";

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={`px-3 py-1.5 text-[13px] font-semibold text-gray-500 hover:text-foreground transition-all duration-200 flex items-center gap-1 rounded-md outline-none focus:ring-0
        ${isHovered ? "bg-gray-100/50" : ""}`}
      >
        {label}
        {hasDropdown && (
          <svg className={`w-3 h-3 transition-transform duration-300 ease-in-out ${isHovered ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {hasDropdown && (
        <MegaMenu 
          isVisible={isHovered} 
          type={menuType as "product" | "why-us"} 
        />
      )}
    </div>
  );
}
