import BookDetailsClient from "@/components/BookDetailsClient";
import { allBooks } from "@/lib/dataFetch";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const allbooks = await allBooks();
  const match = allbooks.find((book) => book.id === Number(id));

  if (!match) {
    return (
      <div className="text-center py-20 text-2xl font-light italic">
        Book not found!
      </div>
    );
  }

  
  return <BookDetailsClient match={match} />;
};

export default BookDetailsPage;