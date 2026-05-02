import Link from 'next/link';
import { SearchIcon } from 'lucide-react'; 

export default function BookNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-orange-100 p-6 rounded-full mb-6">
        <SearchIcon className="w-16 h-16 text-orange-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Not Found!</h2>
      <p className="text-gray-600 mb-8 max-w-xs sm:max-w-md">
        Sorry, we couldn't find the book you are looking for. It might have been removed from our library.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/books" 
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-200"
        >
          Browse All Books
        </Link>
        <Link 
          href="/" 
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}