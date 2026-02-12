import * as React from "react"

export function QaosIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.1369 22 16.1158 21.3283 17.7667 20.1818L20.5858 23L22 21.5858L19.1818 17.7667C20.3283 16.1158 21 14.1369 21 12C21 6.47715 16.5228 2 12 2ZM12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C14.0718 19.5 15.9463 18.6603 17.3033 17.3033C18.6603 15.9463 19.5 14.0718 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5Z"
      />
      {/* Optional: A simple inner circle for the "eye" / focus */}
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  )
}
