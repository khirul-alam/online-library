"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import booksData from "../../../public/books.json";
import { CiSearch } from "react-icons/ci";

const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  useEffect(() => {
    const filtered = booksData.filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-10">
        <div className="form-control w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books by title..."
              className="input input-bordered w-full pl-12 h-14 shadow-lg focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <CiSearch className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">        
        <aside className="w-full lg:w-1/4">
          <div className="bg-base-100 p-6 rounded-xl shadow-md border border-base-200 sticky top-24">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Categories</h2>
            <ul className="menu bg-base-100 w-full p-0 gap-2">
              {["All", "Story", "Tech", "Science"].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`hover:bg-primary hover:text-white transition-all ${
                      selectedCategory === cat ? "bg-primary text-white" : ""
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>        
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow"
                >
                  <figure className="px-4 pt-4 h-64">
                    <img
                      src={book.image_url}
                      alt={book.title}
                      className="rounded-xl h-full w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="badge badge-secondary badge-outline">
                      {book.category}
                    </div>
                    <h2 className="card-title text-lg h-14 overflow-hidden">
                      {book.title}
                    </h2>
                    <p className="text-gray-500 text-sm italic">
                      by {book.author}
                    </p>
                    <div className="card-actions justify-end mt-4">
                      <Link
                        href={`/book/${book.id}`}
                        className="btn btn-primary btn-sm w-full"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-400">
                  No books found!
                </h3>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllBooksPage;
