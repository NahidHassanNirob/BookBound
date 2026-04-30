import { allBooks } from '@/lib/dataFetch';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponents = async () => {
    
    const books = await allBooks();

    return (
        <div className='bg-blue-50 border-y  border-blue-100'>
            <div className='max-w-6xl px-6 mx-auto'>
                <Marquee 
                    className='py-5' 
                    pauseOnHover={true} 
                    speed={50}
                    gradient={false}
                >
                    {books.map(book => (
                        <span key={book.id} className="mx-10  font-medium">
                    
                            New Arrivals: <span className="font-bold text-blue-800">{book.title}</span> 
                            <span className="mx-4 text-gray-400">|</span> 
                            <span className="text-red-600">Special Discount on Memberships!</span>
                        </span>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeComponents;