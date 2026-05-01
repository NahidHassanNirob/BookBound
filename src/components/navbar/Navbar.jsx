"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import logo from "@/assest/image/logo.png"; // বানান ঠিক করা হয়েছে
import Image from "next/image";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handelLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          setIsMenuOpen(false); 
        },
      },
    });
  };

  const links = (
    <>
      <li><Link className="hover:text-green-500 transition-colors" href="/">Home</Link></li>
      <li><Link className="hover:text-green-500 transition-colors" href="/books">All Books</Link></li>
      {user && (
        <li><Link className="hover:text-green-500 transition-colors" href="/profile">My Profile</Link></li>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-background/70 backdrop-blur-lg">
      <header className="max-w-6xl mx-auto h-16 px-6 grid grid-cols-2 md:grid-cols-3 items-center">
       
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Link href="/">
            <Image className="h-10 w-auto object-contain" src={logo} alt="PixGen Logo" priority />
          </Link>
        </div>

      
        <ul className="hidden  items-center justify-center gap-4 md:flex font-medium">
          {links}
        </ul>

        
        <div className="flex justify-end items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <Link href={"/profile"}>
              <Image
                className="h-9 w-9 rounded-full border-2 border-green-500"
                src={user?.image || "/default-avatar.png"}
                alt={user?.name || "User"}
                height={40}
                width={40}
              />
              </Link>
              <Button  
                variant="danger"
                onClick={handelLogout} 
                className="text-white"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link href="/signin">
                <Button variant="ghost" className="font-semibold">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-green-500 text-white font-semibold">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-xl md:hidden animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-4 p-6 font-medium text-gray-800">
            {links}
            <hr className="my-2" />
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                   <Button variant="flat" className="w-full">Sign in</Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                   <Button className="bg-green-500 text-white w-full">Sign up</Button>
                </Link>
              </div>
            ) : (
              <Button onClick={handelLogout} className="w-full bg-red-500 text-white ">
                Logout
              </Button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;