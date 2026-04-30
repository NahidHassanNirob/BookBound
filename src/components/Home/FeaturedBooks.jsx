import { allBooks } from '@/lib/dataFetch';
import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = async() => {
   
    const books = await allBooks();
    
  
    // if (!books || !Array.isArray(books)) return null;

    const topFour = books.slice(0, 4);

    return (
        <div className='max-w-6xl mx-auto px-5 py-5 md:py-10 space-y-4'>
            <h2 className='text-3xl mb-16 text-center font-bold'>
                Featured Books
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {topFour.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};
 
export default FeaturedBooks;