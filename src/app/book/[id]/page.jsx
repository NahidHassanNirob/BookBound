import BookDetailsClient from "@/components/BookDetailsClient";
import BookNotFound from "@/components/BookNotFound";
import { allBooks } from "@/lib/dataFetch";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const allbooks = await allBooks();
  const match = allbooks.find((book) => book.id === Number(id));

  if (!match) {
    return (
      <BookNotFound></BookNotFound>
    );
  }

  
  return <BookDetailsClient match={match} />;
};

export default BookDetailsPage;