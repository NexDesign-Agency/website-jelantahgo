'use client'

interface ReadingTimeProps {
  wordCount: number
  className?: string
}

// Average reading speed: 200 words per minute (Indonesian)
const WORDS_PER_MINUTE = 200

export default function ReadingTime({ wordCount, className = '' }: ReadingTimeProps) {
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE)

  return (
    <div className={`flex items-center gap-2 text-sm text-white/80 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span>
        {minutes === 1 ? '1 menit' : `${minutes} menit`} membaca
      </span>
    </div>
  )
}

