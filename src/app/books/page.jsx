import BookCard from '@/components/Home/BookCard';
import { allBooks } from '@/lib/dataFetch';
import React from 'react';

const AllBooksPage = async() => {
    const books=await allBooks();
    return (
        <div className='max-w-6xl mx-auto px-6 py-5 md:py-10 space-y-5'>
            <h2 className='font-bold text-3xl '>All Books</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4'>
                {
                books.map(book=><BookCard key={book.id} book={book}></BookCard>)
            }
            </div>
        </div>
    );
};

export default AllBooksPage;