export function PrismLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Triangle/Prism outline */}
      <path
        d="M20 5L35 32H5L20 5Z"
        fill="none"
        stroke="#6b7280"
        strokeWidth="2"
      />
      
      {/* Incoming light beam (dashed) */}
      <line
        x1="0"
        y1="20"
        x2="16"
        y2="20"
        stroke="#9ca3af"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      
      {/* Center dot */}
      <circle cx="18" cy="20" r="3" fill="white" />
      
      {/* Rainbow light rays emanating from prism */}
      {/* Red */}
      <line x1="21" y1="20" x2="40" y2="10" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      {/* Orange */}
      <line x1="21" y1="20" x2="40" y2="14" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
      {/* Yellow */}
      <line x1="21" y1="20" x2="40" y2="18" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
      {/* Green */}
      <line x1="21" y1="20" x2="40" y2="22" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Blue */}
      <line x1="21" y1="20" x2="40" y2="26" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      {/* Purple */}
      <line x1="21" y1="20" x2="40" y2="30" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
