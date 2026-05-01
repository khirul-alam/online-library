"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  // এখানে তোমার Auth লজিক আসবে (BetterAuth বা অন্য কিছু)
  // উদাহরণস্বরূপ আমি একটি 'user' ভেরিয়েবল ধরে নিচ্ছি
  const user = null; // লগইন করা থাকলে এখানে ইউজার অবজেক্ট থাকবে

  const navOptions = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/all-books">All Books</Link></li>
      {user && <li><Link href="/profile">My Profile</Link></li>}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sm:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold gap-0">
          <span className="text-primary">Mango</span>Library
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navOptions}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-primary border">
              <div className="w-10 rounded-full">
                <img alt="User Profile" src={user?.image || "https://i.ibb.co/mR7097X/user.png"} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="px-4 py-2 font-semibold text-primary">{user?.name}</li>
              <li><Link href="/profile">View Profile</Link></li>
              <li><button className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm sm:btn-md">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;