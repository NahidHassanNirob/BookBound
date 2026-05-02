'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center px-4">
    
      <h1 className="text-9xl font-bold text-zinc-200">404</h1>
      
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          Page Not Found
        </h2>
        <p className="text-zinc-500 mt-2">
          Sorry, we couldnt find the page youre looking for.
        </p>
      </div>

   
      <div className="mt-8">
        <Link 
          href="/" 
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:opacity-80 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}