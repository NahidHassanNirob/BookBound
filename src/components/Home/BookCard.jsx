"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      }}
      className="card p-0 bg-base-100 shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
    >
      <figure>
        <Image
          className="w-full h-40 object-cover"
          src={book?.image_url}
          alt={book?.title}
          height={300}
          width={200}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{book?.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {book?.description}
        </p>
        <div className="card-actions mt-2">
          <Link href={`/book/${book?.id}`} className="w-full">
            <button className="btn btn-primary btn-sm w-full cursor-pointer hover:shadow-lg transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
