import AllBooksClient from "@/components/AllBooksClient";
import { allBooks } from "@/lib/dataFetch";


const AllBooksPage = async () => {
  const books = await allBooks();

  return (
    <div className="max-w-6xl mx-auto px-6 py-5 md:py-10 space-y-5">
      <h2 className="font-bold text-3xl">All Books</h2>
      <AllBooksClient books={books} />
    </div>
  );
};

export default AllBooksPage;