import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-4">
      {/* Visual Graphic Element */}
      <div className="relative mb-8 flex items-center justify-center">
        <span className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 select-none">
          404
        </span>
        <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 -z-10 rounded-full"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-center">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-base md:text-lg text-center max-w-md mb-8 leading-relaxed">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Go Back Home
      </Link>
    </div>
  )
}