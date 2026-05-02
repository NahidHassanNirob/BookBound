"use client";
import React, { useState } from "react";
import BookCard from "@/components/Home/BookCard";
import { Button } from "@heroui/react";

const AllBooksClient = ({ books }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  
  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* search box */}
      <div className="flex justify-end">
        <label className="input flex items-center gap-2 border border-gray-200 p-2 rounded-xl">
          <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search by title..."
            className="outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* category button */}
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((category, index) => (
              <Button
                key={index}
        
                className={`btn btn-sm lg:btn-md transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "btn-outline btn-neutral"          
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

       
        <div className="col-span-12 lg:col-span-10">
          {filteredBooks.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-xl italic">No books found!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksClient;